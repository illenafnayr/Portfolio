<template>
  <div class="home">
    <DraggableDiv />
    <NavBar />
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from '@/components/NavBar.vue'
import DraggableDiv from '@/components/DraggableDiv.vue'
// import VueResizable from 'vue-resizable'

export default {
  name: 'Home',
  components: {
    DraggableDiv,
    NavBar
  }
}
</script>

<style>
  
</style>
