<template>
  <div id="alien-attack-flow-logged-in-container">
    <h1 class="title">Alien Attack</h1>
    <button id="startALienFarm" @click="startGame()">Start Game</button>
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
      SPRITE_WIDTH: 48,
      SPRITE_HEIGHT: 48,
    };
  },
  methods: {
    reset() {},
    startGame() {
      const SCALE = .5;
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

      let canvas = document.querySelector("canvas");
      let ctx = canvas.getContext("2d");
      let keyPresses = {};
      let currentDirection = FACING_DOWN;
      let currentLoopIndex = 0;
      let frameCount = 0;
      let positionX = 0;
      let positionY = 0;
      let img = new Image();

      window.addEventListener("keydown", keyDownListener);
      function keyDownListener(event) {
        keyPresses[event.key] = true;
      }

      window.addEventListener("keyup", keyUpListener);
      function keyUpListener(event) {
        keyPresses[event.key] = false;
      }

      function loadImage() {
        img.src = "https://freepikpsd.com/media/2020/03/alien-sprite-png-1.png";
        img.onload = function () {
          window.requestAnimationFrame(gameLoop);
        };
      }

      function drawFrame(frameX, frameY, canvasX, canvasY) {
        ctx.drawImage(
          img,
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

        drawFrame(
          CYCLE_LOOP[currentLoopIndex],
          currentDirection,
          positionX,
          positionY
        );
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
  flex-direction: column;
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