<template>
  <div
    v-if="!screenSaverActive"
    v-on:keydown="handleKeyPress"
    @click="startScreenSaver"
    @mousemove="startScreenSaver"
    class="home"
  >
    <CyanCat />
    <Desktop />
    <NavBar />
  </div>
  <div
    v-if="screenSaverActive"
    v-on:keydown="handleKeyPress"
    @click="stopScreenSaver"
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
  created() {
    window.addEventListener("keydown", (e) => {
      // if (e.key == "Escape") {
      //   this.showModal = !this.showModal;
      // }
      console.log(e);
      this.handleKeyPress();
    });
  },
  mounted() {
    console.warn("this message will self destruct in 30s");
    setTimeout(() => {
      console.error("💥 boom! 💥");
    }, 1000 * 30);
  },
  data() {
    return {
      screenSaverActive: undefined,
    };
  },
  methods: {
    startScreenSaver() {
      this.screenSaverActive = undefined;
      clearTimeout(this.timer);
      this.timer = setTimeout(() => {
        this.screenSaverActive = true;
      }, 1000 * 3);
    },
    handleKeyPress(evt) {
      console.log("Key Pressed! ", evt);

      if (this.screenSaverActive) {
        this.stopScreenSaver();
      }
      if (!this.screenSaverActive) {
        this.startScreenSaver;
      }
    },
    stopScreenSaver() {
      clearTimeout(this.timer);
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
