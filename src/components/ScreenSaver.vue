<template>
  <div @click="method" id="screen-saver-container">
    <div v-for="i in 12" :key="i" class="smallCircles div"></div>
    <div class="ring div"></div>
  </div>
</template>

<script>
export default {
  name: "ScreenSaver",
  components: {},
  created() {},
  mounted() {
    this.method();
  },
  computed: {},
  data: () => {
    return {
      smallCircles: [],
    };
  },
  methods: {
    method() {
      const smallCircles = document.querySelectorAll(".smallCircles");
      for (let i = 0; i < smallCircles.length; i++) {
        smallCircles[i].id = `smallCircles${i}`;
        this.smallCircles.push(smallCircles);
        setTimeout(() => {
        }, 1000);
      }
    },
  },
};
</script>

<style lang="scss">
@import "../styles/global.scss";
$bg: #333;
$cc: #fff;

$n-dots: 12;
$d-dots: 30px;
$d-ring: 300px;

$rt: 15px;

$ba: 360deg / $n-dots;
$trans-dist: 2 * $d-dots;
body {
  overflow: hidden;
  background-color: $bg !important;
  align-items: center;
}
#screen-saver-container {
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
}

.div,
:after {
  border-radius: 50%;
  position: absolute;
  transform-style: preserve-3d;
}

.ring {
  &:after {
    width: $d-ring;
    height: $d-ring;
    margin: -0.5 * $d-ring;
    border: $rt solid $cc;
    content: "";
  }
}

.smallCircles {
  @for $i from 1 to $n-dots + 1 {
    &:nth-child(#{$i}) {
      transform: rotate($i * $ba) translate($d-ring / 2);
      &:after{
        animation-delay: $i * 2s / 12;
      }
    }
  }
  &:after {
    height: $d-dots;
    width: $d-dots;
    margin: $d-dots / 2;
    background-color: $cc;
    content: "";
    animation: play 2s linear infinite;
  }
}

@keyframes play {
  0% {
    transform: rotateY(0deg) translate($trans-dist) rotateY(0deg);
  }
  100% {
    transform: rotateY(360deg) translate($trans-dist) rotateY(-360deg);
  }
}

</style>