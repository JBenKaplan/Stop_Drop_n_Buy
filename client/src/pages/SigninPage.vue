<template>
  <div class="container">
    <div class="form-container">
      <form @submit="signInUser" class="formInfo">
        <h3 class="form-input">Sign In</h3>
        <input :value="email" @input="event => email = event.target.value" required class="form-input"
          placeholder="email" name="email" />
        <input :value="password" @input="event => password = event.target.value" required class="form-input"
          placeholder="password" name="password" type="password" />
        <button>
          Sign In
        </button>
      </form>
      <RouterLink to="/register">Register</RouterLink>
    </div>
  </div>
</template>

<script>
import { SignInUser } from '@/services/Auth'

export default {
  name: 'SigninPage',
  data: () => ({
    user: {},
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
      const payload = await SignInUser({ email, password })
      this.user = payload
      console.log("user", payload)
      // this.$emit(payload)
      // emit payload to App.vue
      this.$router.push('/')
    },
  }
}
</script>

