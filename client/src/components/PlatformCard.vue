<template>
  <div class="card game-card">
    <div class="image-wrapper">
      <img :src=image alt="platform-image" />
    </div>
    <div class="info-wrapper flex-col">
      <h2>{{ name }}</h2>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PlatformCard',
  props: ['name', 'image', 'gamesCount', 'games']
}
</script>

<style scoped>

</style>
