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
import { CheckSession } from './services/Auth'


export default {
  name: 'App',
  data: () => ({
    user: null
  }),
  components: {
    NavBar
  },
  mounted() {
    this.CheckToken()
  },
  methods: {
    async CheckToken() {
      let user = await CheckSession()
      console.log(user)
      this.user = user
    },
    async handleLogOut() {
      //Reset all auth related state and clear localStorage
      this.user = null
      localStorage.clear()
    },
  }
}
</script>

