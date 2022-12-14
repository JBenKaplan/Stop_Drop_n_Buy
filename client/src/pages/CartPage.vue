<template>
  <div class="cart">
    <div :key="product.id" v-for="product in cart" class="cartPage">
      <div class="productsList" @click="selectProduct(product._id)">
        <CartCard :name="product.name" :image="product.icon" :background="product.splash" :details="product.description"
          :price="product.price" :quantity="product.quantity" :productId="product._id" :total="this.total" />
      </div>
    </div>
    <div class="check-out-container">
      <button class="check-out-button" @click="Checkout">Checkout</button>
      <h4>Total: ${{ total }}</h4>
    </div>
  </div>
</template>

<script>
import Client from '@/services/api'
import CartCard from '@/components/CartCard.vue'

export default {
  name: 'CartPage',
  data: () => ({
    cart: [],
    total: 0
  }),
  components: {
    CartCard
  },
  mounted() {
    this.getCart()
  },
  methods: {
    async getCart() {
      let res = await Client.get(`/carts/6393611b08906d51c5716e85`)
      this.cart = res.data.cart.products
      res.data.cart.products.forEach((product) => {
        this.total += product.price
      })

    },
    async Checkout() {
      return
    }
  }
}
</script>

