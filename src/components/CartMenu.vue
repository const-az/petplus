<template>
  <div>
    <v-menu :close-on-content-click="false">
        <template v-slot:activator="{ on, attrs }">
          <v-badge :content="cart.items.length" :value="cart.items.length" color="primary" overlap>
            <v-btn fab depressed class="ml-5" color="transparent" v-bind="attrs" v-on="on">
              <v-icon large color="primary">mdi-shopping</v-icon>
            </v-btn>
          </v-badge>
        </template>
        <v-list v-if="cart.items.length!=0">
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title class="text-subtitle-1 font-weight-bold">Resumen de la compra: </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item v-for="(i, index) in cart.items" :key="index" class="py-0" two-line>
            <v-list-item-content>
              <v-list-item-title class="text-body-2 font-weight-medium">- {{i.name}}</v-list-item-title>
              <v-row class="text-right align-center">
                <v-col cols="4">
                  <span class="text-subtitle-2">Precio: ${{i.price}}</span>
                </v-col>
                <v-col cols="4">
                <v-btn-toggle x-small dense>
                  <v-btn icon @click="decrQty(i.id)" :disabled="i.stock == 0 || i.qty === 1">
                    <v-icon>mdi-minus</v-icon>
                  </v-btn>
                  <v-btn icon>
                    {{i.qty}}
                  </v-btn>
                  <v-btn icon @click="incrQty(i.id)" :disabled="i.stock == 0 || i.qty == i.stock">
                    <v-icon>mdi-plus</v-icon>
                  </v-btn>
                </v-btn-toggle>
                </v-col>
                <v-col cols="4">
                  <span class="text-subtitle-2 font-weight-bold">Subtotal: $ {{i.price * i.qty}}</span>
                </v-col>
              </v-row>
            </v-list-item-content>
          </v-list-item>
          <v-list-item class="text-right">
            <v-list-item-title class="text-body-1 primary--text">Subtotal: <span class="font-weight-bold">$ {{cart.total}}</span></v-list-item-title>
          </v-list-item>
        </v-list>
        <v-list v-else>
          <v-list-item>No hay productos</v-list-item>
        </v-list>
      </v-menu>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState(["cart", "items"]),
  },
  methods: {
    incrQty(id) {
      let idx = this.cart.items.map((p) => p.id).indexOf(id);
      if (this.cart.items[idx].qty < this.items[idx].stock) {
        this.cart.items[idx].qty++;
        this.cart.total += this.cart.items[idx].price;
      }
    },
    decrQty(id) {
      let idx = this.cart.items.map((p) => p.id).indexOf(id);
      if (this.cart.items[idx].qty > 1) {
        this.cart.items[idx].qty--;
        this.cart.total -= this.cart.items[idx].price;
      }
    },
  },
};
</script>