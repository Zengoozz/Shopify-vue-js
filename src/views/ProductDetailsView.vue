<template>
  {{product.name}}
</template>

<script>
import getProduct from '@/composables/getProduct';

export default {
    props:['id'],
    setup(props){
      const {product, error, load} = getProduct(props.id);
      load();

      return {product,error}
    }
}
</script>

<style>

</style>