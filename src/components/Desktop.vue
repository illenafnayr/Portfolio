<template>
  <div id="desktop">
    <ReadMe v-on:click="showAboutMe()"/>
    <AboutMe v-bind:style='{"display": (isActive? "block" : "none")}'/>
  </div>
</template>

<script>
// @ is an alias to /src
import AboutMe from '@/components/AboutMe.vue'
import ReadMe from '@/components/ReadMe.vue'
// import VueResizable from 'vue-resizable'

export default {
  name: 'Desktop',
  components: {
    ReadMe,
    AboutMe
  },
  data() {
    return {
      isActive: false
    }
  },
  methods: {
    showAboutMe() {
      if (document.querySelector('#draggable-container').style.display === "none") {
        document.querySelector('#draggable-container').style.display = "block"
      }
    }
  }
}
</script>

<style>
#desktop {
  height: calc(100vh - 54px);
  width: 100vw;
  border: 1px solid gold;
}
  
</style>
