<template>
  <div>
    <div :key="product.id" v-for="product in products" class="productsPage">
      <div class="productList" @click="selectProduct(product._id)">
        <ProductCard @click="selectProduct(product._id)" :name="product.name" :image="product.icon"
          :background="product.splash" :details="product.description" :price="product.price"
          :quantity="product.quantity" />
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
import ProductCard from '@/components/ProductCard.vue'

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
    ProductCard
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
