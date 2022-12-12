<template>
  <div class="card">
    <div class="image-wrapper">
      <img :src="image" alt="product-image" class="product-image" />
    </div>
    <div class="info-wrapper flex-col">
      <h2 class="product-name">{{ name }}</h2>
    </div>
    <p>${{ price }}</p>
    <button @click="removeFromCart">Remove</button>
  </div>
</template>

<script>

export default {
  name: 'CarCard',
  props: ["name", "image", "background", "details", "price", "quantity", "remove"],
  methods: {
    async removeFromCart() {
      return
    }
  }
}
</script>
