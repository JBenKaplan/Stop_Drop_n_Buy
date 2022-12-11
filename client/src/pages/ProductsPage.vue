<template>
  <div>
    <div :key="product.id" v-for="product in products" class="productsPage">
      <div class="productList" @click="selectProduct(product._id)">
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
import axios from 'axios'

export default {
  name: 'ProductsPage',
  data: () => ({
    products: [],
    searchQuery: '',
    searchResults: [],
    searched: false
  }),
  mounted() {
    this.getProducts()
  },
  components: {
  },
  methods: {
    async getProducts() {
      let res = await axios.get(`http://localhost:3001/products/all`)
      this.products = res.data.products
    },
    selectProduct(productId) {
      this.$router.push(`/products/${productId}`)
    }
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