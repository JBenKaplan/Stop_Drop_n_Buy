<template>
  <nav>
    <div class="nav-banner">
      <h1> Stop Drop n' Buy</h1>
    </div>
    <div class="message">
      <p v-if="user">Welcome, {{ user.username }}</p>
    </div>
    <div class="nav-choices">
      <router-link to="/" class="navitem"><img src="../assets/home-page--v1.png" alt="home" /></router-link>
      <router-link to="/products" class="navitem">Products</router-link>
      <div v-if="user">
        <div class="userInfo">
          <div @click="handleLogOut" class="logout">
            <div class="navitem">Logout</div>
          </div>
          <router-link to="/account" class="userIcon">
            Account
          </router-link>
        </div>
      </div>
      <div v-else>
        <router-link to="/signin" class="navitem">Signin</router-link>
      </div>
      <router-link to="/cart" class="navitem">
        <img src="../assets/shopping-cart--v1.png" alt="cart" />
      </router-link>
    </div>
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
