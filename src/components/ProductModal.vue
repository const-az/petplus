<template>
  <v-dialog overlay-opacity="0.5" :value="showModal" max-width="500px" persistent>
    <v-card class="pa-3">
      <v-card-title>
        <span>Producto listo para ser agregado</span>
        <v-spacer></v-spacer>
        <v-btn icon small fab @click="closeModal">
            <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-card-title>
      <v-card-text>
        <v-container>
          <v-row>
            <v-col cols="6">
              <v-img :src="currentItem.attributes[0].icon" height="200px"></v-img>
            </v-col>
            <v-col cols="6">
              <p class="text-body-1 font-weight-bold">{{currentItem.name}}</p>
              <p>Código: {{currentItem.code}}</p>
              <p>Precio: ${{currentItem.price}}</p>
              <p>Cantidad: 
                <v-btn-toggle x-small dense>
                  <v-btn icon @click="decrQty(currentItem.id)" :disabled="currentItem.stock == 0 || currentItem.qty === 1">
                    <v-icon>mdi-minus</v-icon>
                  </v-btn>
                  <v-btn icon>
                    {{currentItem.qty}}
                  </v-btn>
                  <v-btn icon @click="incrQty(currentItem.id)" :disabled="currentItem.stock == 0 || currentItem.qty == currentItem.stock">
                    <v-icon>mdi-plus</v-icon>
                  </v-btn>
                </v-btn-toggle>
              </p>
              <p class="font-weight-bold">Subtotal: $ {{currentItem.price * currentItem.qty}}</p>
            </v-col>
          </v-row>
          <p>{{currentItem.description}}</p>
        </v-container>
      </v-card-text>
      <v-card-actions>
        <v-btn depressed outlined class="mx-auto" @click="closeModal">Seguir comprando</v-btn>
        <v-btn depressed dark class="mx-auto" @click="addProductToCart">Agregar al carro</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  props: {
    showModal: Boolean,
    currentItem: {
      type: Object,
      required: true
    }
  },
  methods: {
    ...mapActions(["getItems","addToCart"]),
    closeModal() {
      this.$emit("close-modal");
    },
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
    addProductToCart(){
      this.addToCart(this.currentItem)
      this.closeModal()
    }
  },
  computed: {
    ...mapState(['items'])
  },
  
}
</script>