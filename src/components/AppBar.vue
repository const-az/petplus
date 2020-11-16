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

      <cart-menu></cart-menu>
    </v-app-bar>
  </div>
</template>

<script>
import CartMenu from './CartMenu'

export default {
  components: {
    CartMenu
  }
};
</script>