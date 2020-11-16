<template>
  <v-app>
    <app-bar/>
    <navigation-drawer/>
    <v-main>
      <main-content/>
    </v-main>
  </v-app>
</template>

<script>
import { mapActions } from 'vuex'

import AppBar from './components/AppBar'
import NavigationDrawer from './components/NavigationDrawer'
import MainContent from './components/MainContent'

export default {
  name: 'App',

  components: {
    AppBar,
    NavigationDrawer,
    MainContent
  },

  data: () => ({
    //
  }),
  methods: {
    ...mapActions(['getItems'])
  },
  created(){
    this.getItems()
  }
};
</script>
