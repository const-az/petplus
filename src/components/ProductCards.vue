<template>
  <div>
    <v-row v-if="itemList.length > 0">
      <v-col cols="3" v-for="i in itemList" :key="i.id">
        <v-card class="mx-auto" flat>
          <v-img :src="i.attributes[0].icon" height="300px">
            <v-chip class="ma-2"
                :color=" i.stock>0 ? 'cyan' : 'red'"
                label
                text-color="white"
              >
                {{i.stock>0 ? 'Disponible' : 'Sin stock'}}
              </v-chip>
          </v-img>
          <p class="text-subtitle-1 mb-0 mt-5">{{i.name}}</p>
          <p class="text-subtitle-2">$ {{i.price}}</p>

          <v-card-actions>
            <v-btn-toggle dense>
              <v-btn icon @click="decrQty(i.id)" :disabled="i.stock == 0 || i.qty === 1">
                <v-icon>mdi-minus</v-icon>
              </v-btn>
              <v-btn icon>
                {{i.qty}}
              </v-btn>
              <v-btn icon @click="incrQty(i.id)" :disabled="i.stock == 0 || i.qty == i.stock">
                <v-icon>mdi-plus</v-icon>
              </v-btn>
              <v-btn icon :disabled="i.stock == 0" @click="addProduct(i)">
                <v-icon>mdi-cart-plus</v-icon>
              </v-btn>
            </v-btn-toggle>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
    <div v-else class="my-10">
      <p class="text-center text-h6">Producto no encontrado</p>
    </div>
    <product-modal v-if="showModal" @close-modal="closeModal" :currentItem="currentItem" :showModal="showModal"></product-modal>
  </div>
</template>

<script>
import ProductModal from './ProductModal'
import { mapState, mapActions } from "vuex";

export default {
  components: {
    ProductModal
  },
  data(){
    return{
      showModal: false,
      currentItem: Object
    }
  },
  methods: {
    ...mapActions(["getItems"]),
    incrQty(id) {
      let idx = this.items.map(p => p.id).indexOf(id)
      if(this.items[idx].qty < this.items[idx].stock) {
        this.items[idx].qty++
      }
    },
    decrQty(id) {
      let idx = this.items.map(p => p.id).indexOf(id)
      if(this.items[idx].qty > 1) {
        this.items[idx].qty--
      }
    },
    addProduct(item){
      this.openItem(item)
    },
    openItem(item) {
      this.currentItem = item
      this.showModal = true;
    },
    closeModal() {
      this.showModal = false;
      this.currentItem = Object
    },
  },
  computed: {
    ...mapState(["items", "search"]),
    itemList(){
      return this.items.filter(p => {
        return p.name.toLowerCase().includes(this.search.toLowerCase())
      })
    },
  },
  created() {
    this.getItems();
  },
};
</script>