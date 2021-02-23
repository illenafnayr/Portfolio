<template>
  <div class="home">
    <NavBar />
    <Window />
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from '@/components/NavBar.vue'
import Window from '@/components/Window.vue'
// import VueResizable from 'vue-resizable'

export default {
  name: 'Home',
  components: {
    Window,
    NavBar
  }
}
</script>

<style>
  
</style>
