<template>
  <div id="app">
    <header>
      <NavBar :user="this.user" :handleLogOut="handleLogOut" />
    </header>
    <main>
      <RouterView />
    </main>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'
import { CheckSession, SignInUser } from './services/Auth'

export default {
  name: 'App',
  data: () => ({
    user: null,
    token: null,
  }),
  components: {
    NavBar
  },
  mounted() {
    this.CheckToken()
  },
  methods: {
    async CheckToken() {
      let token = await CheckSession()
      this.token = token
      if (!token) {
        this.user = await SignInUser()
      }
    },
    async handleLogOut() {
      this.user = null
      localStorage.clear()
      this.$router.push('/signin')
    },
  }
}
</script>

