<template>
  <div>
    <v-breadcrumbs :items="items">
      <template v-slot:divider>
        <v-icon>mdi-chevron-right</v-icon>
      </template>
    </v-breadcrumbs>
  </div>
</template>

<script>
  export default {
    data: () => ({
      items: [
        {
          text: 'Home',
          disabled: false,
          href: '/',
        },
        {
          text: 'Products',
          disabled: false,
          href: '/',
        },
        {
          text: 'Xyz',
          disabled: false,
          href: '/',
        },
        {
          text: 'Features',
          disabled: true,
          href: '/',
        },
      ],
    }),
  }
</script>