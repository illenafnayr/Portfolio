<template>
  <div @click="method" id="screen-saver-container">
    <div v-for="i in 10000" :key="i" class="square"></div>
  </div>
</template>

<script>
export default {
  name: "ScreenSaver",
  components: {},
  created() {},
  mounted() {
    this.method();
  },
  computed: {},
  data: () => {
    return {
      squares: [],
    };
  },
  methods: {
    method() {
      const square = document.querySelectorAll(".square");
      for (let i = 0; i < square.length; i++) {
        const r = Math.floor(Math.random() * 256) / 1;
        const g = Math.floor(Math.random() * 256) / 1;
        const b = Math.floor(Math.random() * 256) / 1;
        square[i].id = `square${i}`;
        square[i].style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
        this.squares.push(square);
        setTimeout(() => {
          this.animate();
        }, 1000);
      }
    },
    animate() {
      for (let i = 0; i < this.squares.length; i++) {
        const r = Math.floor(Math.random() * 256) / 1;
        const g = Math.floor(Math.random() * 256) / 1;
        const b = Math.floor(Math.random() * 256) / 1;
        document.querySelector(`#square${i}`).style.backgroundColor = `rgb(${r},${g},${b})`
      }
    },
  },
};
</script>

<style lang="scss">
@import "../styles/global.scss";
body {
  overflow: hidden;
}

.element {
  height: 250px;
  width: 250px;
}

#screen-saver-container {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}

.square {
  height: 1vh;
  width: 1vh;
  border: 1px solid green;
  box-sizing: border-box;
  margin: 0 auto;
  //   background-color: red;
  //   animation-name: pulse;
  //   animation-duration: 3s;
  //   animation-timing-function: ease-out;
  //   animation-delay: 0;
  //   animation-direction: alternate;
  //   animation-iteration-count: infinite;
  //   animation-fill-mode: none;
  //   animation-play-state: running;
}

// @keyframes pulse {
//   0% {
//     background-color: red;
//   }
//   50% {
//     background-color: blue;
//   }
//   100% {
//     background-color: yellow;
//   }
// }
</style>