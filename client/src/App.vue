<template>
  <div id="app">
    <header>
      <NavBar :user="this.user" :handleLogOut="handleLogOut" />
    </header>
    <main>
      <RouterView :user="this.user" :email="email" :password="password" @handleFormChange="handleFormChange"
        @handleSubmit="handleSubmit" />
    </main>
  </div>
</template>

<script>

import NavBar from './components/NavBar.vue'

import { CheckSession, SignInUser } from './services/Auth'

export default {
  name: 'App',
  components: {
    NavBar,

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
    },
    handleFormChange(name, value) {
      this[name] = value
    },
    async handleSubmit() {
      const payload = await SignInUser({ email: this.email, password: this.password })
      this.user = payload
      this.email = ''
      this.password = ''
      this.$router.push('/products')
    },
    handleLogOut() {
      this.user = null
      localStorage.clear()
      this.$router.push('/signin')
    },
  },
}
</script>

