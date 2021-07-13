<template>
  <div id="alien-attack-container">
    <alien-attack-flow />
  </div>
</template>

<script>
import AlienAttackFlow from "./AlienAttackFlow.vue";
export default {
  name: "AlienAttack",
  components: {
    AlienAttackFlow,
  },
  created() {},
  mounted() {},
  computed: {},
  data: () => {
    return {};
  },
  methods: {},
};
</script>

<style lang="scss">
@import '../../../styles/global.scss';
body {
  overflow: hidden;
}

/* #alien-attack-container {
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
} */
</style>