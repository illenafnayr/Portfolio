<template>
  <div @mousemove="handleMouseMove" class="home">
    <CyanCat />
    <Desktop />
    <NavBar />
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
    return{
      timer: undefined,
    }
  },
  methods: {
    resetTimer(timer) {
      clearInterval(timer);
    },
    handleMouseMove(evt) {
      console.log("event: ", evt);
      this.resetTimer(this.timer);
      this.timer = setTimeout(this.showScreenSaver, 5000);
    },
    showScreenSaver() {
      console.log("show screen saver")
    }
  },
};
</script>

<style lang="scss">
@import "../styles/global.scss";
body {
  margin: 0;
  background-color: $color-background-color;
}
</style>
