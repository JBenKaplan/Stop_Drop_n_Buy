<template>
  <div class="game-content">
    <section class="image-container">
      <div>
        <img :src="platform?.image_background" alt="game-image" />
      </div>
    </section>
    <section class="details">
      <div>
        <h3>{{ platform?.name }}
        </h3>
        <h4>
          # Games on Platform: {{ platform?.games_count }}
        </h4>
      </div>
      <div class="flex-row space">
        {{ platform?.description }}
      </div>
      <button @click="this.$router.go(-1)" class="back-btn">Back</button>
    </section>
  </div>
</template>

<script>
import axios from 'axios'
const API_KEY = process.env.VUE_APP_RAWG_KEY

export default {
  name: 'PlatformDetails',
  data: () => ({
    platform: []
  }),
  mounted() {
    this.getPlatforms()
  },
  components: {

  },
  methods: {
    async getPlatforms() {
      let platformId = (this.$route.params.platform_id)
      let res = await axios.get(`https://api.rawg.io/api/platforms/${platformId}?key=${API_KEY}`)
      this.platform = res.data
    },
  }
}
</script>
