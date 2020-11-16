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

      <v-btn depressed fab color="white" class="ml-5">
        <!-- <v-badge :content="$store.getters.shoppingCart.list.length"
          :value="$store.getters.shoppingCart.list.length > 0 ? $store.getters.shoppingCart.list.length : ''"
          color="cyan lighten-3" overlap> -->
          <v-icon large class="mr-3" color="grey darken-2">mdi-shopping</v-icon>
        <!-- </v-badge> -->
      </v-btn>
    </v-app-bar>
  </div>
</template>