<template>
<div id="navbar">
    <StartMenu />
    <div id="startbtn" v-on:click="showMenu" >
        <img src="../assets/windows.png" alt="windows" id="windowslogo" >
        <span>START</span>
    </div>
    <div id="clock">
        <span>{{ timestamp }}</span>
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
          timestamp: ''
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
          document.getElementById('startMenu').style.display = 'block'
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=VT323&display=swap');


#navbar {
    position: absolute;
    bottom: 0%;
    height: 25px;
    width: 100vw;
    background-color: rgb(192,192,192);
    border-top: 1px solid black;
    border-width:2px;
    border-color: #ffffff
}

#startbtn {
    font-family: 'VT323', monospace;
    height: 80%;
    left: 3px;
    border: .5px solid black;
    box-sizing: border-box;
    margin-top: 2.5px;
    margin-bottom: 2px;
    position: absolute;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1px 2px 1px 2px;
    border-width:1px;
    border-color:#FFFFFF #808080 #808080 #FFFFFF;
    cursor: pointer;
}

#startbtn:active {
    border-color: #808080 #FFFFFF #FFFFFF #808080 ;
}

#clock {
    font-family: 'VT323', monospace;
    height: 80%;
    right: 3px;
    border: .5px solid black;
    box-sizing: border-box;
    margin-top: 2px;
    margin-bottom: 2px;
    position: absolute;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1px 2px 1px 2px;
    border-width:1px;
    border-color: #808080 #FFFFFF #FFFFFF #808080 
}

#windowslogo {
    height: 98%;
}

</style>
