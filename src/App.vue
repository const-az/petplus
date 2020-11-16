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
};
</script>
