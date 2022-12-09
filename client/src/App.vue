<template>
  <div id="app">
    <header>
      <NavBar />
    </header>
    <main>
      <RouterView />
    </main>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'

export default {
  name: 'App',
  components: {
    NavBar
  }
}
</script>

