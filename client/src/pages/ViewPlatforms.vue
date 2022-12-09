<template>
  <div>
    <div class="genres platforms">
      <h2>Platforms</h2>
      <section class="container-grid">
        <div :key="platform.id" v-for="platform in platforms">
          <PlatformCard @click="selectPlatform(platform.id)" :name="platform.name" :image="platform.image_background"
            :gamesCount="platforms.games_count" :games="platform.games" />
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import PlatformCard from '../components/PlatformCard.vue'
const API_KEY = process.env.VUE_APP_RAWG_KEY

export default {
  name: 'ViewPlatforms',
  data: () => ({
    platforms: []
  }),
  mounted() {
    this.getPlatforms()
  },
  components: {
    PlatformCard
  },
  methods: {
    async getPlatforms() {
      let res = await axios.get(`https://api.rawg.io/api/platforms?key=${API_KEY}`)
      this.platforms = res.data.results
    },
    selectPlatform(platformId) {
      this.$router.push(`/platformDetails/${platformId}`)
    },
  }
}
</script>
