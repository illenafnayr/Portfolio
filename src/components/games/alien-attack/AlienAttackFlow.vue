<template>
  <div id="alien-attack-flow-container">
    <alien-attack-login v-if="!isLoggedIn" />
    <alien-attack-flow-logged-in v-if="isLoggedIn" />
  </div>
</template>

<script>
import AlienAttackLogin from "./AlienAttackLogin.vue";
import AlienAttackFlowLoggedIn from "./AlienAttackFlowLoggedIn.vue";

export default {
  name: "AlienAttackFlow",
  components: {
    AlienAttackLogin,
    AlienAttackFlowLoggedIn,
  },
  created() {},
  mounted() {},
  computed: {},
  data: () => {
    return {
      isLoggedIn: true,
    };
  },
  methods: {},
};
</script>

<style>
body {
  overflow: hidden;
}

#alien-attack-flow-container {
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
}

#kitty {
  width: 100%;
  height: 100%;
}
</style>