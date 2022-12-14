<template>
  <div class="productInfo">
    <div>
      <img :src="product.splash" alt="backsplash" class="backsplash" />
    </div>
    <div class="product-data">
      <h2 class="productItem">
        {{ product.name }}
      </h2>
      <h3 class="productItem">
        ${{ product.price }}
      </h3>
      <h3 class="productItem">
        {{ product.quantity }} in stock
      </h3>
      <button class="productItem">+<img src="../assets/shopping-cart--v1.png" alt="cart" class="navitem"
          @click="addProductToCart" /></button>
    </div>
  </div>
</template>

<script>
import Client from '@/services/api'

export default {
  name: 'ProductInfo',
  data: () => ({
    product: {},
  }),
  mounted() {
    this.getProduct()
  },
  components: {
  },
  methods: {
    async getProduct() {
      let res = await Client.get(`/products/${this.$route.params.product_id}`)
      this.product = res.data.product
    },
    async addProductToCart() {
      await Client.put(`/products/cart/6393611b08906d51c5716e85/${this.$route.params.product_id}`)
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