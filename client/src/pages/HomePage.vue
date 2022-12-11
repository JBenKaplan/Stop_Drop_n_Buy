<template>
  <div>
    <div class="search">
      <form @submit="getSearchResults">
        <input :value="searchQuery" @input="handleChange" />
        <button>Search</button>
      </form>
      <h2 v-if="searched">Search Results</h2>
      <section class="search-results container-grid">
        <div :key="game.id" v-for="game in searchResults">

        </div>
      </section>
    </div>

    <div class="products" v-if="!searched">
      <h2>Genres</h2>
      <section class="container-grid">
        <div :key="product.id" v-for="product in products">

        </div>
      </section>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'HomePage',
  data: () => ({
    products: []
  }),
  mounted() {
    this.getProducts()
  },
  components: {
  },
  methods: {
    async getProducts() {
      let res = await axios.get(`http://localhost:3001/products/all`)
      console.log(res.data)
      this.products = res.data
    },
    handleChange(e) {
      this.searchQuery = e.target.value
    },
    selectGame(gameId) {
      this.$router.push(`/details/${gameId}`)
    },
    selectGenre(genreId) {
      this.$router.push(`/games/${genreId}`)
    }
  }
}
</script>
