<template>
  <div id="alien-attack-flow-container">
    <h1 class="title">write game here</h1>
  </div>
</template>

<script>
export default {
  name: "AlienAttackFlow",
  components: {},
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

<style lang="scss">
@import '../../../styles/global.scss';
body {
  overflow: hidden;
}

#alien-attack-flow-container {
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
}

.title {
    color: red;
}

#kitty {
  width: 100%;
  height: 100%;
}
</style>