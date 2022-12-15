<template>
  <div>
    <div class="homepage-grid">
      <div class="iphone-background">
        <div class="iphone-info">
          <div class="iphone-details">
            <p>iPhone 14</p>
            <p id="underline" @click="this.$router.push('/products/639ab291343691e9c073a2f4')">Learn more</p>
          </div>
        </div>
      </div>
      <div class="two-wide">
        <div class="airpods-background">
          <div class="airpods-info">
            <div class="airpods-details">
              <p>Airpods</p>
              <p id="underline" @click="this.$router.push('/products/639ab291343691e9c073a2f3')">Learn more</p>
            </div>
          </div>
        </div>
        <div class="apple-watch-background">
          <div class="apple-watch-info">
            <div class="apple-watch-details">
              <p>Apple Watch</p>
              <p id="underline" @click="this.$router.push('/products/639ab291343691e9c073a2f5')">Learn more</p>
            </div>
          </div>
        </div>
      </div>
      <!-- <div :key=" product.id" v-for="product in products">
            <div class="homepage-item"> -->
      <!-- <ProductCard @click="selectProduct(product._id)" :name="product.name" :image="product.icon" /> -->
      <!-- </div>
  </div> -->
    </div>
  </div>
</template>

<script>
// import ProductCard from '../components/ProductCard.vue'
import Client from '@/services/api'

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
    // ProductCard
  },
  props: {
    user: Object
  },
  methods: {
    async getProducts() {
      let res = await Client.get(`/products/all`)
      console.log(res.data.products)
      this.products = res.data.products
    },
    handleChange(e) {
      this.searchQuery = e.target.value
    },
    selectProduct(product_id) {
      this.$router.push(`/products/${product_id}`)
    },
  }
}
</script>

