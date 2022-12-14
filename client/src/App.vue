<template>
  <div id="app">
    <header>
      <NavBar :user="this.user" :handleLogOut="handleLogOut" />
    </header>
    User info: {{ user }}
    <main>
      <!-- <SigninPage :email="email" :password="password" @handleFormChange="handleFormChange"
        @handleSubmit="handleSubmit" /> -->
      <RouterView :email="email" :password="password" @handleFormChange="handleFormChange"
        @handleSubmit="handleSubmit" />
      <!-- <form @submit="handleSubmit">
          <input placeholder="Email" :value="email" name="email" type="email" v-on:input="handleFormChange" />
          <input placeholder="Password" :value="password" name="password" type="password" @input="handleFormChange" />
          <button>Log In</button>
        </form> -->
    </main>
  </div>
</template>

<script>
// import Client from './services/api'
import NavBar from './components/NavBar.vue'
// import SigninPage from './pages/SigninPage.vue'
import { CheckSession, SignInUser } from './services/Auth'

export default {
  name: 'App',
  components: {
    NavBar,
    // SigninPage
  },
  data: () => ({
    user: '',
    email: '',
    password: ''
  }),
  mounted() {
    this.CheckToken()
  },
  methods: {
    async CheckToken() {
      let payload = await CheckSession()
      this.user = payload
      console.log(payload);
    },
    handleFormChange(name, value) {
      this[name] = value
    },
    async handleSubmit() {
      const payload = await SignInUser({ email: this.email, password: this.password })
      this.user = payload
      this.$route.push('/products')
      this.email = ''
      this.password = ''
    },
    handleLogOut() {
      this.user = null
      localStorage.clear()
      this.$router.push('/signin')
    },
  },
}
</script>

