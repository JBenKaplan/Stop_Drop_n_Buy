<template>
  <div class="container">
    <div class="form-container">
      <form @submit="SignInInfo" class="formInfo">
        <h3 class="form-input">Sign In</h3>
        <input :value="email" @input="event => email = event.target.value" required class="form-input"
          placeholder="email" name="email" />
        <input :value="password" @input="event => password = event.target.value" required class="form-input"
          placeholder="password" name="password" type="password" />
        <button :disabled="email || password">
          Sign In
        </button>
      </form>
      <RouterLink to="/register">Register</RouterLink>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SigninPage',
  emits: ['SetUser', 'email', 'password'],
  methods: {
    SignInInfo() {
      this.$emit('SetUser', this.email, this.password)
      this.$router.push('/')

      // let email = this.email
      // let password = this.password
      // const userInfo = await SignInUser({ email, password })
      // this.user = userInfo
    },
  }
}
</script>

