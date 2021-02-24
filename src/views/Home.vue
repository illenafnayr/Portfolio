<template>
  <div class="home">
    <ReadMe v-on:click="showAboutMe()" />
    <AboutMe v-bind:style='{"display": (isActive? "block" : "none")}'/>
    <NavBar />
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from '@/components/NavBar.vue'
import AboutMe from '@/components/AboutMe.vue'
import ReadMe from '@/components/ReadMe.vue'
// import VueResizable from 'vue-resizable'

export default {
  name: 'Home',
  components: {
    ReadMe,
    AboutMe,
    NavBar
  },
  data() {
    return {
      isActive: false
    }
  },
  methods: {
    showAboutMe() {
      this.isActive = !this.isActive
    }
  }
}
</script>

<style>
  
</style>
