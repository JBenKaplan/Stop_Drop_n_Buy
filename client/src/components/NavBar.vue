<template>
  <nav>
    <router-link to="/" class="navitem"><img src="../assets/home-page--v1.png" alt="home"
        class="navitem" /></router-link>
    <router-link to="/products" class="navitem">Products</router-link>
    <div v-if="user">
      <div @click="handleLogOut">
        <p>Logout</p>
      </div>
    </div>
    <div v-else>
      <router-link to="/signin" class="navitem">Signin</router-link>
    </div>
    <router-link to="/cart" class="navitem">
      <img src="../assets/shopping-cart--v1.png" alt="cart" />
    </router-link>
  </nav>
</template>

<script>


export default {
  name: 'NavBar',
  props: ['user', 'handleLogOut'],
  methods: {
  }
}
</script>

