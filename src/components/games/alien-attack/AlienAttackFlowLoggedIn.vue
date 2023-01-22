<template>
  <div id="alien-attack-flow-logged-in-container">
    <div v-if="!canvas_active">
      <h1 class="title">Alien Attack</h1>
      <ChickenLogo class="hover" @click="showCanvas()" />
      <div class="white">click the chicken to start</div>
    </div>
    <div class="canvas_active" v-if="canvas_active">
      <ChickenLogo />
      <canvas class="alien-attack-canvas"> </canvas>
    </div>
  </div>
</template>
<script>
import ChickenLogo from "./alienfarm/ChickenLogo.vue";

export default {
  name: "AlienAttackFlowLoggedin",
  components: { ChickenLogo },
  created() {},
  mounted() {
    this.reset();
    document.addEventListener("keydown", this.move);
    document.querySelectorAll("canvas").width = window.innerWidth;
    document.querySelectorAll("canvas").height = window.innerHeight;
  },
  computed: {},
  data: () => {
    return {
      isLoggedIn: true,
      SPRITE_WIDTH: 48,
      SPRITE_HEIGHT: 48,
      canvas_active: undefined,
    };
  },
  methods: {
    reset() {},
    startGame() {
      const SCALE = 0.25;
      const WIDTH = this.SPRITE_WIDTH;
      const HEIGHT = this.SPRITE_HEIGHT;
      const SCALED_WIDTH = SCALE * WIDTH;
      const SCALED_HEIGHT = SCALE * HEIGHT;
      const CYCLE_LOOP = [3, 4, 3, 5];
      const FACING_DOWN = 0;
      const FACING_UP = 3;
      const FACING_LEFT = 1;
      const FACING_RIGHT = 2;
      const FRAME_LIMIT = 12;
      const MOVEMENT_SPEED = 1;

      let canvas = document.querySelector(".alien-attack-canvas");
      let ctx = canvas.getContext("2d");
      let keyPresses = {};
      let currentDirection = FACING_DOWN;
      let currentLoopIndex = 0;
      let frameCount = 0;
      let positionX = 0;
      let positionY = 0;
      let chicken = new Image();
      let alien = new Image();

      window.addEventListener("keydown", keyDownListener);
      function keyDownListener(event) {
        keyPresses[event.key] = true;
      }

      window.addEventListener("keyup", keyUpListener);
      function keyUpListener(event) {
        keyPresses[event.key] = false;
      }

      function loadImage() {
        chicken.src = require("./alienfarm/chicken-sprite.png");
        alien.src = require("./alienfarm/alien-sprite.png");
        chicken.onload = function () {
          window.requestAnimationFrame(gameLoop);
        };
      }

      function drawChickenFrame(frameX, frameY, canvasX, canvasY) {
        ctx.drawImage(
          chicken,
          frameX * WIDTH,
          frameY * HEIGHT,
          WIDTH,
          HEIGHT,
          canvasX,
          canvasY,
          SCALED_WIDTH,
          SCALED_HEIGHT
        );
      }
      function drawAlienFrame(frameX, frameY, canvasX, canvasY) {
        ctx.drawImage(
          alien,
          frameX * WIDTH,
          frameY * HEIGHT,
          WIDTH,
          HEIGHT,
          canvasX,
          canvasY,
          SCALED_WIDTH,
          SCALED_HEIGHT
        );
      }

      loadImage();

      function gameLoop() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        let hasMoved = false;

        if (keyPresses.w) {
          moveCharacter(0, -MOVEMENT_SPEED, FACING_UP);
          hasMoved = true;
        } else if (keyPresses.s) {
          moveCharacter(0, MOVEMENT_SPEED, FACING_DOWN);
          hasMoved = true;
        }

        if (keyPresses.a) {
          moveCharacter(-MOVEMENT_SPEED, 0, FACING_LEFT);
          hasMoved = true;
        } else if (keyPresses.d) {
          moveCharacter(MOVEMENT_SPEED, 0, FACING_RIGHT);
          hasMoved = true;
        }

        if (hasMoved) {
          frameCount++;
          if (frameCount >= FRAME_LIMIT) {
            frameCount = 0;
            currentLoopIndex++;
            if (currentLoopIndex >= CYCLE_LOOP.length) {
              currentLoopIndex = 0;
            }
          }
        }

        if (!hasMoved) {
          currentLoopIndex = 0;
        }

        drawChickenFrame(
          CYCLE_LOOP[currentLoopIndex],
          currentDirection,
          positionX,
          positionY
        );
        drawAlienFrame(CYCLE_LOOP[currentLoopIndex], 0, 100, 100);
        window.requestAnimationFrame(gameLoop);
      }

      function moveCharacter(deltaX, deltaY, direction) {
        if (
          positionX + deltaX > 0 &&
          positionX + SCALED_WIDTH + deltaX < canvas.width
        ) {
          positionX += deltaX;
        }
        if (
          positionY + deltaY > 0 &&
          positionY + SCALED_HEIGHT + deltaY < canvas.height
        ) {
          positionY += deltaY;
        }
        currentDirection = direction;
      }
    },
    showCanvas() {
      this.canvas_active = true;
      if (this.canvas_active) {
        setTimeout(() => {
          let canvas = document.querySelector(".alien-attack-canvas");
          console.log("canvas: ", canvas);
          canvas.style.width = window.innerWidth;
          canvas.style.height = window.innerHeight;
          canvas.style.display;
          this.startGame();
        }, 500);
      }
    },
  },
};
</script>

<style lang="scss">
@import "../../../styles/global.scss";
body {
  // overflow: hidden;
  margin: 0;
}

#alien-attack-flow-logged-in-container {
  width: 100%;
  height: 100%;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  display: flex;
  // flex-direction: column;
}

.title {
  color: $color-offWhite;
  text-align: center;
}

.alien-attack-canvas {
  width: 60vw;
  height: 60vh;
  border: 5px solid $color-alienGreen;
}

.canvas_active {
  display: contents;
}

.hover {
  cursor: pointer;
}

.white {
  color: $color-offWhite;
}
</style>