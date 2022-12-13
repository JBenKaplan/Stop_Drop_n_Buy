<template>
  <div class="card">
    <div class="image-wrapper">
      <img :src="image" alt="product-image" class="product-image" />
    </div>
    <div class="info-wrapper flex-col">
      <h2 class="product-name">{{ name }}</h2>
    </div>
    <p>${{ price }}</p>
    <button @click="removeFromCart(productId)" value="productId">Remove</button>
  </div>
</template>

<script>
import Client from '@/services/api';

export default {
  name: 'CarCard',
  props: ["name", "image", "background", "details", "price", "quantity", "productId"],
  methods: {
    async removeFromCart(product_id) {
      // let cart_id = this.$route.params.cart_id
      // console.log(cart_id, product_id);
      await Client.delete(`/products/cart/6393611b08906d51c5716e85/${product_id}`)
      this.$forceUpdate()
    }
  }
}
</script>
