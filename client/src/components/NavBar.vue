<template>
  <nav>
    <router-link to="/" class="navitem"><img src="../assets/home-page--v1.png" alt="home"
        class="navitem" /></router-link>
    <router-link to="/products" class="navitem">Products</router-link>
    <router-link to="/signin" class="navitem">Signin</router-link>
    <router-link to="/cart" class="navitem">
      <img src="../assets/shopping-cart--v1.png" alt="cart" />
    </router-link>
  </nav>
</template>

<script>


export default {
  name: 'NavBar',
  methods: {
  }
}
</script>

