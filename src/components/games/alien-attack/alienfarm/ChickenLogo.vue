<template>
    <div class="home">
      <img class="chicken-logo filter-animation" src="./chicken.png" alt="Chicken">
    </div>
  </template>
  
  <script>
  
  export default {
    name: 'ChickenLogo',
  }
  </script>
  
  <style scoped lang="scss">
  .chicken-logo {
    width: auto;
    height: 10rem;
  
  }
  
  .filter-animation {
    animation-name: redToGreen;
    animation-duration: 240s;
    animation-iteration-count: infinite;
  }
  
  @keyframes redToGreen {
    0% {filter: invert(11%) sepia(41%) saturate(6126%) hue-rotate(357deg) brightness(97%) contrast(109%);}
    50% {filter: invert(68%) sepia(84%) saturate(2879%) hue-rotate(75deg) brightness(124%) contrast(119%);}
    100% {filter: invert(11%) sepia(41%) saturate(6126%) hue-rotate(357deg) brightness(97%) contrast(109%);}
  }
  </style>
  