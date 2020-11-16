import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    items: [],
    categories: [],
    cart: {
      items: [],
      total: 0
    },
    search: '',
  },
  mutations: {
    GET_CATEGORIES(state, cat){
      state.categories = cat
    },
    GET_ITEMS(state, it){
      state.items = []
      it.forEach( prod => {
        prod['qty'] = 1
        state.items.push(prod)
      })
    },
    ADD_TO_CART(state, item){
      let target = state.cart.items.find(p => p.name == item.name)
      if(target){
        target.qty += 1
      } else{
        state.cart.items.push(item)
      }
      state.cart.total += item.price * item.qty
    },
    UPDATE_SEARCH(state, search){ state.search = search },
  },
  actions: {
    getItems({commit}){
      axios.get('http://sva.talana.com:8000/api/product/')
        .then((accept) => {
          commit('GET_ITEMS', accept.data)
        })
    },
    getCategories({commit}){
      axios.get('http://sva.talana.com:8000/api/product-category/')
      .then((accept) => {
        commit('GET_CATEGORIES', accept.data)
      })
    },
    addToCart({commit}, item){ commit('ADD_TO_CART', item) },
    updateSearch({commit}, search){ commit('UPDATE_SEARCH', search) },
  },
})
