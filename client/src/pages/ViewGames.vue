<template>
  <div>
    <form>
      <select @input="handleChange">
        <option value='' selected disabled>- Sort By Rating -</option>
        <option value="ascending">Ascending</option>
        <option value="descending">Descending</option>
      </select>
    </form>
    <section class="search-results container-grid">
      <div :key="game.id" v-for="game in games">
        <GameCard @click="selectGame(game.id)" :name="game.name" :image="game.background_image" :rating="game.rating" />
      </div>
    </section>
  </div>
</template>

<script>
import axios from 'axios';
import GameCard from '../components/GameCard.vue';
const API_KEY = process.env.VUE_APP_RAWG_KEY

export default {
  name: 'ViewGames',
  data: () => ({
    games: [],
    sort: null
  }),
  components: {
    GameCard
  },
  mounted() {
    this.getGamesByGenre()
  },
  methods: {
    async getGamesByGenre() {
      let genreId = (this.$route.params.genre_id)
      let res = await axios.get(`https://api.rawg.io/api/games?genres=${genreId}&key=${API_KEY}`)
      this.games = res.data.results
    },
    selectGame(gameId) {
      this.$router.push(`/details/${gameId}`)
    },
    handleChange(e) {
      this.sort = e.target.value
      this.sortGames()
    },
    sortGames() {
      if (this.sort === 'ascending') {
        this.games = this.games.sort(function (a, b) { return a.rating - b.rating })
      } else {
        this.games = this.games.sort(function (a, b) { return b.rating - a.rating })
      }
    },
  }
}
</script>
