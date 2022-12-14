<template>
  <!-- <div class="search">
    <form @submit="getSearchResults" class="search-form">
      <input :value="searchQuery" @input="handleChange" class="inputBox" />
      <button>Search</button>
    </form>
    <h2 v-if="searched">Search Results</h2>
    <section class="search-results container-grid">
      <div :key="product.id" v-for="product in searchResults">
      </div>
    </section>
  </div> -->
  <div class="productsPage">
    <div :key="product.id" v-for="product in products" class="product-wrapper">
      <div class="productList" @click="selectProduct(product._id)">
        <div class="products-image-wrapper">
          <ProductCard @click="selectProduct(product._id)" :image="product.icon" :background="product.splash"
            :details="product.description" :price="product.price" :quantity="product.quantity" />
        </div>
        <div class="product-details">
          <h3>{{ product.name }}</h3>
          <p class="productItem">
            ${{ product.price }}
          </p>
        </div>
        <div class="add-to-cart">
          <button>Add to Cart</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Client from '@/services/api'
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
      let res = await Client.get(`/products/all`)
      this.products = res.data.products
    },
    selectProduct(productId) {
      this.$router.push(`/products/${productId}`)
    },
    async addProductToCart() {
      await Client.put(`/products/cart/6393611b08906d51c5716e85/${this.$route.params.product_id}`)
      this.$router.push('/cart')
    },
  }
}
</script>
