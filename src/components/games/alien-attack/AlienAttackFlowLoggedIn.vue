<template>
  <div id="alien-attack-flow-logged-in-container">
    <h1 class="title">Alien Attack</h1>
    <div class="player">
      <h2>You:</h2>
      <div>Name: {{ player.name }}</div>
      <div>Hitpoints: {{ player.hp }}</div>
      <div>Attack: {{ player.attack }}</div>
      <div>Defense: {{ player.defense }}</div>
      <button @click="attack">Click To Attack</button>
    </div>
    <div class="enemy">
      <h2>Attacker Alien:</h2>
      <div>Name: {{ enemy.name }}</div>
      <div>Hitpoints: {{ enemy.hp }}</div>
      <div>Attack: {{ enemy.attack }}</div>
      <div>Defense: {{ enemy.defense }}</div>
    </div>

    <button @click="drawCanvas()">Start Game</button>
    <canvas class="alien-attack-canvas">
      <!-- <div id="player"></div> -->
    </canvas>
  </div>
</template>
<script>
export default {
  name: "AlienAttackFlowLoggedin",
  components: {},
  created() {},
  mounted() {
    this.reset();
    document.addEventListener("keydown", this.move);
  },
  computed: {},
  data: () => {
    return {
      isLoggedIn: true,
      player: {
        name: undefined,
        hp: undefined,
        defense: undefined,
        img: undefined,
        weapons: [],
      },
      enemy: {
        name: undefined,
        hp: undefined,
        defense: undefined,
        img: undefined,
        weapons: [],
      },
      weapon: {
        attack: undefined,
        accuracy: undefined,
      },
      position: 48,
      SPRITE_WIDTH: 48,
      SPRITE_HEIGHT: 48,
      // BORDER_WIDTH: 1,
      // SPACING_WIDTH: 1,
    };
  },
  methods: {
    reset() {},
    // move(evt) {
    //   // console.log(evt)
    //   switch (evt.key) {
    //     case "ArrowUp":
    //       console.log("arrowuP");
    //       break;

    //     case "ArrowDown":
    //       console.log("arrowdown");
    //       break;

    //     case "ArrowLeft":
    //       console.log(`arrow left`);
    //       break;

    //     case "ArrowRight":
    //       console.log(`arrow right`);
    //       break;
    //   }
    // },
    drawCanvas() {
      let img = new Image();
      img.src = "https://freepikpsd.com/media/2020/03/alien-sprite-png-1.png";
      img.onload = function () {
        init();
      };

      let canvas = document.querySelector("canvas");
      let ctx = canvas.getContext("2d");
      const width = this.SPRITE_WIDTH;
      const height = this.SPRITE_HEIGHT;
      const scaledWidth = width * 0.75;
      const scaledHeight = height * 0.75;
      function drawFrame(frameX, frameY, canvasX, canvasY) {
        ctx.drawImage(
          img,
          frameX * width,
          frameY * height,
          width,
          height,
          canvasX,
          canvasY,
          scaledWidth,
          scaledHeight
        );
      }
      const cycleLoop = [0, 1, 2, 1];
      let currentLoopIndex = 0;
      let frameCount = 0;

      function step() {
        frameCount++;
        if (frameCount < 15) {
          window.requestAnimationFrame(step);
          return;
        }
        frameCount = 0;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        drawFrame(cycleLoop[currentLoopIndex], 0, 0, 0);
        currentLoopIndex++;
        if (currentLoopIndex >= cycleLoop.length) {
          currentLoopIndex = 0;
        }
        window.requestAnimationFrame(step);
      }
      function init() {
        window.requestAnimationFrame(step);
      }
    },
  },
};
</script>

<style lang="scss">
@import "../../../styles/global.scss";
body {
  overflow: hidden;
}

#alien-attack-flow-logged-in-container {
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
  display: flex;
}

.title {
  color: $color-background;
}

.alien-attack-canvas {
  width: 750px;
  height: 750px;
  border: 1px solid gold;
  z-index: 999;
}

#player {
  width: 75px;
  height: 75px;
  background-color: blueviolet;
}
</style>