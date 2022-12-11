<template>
  <div>
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

</template>

<script>
import axios from 'axios'

export default {
  name: 'ProductInfo',
  data: () => ({
    product: {},
  }),
  mounted() {
    this.getProductInfo()
  },
  components: {
  },
  methods: {
    async getProductInfo() {
      let res = await axios.get(`http://localhost:3001/products/${this.$route.params.product_id}`)
      console.log(res.data.product)
      this.product = res.data.product
    },
  }
}
</script>

<style>
.productsPage {
  display: flex;
}

.productsList {
  width: 30vw;
  height: 30vw;
  border: black 2px solid;
}
</style>