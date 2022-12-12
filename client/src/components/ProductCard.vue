<template>
  <div class="card">
    <div class="image-wrapper">
      <img :src="image" alt="genre-image" />
    </div>
    <div class="info-wrapper flex-col">
      <h2>{{ name }}</h2>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductCard',
  props: ["name", "image", "background", "details", "price", "quantity"]
}
</script>

<style>
img {
  height: 30vh;
}
</style>