<template>
  <nav class="navbar">
    <!-- <div class="navitems"> -->
    <p class="navitem">Home</p>
    <p class="navitem">Products</p>
    <p class="navitem">Cart</p>
    <!-- </div> -->
  </nav>
</template>

<script>
export default {
  name: 'NavBar',
  props: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.navbar {
  background-color: rgba(128, 128, 128, 0.46);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
}

.navitem {
  display: flex;
  margin: 0 10px;
}
</style>
