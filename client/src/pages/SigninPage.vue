<template>
  <div class="signin">
    <form @submit="signInUser" class="formInfo">
      <h3 class="signin-text">Sign In</h3>
      <input :value="email" @input="event => email = event.target.value" required class="signin-input"
        placeholder="email" name="email" />
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
import { SignInUser } from '@/services/Auth'
// import axios from 'axios'

export default {
  name: 'SigninPage',
  data: () => ({
    email: '',
    password: '',
  }),
  components: {

  },
  mounted() {
  },
  methods: {
    async signInUser(e) {
      e.preventDefault()
      let email = this.email
      let password = this.password
      await SignInUser({ email, password })
    },
  }
}
</script>

