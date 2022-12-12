<template>
  <div class="cart">
    <div :key="product.id" v-for="product in cart" class="cartPage">
      <div class="productList" @click="selectProduct(product._id)">
        <ProductCard :name="product.name" :image="product.icon" :background="product.splash"
          :details="product.description" :price="product.price" :quantity="product.quantity" />
        <p class="productItem">
          {{ product.name }}
        </p>
        <p class="productItem">
          ${{ product.price }}
        </p>
        <p class="productItem">
          {{ product.quantity }} in stock
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios"
// import Client from '@/services/api'
import ProductCard from '@/components/ProductCard.vue'

export default {
  name: 'CartPage',
  data: () => ({
    cart: []
  }),
  components: {
    ProductCard
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

