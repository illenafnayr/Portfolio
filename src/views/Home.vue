<template>
  <div v-if="!screenSaverActive" @mousemove="startScreenSaver" class="home">
    <CyanCat />
    <Desktop />
    <NavBar />
  </div>
  <div
    v-if="screenSaverActive"
    @mousemove="stopScreenSaver"
    class="screen-saver"
  >
    <h1>Screensaver</h1>
  </div>
</template>

<script>
// @ is an alias to /src
import Desktop from "@/components/Desktop.vue";
import NavBar from "@/components/NavBar.vue";
import CyanCat from "@/components/CyanCat.vue";

export default {
  name: "Home",
  components: {
    CyanCat,
    Desktop,
    NavBar,
  },
  mounted() {
    console.warn("this message will self destruct in 30s");
    setTimeout(() => {
      console.error("ka-boom!");
    }, 1000 * 30);
  },
  data() {
    return {
      screenSaverActive: undefined,
    };
  },
  methods: {
    startScreenSaver(evt) {
      console.log("event: ", evt);
      this.screenSaverActive = undefined;
      setInterval(() => {
        console.log("screen saver true")
        this.screenSaverActive = true;
      }, 5000);
    },
    stopScreenSaver() {
      console.log("stop screen saver");
      this.screenSaverActive = undefined;
    },
  },
};
</script>

<style lang="scss">
@import "../styles/global.scss";
body {
  margin: 0;
  background-color: $color-background;
}

.screen-saver {
  width: 100vw;
  height: 100vh;
}
</style>
