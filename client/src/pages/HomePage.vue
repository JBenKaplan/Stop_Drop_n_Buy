<template>
  <div>
    <div class="products" v-if="!searched">
      <h2>Top Products</h2>
      <section class="container-grid">
        <div :key="product.id" v-for="product in products">
          <div>
            <ProductCard @click="selectProduct(product._id)" :name="product.name" :image="product.icon" />
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import ProductCard from '../components/ProductCard.vue'

export default {
  name: 'HomePage',
  data: () => ({
    products: [],
    searchResults: [],
    searchQuery: '',
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
      console.log(res.data.products)
      this.products = res.data.products
    },
    handleChange(e) {
      this.searchQuery = e.target.value
    },
    selectProduct(product_id) {
      this.$router.push(`/products/${product_id}`)
    },
    selectGenre(genreId) {
      this.$router.push(`/games/${genreId}`)
    }
  }
}
</script>

<style>

</style>
