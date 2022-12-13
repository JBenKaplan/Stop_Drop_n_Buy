<template>
  <div class="form-container">
    <form @submit="UpdateUser" class="formInfo">
      <h3 class="update-text">Update Info</h3>
      <input :value="username" @input="event => username = event.target.value" required class="form-input"
        placeholder="username" name="username" />
      <input :value="email" @input="event => email = event.target.value" required class="form-input" placeholder="email"
        name="email" />
      <input :value="password" @input="event => password = event.target.value" required class="form-input"
        placeholder="password" name="password" type="password" />
      <input :value="confirmPassword" @input="event => confirmPassword = event.target.value" required class="form-input"
        placeholder="confirmPassword" name="confirmPassword" type="password" />
      <button>
        Update
      </button>
    </form>
  </div>

</template>

<script>
import { CheckSession } from '@/services/Auth'

export default {
  name: 'AccountInfo',
  data: () => ({
    user: null,
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  }),
  mounted() {
    this.CheckToken()
  },
  methods: {
    async CheckToken() {
      let user = await CheckSession()
      this.user = user
    },
    async UpdateUser() {
      // UPDATE USER INFO
    }
  }
}
</script>