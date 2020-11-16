<template>
  <div>
    <v-row>
      <v-col cols="3" v-for="i in items" :key="i.id">
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
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  methods: {
    ...mapActions(["getItems","addToCart"]),
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
      this.addToCart(item)
    }
  },
  computed: {
    ...mapState(["items"]),
  },
  created() {
    this.getItems();
  },
};
</script>