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

    <div class="alien-attack-canvas">
      <div id="player"></div>
    </div>
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
    };
  },
  methods: {
    attack() {
      this.enemey.hp -= this.player.attack;
      if (this.enemey.hp <= 0) {
        alert("You win!");
        this.reset();
      }
    },
    reset() {
      this.setPlayerStats();
      this.setEnemyStats();
    },
    setPlayerStats() {
      this.player.hp = 10;
      this.player.attack = 5;
      this.player.defense = 5;
    },
    setEnemyStats() {
      this.enemy.hp = Math.floor(Math.random() * 10);
      this.enemy.attack = Math.floor(Math.random() * 10);
      this.enemy.defense = Math.floor(Math.random() * 10);
    },
    move(evt) {
      // console.log(evt)
      switch (evt.key) {
        case "ArrowUp":
          console.log("arrowuP");
          break;

        case "ArrowDown":
          console.log("arrowdown");
          break;

        case "ArrowLeft":
          console.log(`arrow left`);
          break;

        case "ArrowRight":
          console.log(`arrow right`);
          break;
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