<template>
  <div class="game-content">
    <section class="image-container">
      <div>
        <img :src="gameDetails?.background_image" alt="game-image" />
      </div>
    </section>
    <section class="details">
      <div>
        <h3>{{ gameDetails?.name }}</h3>
      </div>
      <div class="flex-row space">
        {{ gameDetails?.description_raw }}
      </div>
      <h3 v-if="redditPosts">Recent Reddit Posts</h3>
      <div v-if="redditPosts" class="container-grid">
        <div :key="post.id" v-for="post in redditPosts" class="card posts">
          <a :href=post.url>
            {{ post.name }}
          </a>
        </div>
      </div>
      <button @click="this.$router.push('/')" class="back-btn">Back</button>
    </section>
  </div>
</template>

<script>
import axios from 'axios'
let API_KEY = process.env.VUE_APP_RAWG_KEY

export default {
  name: 'GameDetails',
  data: () => ({
    gameDetails: null,
    redditPosts: []
  }),
  mounted() {
    this.getGameDetails()
    this.getRedditDetails()
  },
  methods: {
    async getGameDetails() {
      let gameId = (this.$route.params.game_id)
      let res = await axios.get(`https://api.rawg.io/api/games/${gameId}?key=${API_KEY}`)
      this.gameDetails = res.data
      this.getRedditDetails()
    },
    async getRedditDetails() {
      let gameId = (this.$route.params.game_id)
      let res = await axios.get(`https://api.rawg.io/api/games/${gameId}/reddit?key=${API_KEY}`)
      this.redditPosts = res.data.results
    }
  }
}
</script>
