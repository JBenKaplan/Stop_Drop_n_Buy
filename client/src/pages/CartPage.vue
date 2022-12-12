<template>
  <div class="cart">
    <div :key="product.id" v-for="product in cart" class="cartPage">
      <div class="productList" @click="selectProduct(product._id)">
        <CartCard :name="product.name" :image="product.icon" :background="product.splash" :details="product.description"
          :price="product.price" :quantity="product.quantity" :productId="product._id" />
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios"
// import Client from '@/services/api'
import CartCard from '@/components/CartCard.vue'

export default {
  name: 'CartPage',
  data: () => ({
    cart: []
  }),
  components: {
    CartCard
  },
  mounted() {
    this.getCart()
  },
  methods: {
    async getCart() {
      let res = await axios.get(`http://localhost:3001/carts/6393611b08906d51c5716e85`)
      console.log(res.data.cart.products)
      this.cart = res.data.cart.products
    }
  }
}
</script>

