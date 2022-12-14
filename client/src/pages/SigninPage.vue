<template>
  <div class="container">
    <div class="form-container">
      <!-- <form @submit="handleSubmit" class="formInfo">
        <h3 class="form-input">Sign In</h3>
        <input :value="email" @input="handleChange" required class="form-input" placeholder="email" name="email" />
        <input :value="password" @input="handleChange" required class="form-input" placeholder="password"
          name="password" type="password" />
        <button>
          Sign In
        </button>
      </form> -->
      <form v-on:submit="handleSubmit" class="formInfo">
        <h3 class="form-input">Sign In</h3>
        <input @input="handleChange" placeholder="Email" :value="email" name="email" type="email" class="form-input" />
        <input @input="handleChange" placeholder="Password" :value="password" name="password" type="password"
          class="form-input" />
        <button :disabled="!email || !password">Log In</button>
      </form>
      <RouterLink to="/register">Register</RouterLink>
    </div>
  </div>

</template>

<script>
export default {
  name: 'SigninPage',
  props: {
    email: String,
    password: String
  },
  methods: {
    handleChange(e) {
      this.$emit('handleFormChange', e.target.name, e.target.value)
    },
    handleSubmit(e) {
      e.preventDefault()
      this.$emit('handleSubmit')
    }

    // props: { email: String, password: String },
    // emits: ['SetUser', 'email', 'password'],
    // methods: {
    //   SignInInfo() {
    //     this.$emit('SetUser', this.email, this.password)
    //     this.$router.push('/')

    //     // let email = this.email
    //     // let password = this.password
    //     // const userInfo = await SignInUser({ email, password })
    //     // this.user = userInfo
    //   },
  }
}
</script>

