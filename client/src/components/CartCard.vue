<template>
  <div class="cart-card">
    <div class="cart-image-wrapper">
      <img :src="image" alt="product-image" class="cart-product-image" />
    </div>
    <div class="cart-info-wrapper flex-col">
      <h2 class="cart-product-name">{{ name }}</h2>
      {{ details }}
    </div>
    <div class="product-right-wrapper">
      <p>${{ price }}</p>
      <button @click="removeFromCart(productId)" value="productId">Remove</button>
    </div>
  </div>
</template>

<script>
import Client from '@/services/api';

export default {
  name: 'CarCard',
  props: ["name", "image", "background", "details", "price", "quantity", "productId"],
  methods: {
    async removeFromCart(product_id) {
      await Client.delete(`/products/cart/6393611b08906d51c5716e85/${product_id}`)
      this.$forceUpdate()
    }
  }
}
</script>
