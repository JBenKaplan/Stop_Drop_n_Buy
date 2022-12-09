<template>
  <div class="card game-card">
    <div class="image-wrapper">
      <img :src="image" alt="game-image" />
    </div>
    <div class="info-wrapper flex-col">
      <h2>{{ name }}</h2>
      <h3 v-if="rating">Rating: {{ rating }}</h3>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GameCard',
  props: ['name', 'image', 'rating']
}
</script>
