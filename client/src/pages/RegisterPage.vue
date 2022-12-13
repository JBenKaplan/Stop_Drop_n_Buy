<template>
  <div class="signin">
    <form @submit="registerUser">
      <h3 class="signin-text">Register</h3>
      <input :value="username" @input="event => username = event.target.value" required class="signin-input"
        placeholder="username" name="username" />
      <input :value="email" @input="event => email = event.target.value" required class="signin-input"
        placeholder="email" name="email" />
      <input :value="password" @input="event => password = event.target.value" required class="signin-input"
        placeholder="password" name="password" type="password" />
      <input :value="confirmPassword" @input="event => confirmPassword = event.target.value" required
        class="signin-input" placeholder="confirmPassword" name="confirmPassword" type="password" />
      <button>
        Register
      </button>
    </form>
    <RouterLink to="/signin">Sign In</RouterLink>
  </div>
</template>

<script>
// import axios from 'axios'
import { RegisterUser } from '../services/Auth'


export default {
  name: 'RegisterPage',
  data: () => ({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  }),
  components: {
  },
  methods: {
    async registerUser(e) {
      e.preventDefault()
      let username = this.username
      let email = this.email
      let password = this.password
      await RegisterUser({ username, email, password })
    },
    handleChange(e) {
      this.target.value = e.target.value
    },
  }
}
</script>

