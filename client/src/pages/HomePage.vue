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
          <GameCard @click="selectGame(game.id)" :name="game.name" :image="game.background_image" />
        </div>
      </section>
    </div>

    <div class="genres" v-if="!searched">
      <h2>Genres</h2>
      <section class="container-grid">
        <div :key="genre.id" v-for="genre in genres">
          <GenreCard @click="selectGenre(genre.id)" :name="genre.name" :image="genre.image_background" />
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import GenreCard from '../components/GenreCard.vue'
import GameCard from '../components/GameCard.vue'
const API_KEY = process.env.VUE_APP_RAWG_KEY

export default {
  name: 'HomePage',
  data: () => ({
    genres: [],
    searchQuery: '',
    searchResults: [],
    searched: false
  }),
  mounted() {
    this.getGenres()
  },
  components: {
    GenreCard,
    GameCard
  },
  methods: {
    async getGenres() {
      let res = await axios.get(`https://api.rawg.io/api/genres?key=${API_KEY}`)
      this.genres = res.data.results
    },
    async getSearchResults(e) {
      e.preventDefault()
      let res = await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}&search=${this.searchQuery}`)
      this.searchResults = res.data.results
      this.searched = true
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
