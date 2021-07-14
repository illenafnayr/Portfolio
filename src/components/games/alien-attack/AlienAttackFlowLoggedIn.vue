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
    <div class="enemey">
      <h2>Attacker Alien:</h2>
      <div>Name: {{ enemey.name }}</div>
      <div>Hitpoints: {{ enemey.hp }}</div>
      <div>Attack: {{ enemey.attack }}</div>
      <div>Defense: {{ enemey.defense }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AlienAttackFlowLoggedin",
  components: {},
  created() {},
  mounted() {
    this.reset()
  },
  computed: {},
  data: () => {
    return {
      isLoggedIn: true,
      player: {
        name: "name",
        hp: undefined,
        attack: undefined,
        defense: undefined,
      },
      enemey: {
        name: "name",
        hp: undefined,
        attack: undefined,
        defense: undefined,
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
      this.player.hp = 10;
      this.player.attack = 5;
      this.player.defense = 5;
      this.enemey.hp = Math.floor(Math.random() * 10) / 1 + 1;
      this.enemey.attack = Math.floor(Math.random() * 10) / 1 + 1;
      this.enemey.defense = Math.floor(Math.random() * 10) / 1 + 1;
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
}

.title {
  color: $color-background;
}
</style>