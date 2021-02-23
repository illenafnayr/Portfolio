<template>
<div id="navbar">
    <StartMenu v-bind:style='{"display": (isActive? "block" : "none")}' />
    <div id="btnContainer">
        <div id="startbtn" v-on:click="showMenu()" v-bind:style='{"border-color": (isActive? "#808080 #FFFFFF #FFFFFF #808080" : "#FFFFFF #808080 #808080 #FFFFFF")}' >
            <img src="../assets/windows.png" alt="windows" id="windowslogo" >
            <span>START</span>
        </div>
    </div>

    <div id="clockContainer">
        <div id="clock">
            <span>{{ timestamp }}</span>
        </div>
    </div>
</div>

</template>

<script>
import StartMenu from '@/components/StartMenu.vue'

export default {
  name: 'NavBar',
  components: {
      StartMenu
  },
  data() {
      return {
          timestamp: '',
          isActive: false
    }
  },
  mounted() {
      this.getTime()
  },
  created() {
      setInterval(this.getTime, (1000*60))
  },
  methods: {
      getTime() {
          const today = new Date();
        //   const date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
          this.timestamp = today.getHours() + ":" + today.getMinutes();
        //   const time = time;
        //   this.timestamp = time;
      },
      showMenu() {
        //   document.getElementById('startMenu').style.display = 'block'
        this.isActive = !this.isActive
      },
      bodyClick() {
          document.getElementById('app').addEventListener('click', () => {
              this.isActive = false
              console.log('asdf')
          })
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=VT323&display=swap');
/* font-family: 'VT323', monospace; */