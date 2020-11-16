import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    categories: []
  },
  mutations: {
    GET_CATEGORIES(state, cat){
      state.categories = cat
    }
  },
  actions: {
    getItems(){
      axios.get('http://sva.talana.com:8000/api/product/')
        .then((accept) => {
          console.log(accept.data)
        })
    },
    getCategories({commit}){
      axios.get('http://sva.talana.com:8000/api/product-category/')
      .then((accept) => {
        commit('GET_CATEGORIES', accept.data)
      })
    }
  },
  modules: {
  }
})
