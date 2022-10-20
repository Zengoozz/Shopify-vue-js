<template>
  <div class="home">
    <h1>Shopify</h1>
    <ProductList :products="products"></ProductList>
  </div>
</template>

<script>
import ProductList from "@/components/ProductList.vue";
import getProducts from "@/composables/getProducts";
export default {
  name: "HomeView",
  components: {
    ProductList,
  },
  setup() {
    const { products, error, load } = getProducts();
    load();

    return { products, error };
  },
};
</script>

<style>
.home h1{
  display: inline;
  text-transform: uppercase;
  letter-spacing: 5px;
  font-size: 2.5em;
  text-align: center;
}
</style>
