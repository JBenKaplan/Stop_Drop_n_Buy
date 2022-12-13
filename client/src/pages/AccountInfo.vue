<template>
  <div class="container">
    <div class="form-container">
      <form @submit="UpdateUser" class="formInfo">
        <h3 class="update-text">Update Info</h3>
        <input :value="username" @input="event => username = event.target.value" required class="form-input"
          placeholder="username" name="username" />
        <input :value="email" @input="event => email = event.target.value" required class="form-input"
          placeholder="email" name="email" />
        <input :value="password" @input="event => password = event.target.value" required class="form-input"
          placeholder="password" name="password" type="password" />
        <input :value="newPassword" @input="event => newPassword = event.target.value" required class="form-input"
          placeholder="newPassword" name="newPassword" type="password" />
        <button>
          Update
        </button>
      </form>
      <button @click="DeleteUser">Delete</button>
    </div>
  </div>
</template>

<script>
import { CheckSession } from '@/services/Auth'
import { UpdateAccount, DeleteAccount } from '@/services/Account'

export default {
  name: 'AccountInfo',
  data: () => ({
    user: null,
    username: '',
    email: '',
    password: '',
    newPassword: ''
  }),
  mounted() {
    this.CheckToken()
  },
  methods: {
    async DeleteUser() {
      await DeleteAccount()
      this.$route.push('/signin')
    },
    async CheckToken() {
      let user = await CheckSession()
      this.user = user
    },
    async UpdateUser(e) {
      e.preventDefault()
      let username = this.username
      let email = this.email
      let password = this.password
      let newPassword = this.newPassword
      await UpdateAccount({ username, email, password, newPassword })
      this.user = null
      localStorage.clear()
      this.$router.push('/signin')
    }
  }
}
</script>