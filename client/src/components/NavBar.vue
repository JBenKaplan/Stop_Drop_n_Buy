<template>
  <nav>
    <router-link to="/" class="navitem"><img src="../assets/home-page--v1.png" alt="home"
        class="navitem" /></router-link>
    <router-link to="/products" class="navitem">Products</router-link>
    <div class="navitem">
      <img src="../assets/shopping-cart--v1.png" alt="cart" class="navitem" @click="handleClick" />
      <div className="dropdown-panel {{panelDisplay}}">
        <p>Test Hi</p>
      </div>
      <!-- <img src="../assets/search-more.png" alt="search" class="navitem" /> -->
    </div>
  </nav>
</template>

<script>
let cart = false
import { useVuex } from '@vueblock/vue-use-vuex'

export default {
  name: 'NavBar',
  methods: {
  }
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
