<template>
  <div class="productInfo">
    <div>
      <img :src=product.splash alt="backsplash" class="backsplash" />
    </div>
    <p class="productItem">
      {{ product.name }}
    </p>
    <p class="productItem">
      ${{ product.price }}
    </p>
    <p class="productItem">
      {{ product.quantity }} in stock
    </p>
    <button class="add-to-cart">+<img src="../assets/shopping-cart--v1.png" alt="cart" class="navitem"
        @click="addProductToCart" /></button>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'ProductInfo',
  data: () => ({
    product: {},
  }),
  mounted() {
  },
  components: {
  },
  methods: {
    async addProductToCart() {
      let res = await axios.put(`http://localhost:3001/products/cart/6393611b08906d51c5716e85/${this.$route.params.product_id}`)
      console.log(res.data.product)
      this.product = res.data.product
      this.$router.push('/cart')
    },
  }
}
</script>

<style>
.productsPage {
  display: flex;
}

.productsList {
  width: 30vw;
  height: 30vw;
  border: black 2px solid;
}
</style>