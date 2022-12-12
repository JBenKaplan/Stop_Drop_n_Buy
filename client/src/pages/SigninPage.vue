<template>
  <div class="signin">
    <form @submit="signinUser">
      <h3 class="signin-text">Sign In</h3>
      <input :value="username" @input="event => username = event.target.value" required class="signin-input"
        placeholder="username" name="username" />
      <input :value="password" @input="event => password = event.target.value" required class="signin-input"
        placeholder="password" name="password" type="password" />
      <button>
        Sign In
      </button>
    </form>
    <RouterLink to="/register">Register</RouterLink>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'CartPage',
  data: () => ({
    username: '',
    password: '',
  }),
  components: {

  },
  mounted() {
  },
  methods: {
    async getCart() {
      let res = await axios.get(`http://localhost:3001/carts/6393611b08906d51c5716e85`)
      console.log(res.data.cart.products)
      this.cart = res.data.cart.products
    },
    handleChange(e) {
      this.target.value = e.target.value
    },
  }
}
</script>

