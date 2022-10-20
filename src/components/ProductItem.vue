<template>
  <div class="product-item">
      <img src="../assets/images/shoes.jpg" width="300" height="300" />
      <h3>{{ product.price }} EGP</h3>
      <router-link :to="{ name: 'ProductDetails', params: { id: product.id } }">
        <h2>{{ product.name }}</h2>
      </router-link>
      <p>{{ product.description }}</p>
  </div>
</template>

<script>
import ProductDetailsView from "@/views/ProductDetailsView.vue";
export default {
  props: ["product"],
  components: { ProductDetailsView },
};
</script>

<style>
.product-item {
  background: linear-gradient(100deg, rgb(109, 75, 161), rgb(186, 186, 218));
  border-radius: 5% 50% 5% 5%;
  margin-bottom: 30px;
  box-shadow: rgba(150, 150, 150, 0.35) 0px 5px 35px;
}
.product-item img {
  display: block;
  border-radius: 5% 50% 0% 0%;
  margin: 0px;
}
.product-item h3 {
  /* background-image: linear-gradient(to right, #aaa, #ccf); */
  background: linear-gradient(to right, rgb(68, 48, 99), rgb(144, 144, 200));
  color: #fff;
  box-sizing: border-box;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
  padding: 10px;
  margin: 0px;
  font-size: 1.3em;
}
.product-item h2 {
  font-size: 2em;
  text-shadow: rgb(50, 50, 50) 0px 1px 3px;
  text-transform: uppercase;
  height: 100%;
}
.product-item p {
  color: #eee;
  padding-bottom: 20px;
  font-style: italic;
  font-size: 1.1em;
}
.product-item a {
  text-decoration: none;
  color: rgb(49, 36, 71);
}
.product-item a:hover {
  color: white;
}

</style>