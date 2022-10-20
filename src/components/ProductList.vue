<template>
  <div class="product-list">
    <div v-for="product in products" :key="product.id" class="product">
      <ProductItem :product="product"></ProductItem>
      <div class="quantity">
        <label>Quantity:</label>
        <input type="number" min="1" value="1" />
        <button @click="addToCartHandler(product)">Add to cart</button>
      </div>
    </div>
  </div>
</template>

<script>
import ProductDetailsView from "@/views/ProductDetailsView.vue";
import ProductItem from "./ProductItem.vue";
import { ref } from "@vue/reactivity";
export default {
  props: ["products"],
  components: { ProductDetailsView, ProductItem },
  setup() {
    const cartItems = ref([]);
    function addToCartHandler(p) {
      cartItems.value.push(p);
      console.log(cartItems.value);
    }

    return { addToCartHandler, cartItems };
  },
};
</script>

<style>
.product-list {
  display: grid;
  grid-template-columns: 300px 300px 300px;
  gap: 50px;
  justify-content: space-evenly;
  margin: 80px 80px 100px 80px;
  background: linear-gradient(to right, #1a2a41, #203957);
  box-shadow: rgba(0, 0, 0, 0.5) 5px 5px 100px;
  padding:100px 0;
  border-radius: 15%;
  border: 10px solid #020c1b;
}
.quantity label {
  color:#ddd;
  margin: 0 20px 10px 0;
  width: 30%;
  font-size: 1.2em;
  font-weight: bold;
  text-transform: uppercase;
}
.quantity input {
  width: 20%;
  padding: 8px;
  margin-bottom: 20px;
  font-size: 1em;
  font-weight: 900;
  color:#eee;
  background: linear-gradient(to right, rgb(117, 89, 159), rgb(144, 144, 200));
  border:none;
  border-radius: 40%;
  text-align: center;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}
.quantity button {
  padding: 10px 35px;
  font-size: 1em;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 1px;
  border: none;
  border-radius: 20px;
  color:#eee;
  background: linear-gradient(to right, rgb(67, 48, 94), rgb(144, 144, 200));
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}
.quantity input:focus{
  color:#eee;
  background: linear-gradient(to right, rgb(117, 89, 159), rgb(144, 144, 200));
}
.quantity button:hover {
  color:#eee;
  background: linear-gradient(to left, rgb(67, 48, 94), rgb(144, 144, 200));
  cursor: pointer;
}
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  appearance: none;
  margin: 0;
}
input[type=number] {
  -moz-appearance: textfield;
  appearance: textfield;
}

</style>