<template>
  <div>
    <p>test</p>
    <form @submit="UpdateUser" class="formInfo">
      <h3 class="update-text">Update Info</h3>
      <input :value="username" @input="event => username = event.target.value" required class="update-input"
        placeholder="username" name="username" />
      <input :value="email" @input="event => email = event.target.value" required class="update-input"
        placeholder="email" name="email" />
      <input :value="password" @input="event => password = event.target.value" required class="update-input"
        placeholder="password" name="password" type="password" />
      <input :value="confirmPassword" @input="event => confirmPassword = event.target.value" required
        class="update-input" placeholder="confirmPassword" name="confirmPassword" type="password" />
      <button>
        Sign In
      </button>
    </form>
  </div>

</template>

<script>
import { CheckSession } from '@/services/Auth'

export default {
  name: 'AccountInfo',
  data: () => ({
    user: null
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

    }
  }
}
</script>