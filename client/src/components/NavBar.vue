<template>
  <nav>
    <router-link to="/" class="navitem"><img src="../assets/home-page--v1.png" alt="home"
        class="navitem" /></router-link>
    <router-link to="/products" class="navitem">Products</router-link>
    <router-link to="/signin" class="navitem">Signin</router-link>
    <router-link to="/cart" class="navitem">
      <img src="../assets/shopping-cart--v1.png" alt="cart" />
    </router-link>
    <!-- <div className="dropdown-panel {{panelDisplay}}" class="cart-dropdown">
      </div> -->
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

