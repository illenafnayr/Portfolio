<template>
  <div class="home">
    <Desktop />
    <NavBar />
  </div>
</template>

<script>
// @ is an alias to /src
import Desktop from '@/components/Desktop.vue'
import NavBar from '@/components/NavBar.vue'


export default {
  name: 'Home',
  components: {
    Desktop,
    NavBar
  },
  mounted() {
    console.warn('this message will self destruct in 30s')
    setTimeout(() => {
      console.error('ka-boom!')
    }, 1000 *30)
  },
}
</script>

<style>
  
</style>
