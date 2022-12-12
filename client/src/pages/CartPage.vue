<template>
  <div class="cart">
    {{ cart.products }}
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'CartPage',
  data: () => ({
    cart: []
  }),
  mounted() {
    this.getCart()
  },
  methods: {
    async getCart() {
      let res = await axios.get(`http://localhost:3001/carts/6393611b08906d51c5716e85`)
      console.log(res.data.cart)
      this.cart = res.data.cart
    }
  }
}
</script>

