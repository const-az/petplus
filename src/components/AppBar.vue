<template>
  <div>
    <v-app-bar
      color="white"
      light
      flat
      class="py-2"
    >

      <v-spacer></v-spacer>

      <div width="300px">
        <v-text-field outlined dense class="pt-5" prepend-inner-icon="mdi-magnify"></v-text-field>
        <!-- :value="search" @input="updateSearch" @click:append="clearSearch" :append-icon="search!='' ? 'mdi-close' : ''" -->
      </div>

      <v-menu>
        <template v-slot:activator="{ on, attrs }">
          <v-badge :content="cart.items.length" :value="cart.items.length" color="deep-purple accent-4" overlap>
            <v-btn fab depressed class="ml-5" color="transparent" v-bind="attrs" v-on="on">
              <v-icon large color="deep-purple accent-4">mdi-shopping</v-icon>
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
                  <span class="text-subtitle-2 font-weight-bold">Subtotal: {{i.price * i.qty}}</span>
                </v-col>
              </v-row>
            </v-list-item-content>
          </v-list-item>
          <v-list-item class="text-right">
            <v-list-item-title class="text-body-2 deep-purple--text text--accent-4">Subtotal: <span class="font-weight-bold">${{cart.total}}</span></v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-btn small outlined rounded color="deep-purple accent-4" @click="emptyCart">Vaciar</v-btn>
            <v-btn small rounded depressed dark class="ml-2" color="deep-purple accent-4">Pagar</v-btn>
          </v-list-item>
        </v-list>
        <v-list v-else>
          <v-list-item>No hay productos</v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState(["cart"]),
  },
};
</script>