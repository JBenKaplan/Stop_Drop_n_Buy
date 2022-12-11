<template>
  <nav>
    <router-link to="/" class="navitem"><img src="../assets/home-page--v1.png" alt="home"
        class="navitem" /></router-link>
    <router-link to="/products" class="navitem">Products</router-link>
    <div>
      <img src="../assets/shopping-cart--v1.png" alt="cart" class="navitem" />
      <!-- <img src="../assets/search-more.png" alt="search" class="navitem" /> -->
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavBar'
}
</script>

<style scoped>
nav {
  display: flex;
  justify-content: center;
}

.navitem {
  display: flex;
  margin: 0 10px;
}

img {
  height: 20px;
  width: 20px;
}
</style>
