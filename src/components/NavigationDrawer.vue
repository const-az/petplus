<template>
  <v-card
    flat
    absolute
  >
    <v-navigation-drawer permanent app>
      <v-list-item class="my-3">
        <v-list-item-content>
          <v-list-item-title class="title font-weight-black primary--text">
            PETPLUS <v-icon class="mb-1" color="primary">mdi-plus-circle</v-icon>
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      
      <v-divider></v-divider>

      <v-list-item class="mt-3">
        <v-list-item-content>
          <v-list-item-subtitle class="title">
            Categorías
          </v-list-item-subtitle>
        </v-list-item-content>
      
      </v-list-item>
      <v-list
        dense
        nav
      >
        <v-list-item
          v-for="cat in categories"
          :key="cat.id"
          link
        >
          <v-list-item-content>
            <v-list-item-title>{{ cat.name }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-card>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  methods: {
    ...mapActions(["getCategories", "getItems", "NoFood"]),
  },
  computed: mapState(["categories"]),
  created() {
    this.getCategories();
  },
};
</script>