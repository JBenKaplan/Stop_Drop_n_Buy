<template>
  <div id="app">
    <header>
      <NavBar :user="this.user" :handleLogOut="handleLogOut" />
    </header>
    {{ user }}
    <main>
      <RouterView :email="email" :password="password" @SetUser="SetUser" />
    </main>
  </div>
</template>

<script>
// import Client from './services/api'
import NavBar from './components/NavBar.vue'
import { CheckSession, SignInUser } from './services/Auth'

export default {
  name: 'App',
  data: () => ({
    user: null,
    email: '',
    password: ''
  }),
  components: {
    NavBar,
  },
  mounted() {
    this.CheckToken()
    // this.SetUser(this.email, this.password)
  },
  methods: {
    async CheckToken() {
      let token = await CheckSession()
      return token
    },
    async SetUser(email, password) {
      this.email = email
      this.password = password
      const user = await SignInUser({ email, password })
      // const userInfo = await Client.get(`/users/${user._id}`)
      // console.log(userInfo)
      this.user = user
    },
    async handleLogOut() {
      this.user = null
      localStorage.clear()
      this.$router.push('/signin')
    },
  },
}
</script>

