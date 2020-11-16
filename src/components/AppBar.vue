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
        <v-text-field outlined dense class="pt-5" prepend-inner-icon="mdi-magnify" :value="search" @input="updateSearch"></v-text-field>
      </div>
      
      <cart-menu></cart-menu>
    </v-app-bar>
  </div>
</template>

<script>
import {mapActions, mapState} from 'vuex'
import CartMenu from './CartMenu'

export default {
  components: {
    CartMenu
  },
  methods: mapActions(['updateSearch']),
  computed: mapState(['search'])
};
</script>