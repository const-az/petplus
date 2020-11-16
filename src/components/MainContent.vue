<template>
  <div class="pa-10">
    <h1>Alimentos</h1>
    <bread-crumbs></bread-crumbs>
    <product-cards class="mt-5"></product-cards>
  </div>
</template>

<script>
import BreadCrumbs from './BreadCrumbs'
import ProductCards from './ProductCards'

export default {
  components: {
    BreadCrumbs,
    ProductCards
  }
}
</script>