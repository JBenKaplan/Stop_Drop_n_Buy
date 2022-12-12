<template>
  <nav>
    <router-link to="/" class="navitem"><img src="../assets/home-page--v1.png" alt="home"
        class="navitem" /></router-link>
    <router-link to="/products" class="navitem">Products</router-link>
    <div class="navitem">
      <router-link to="/cart" class="navitem">
        <img src="../assets/shopping-cart--v1.png" alt="cart" class="navitem" @click="handleClick" />
      </router-link>
      <!-- <div className="dropdown-panel {{panelDisplay}}" class="cart-dropdown">
      </div> -->
    </div>
  </nav>
</template>

<script>
// let cart = false
// import { useVuex } from '@vueblock/vue-use-vuex'

export default {
  name: 'NavBar',
  methods: {
  }
}
</script>

