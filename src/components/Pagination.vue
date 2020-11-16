<template>
  <div class="text-center mt-10 mx-auto">
    <v-pagination
      v-model="page"
      :length="4"
      prev-icon="mdi-menu-left"
      next-icon="mdi-menu-right"
    ></v-pagination>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        page: 4,
      }
    },
  }
</script>