<template>
<div id="startMenu">

  <div id="sidebar">
    <span id="startMenuTitle">Ryan Fanelli Software Engineer</span>
  </div>

  <div id="appList">
      <div class="block" >
        Portfolio
      </div>
      <div class="block" >
        Resume
      </div>
      <div class="block" >
        Contact
      </div>
      <a class="block" href="https://github.com/illenafnayr" target="_blank">
        <div class="container">
          <img src="../assets/github-logo.png" alt="Git Hub">
          <span>Git Hub</span>
        </div>
      </a>
      <a class="block" href="https://www.linkedin.com/in/ryan-fanelli/" target="_blank">
        <div class="container">
          <img src="../assets/linkedin-logo.png" alt="Git Hub">
          <span>LinkedIn</span>
        </div>
      </a>
      <div class="block" >
        <img src="../assets/DocumentsFolder.png" alt="Portfolio" id="documentsFolder">
        <span>Portfolio</span>
      </div>
      <hr>
      <div class="block" >
        Portfolio
      </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'StartMenu'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');

#startMenu{
    position: absolute;
    left: 1.5px;
    bottom: 38px;
    width: 175px;
    height: 275px;
    background-color: rgb(191,191,191);
    border: 1px solid black;
    /* border-width:1px; */
    border-color:#FFFFFF #808080 #808080 #FFFFFF;
    display: flex;
}

#sidebar{
  height: 100%;
  width: 12.5%;
  background-color: rgb(0,0,123);
  display: flex;
  justify-content: center;
  align-items: flex-end;
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
}

#appList {
  height: 100%;
  width: 90%;
  display: flex;
  flex-direction: column;
}

#startMenuTitle{
  writing-mode:vertical-lr;
  transform: rotate(180deg);
  color: #FFFFFF;
  margin-bottom: 40%;
}

hr {
  width: "98%";
  margin: 0;
}

.block {
  height: 14.2857142857%;
  box-sizing: border-box;
  width: 100%;
  display: flex;
  align-items: center;
  color: black;
  /* border: 1px solid gold; */
}

.block:hover {
  cursor: pointer;
  background-color: rgb(0,0,123);
  color: #FFFFFF;
}

.block:hover img {
  filter: invert(100%);
}

.block:link {
  text-decoration: none;
  color: inherit;
}

.container {
  display: flex;
  align-items: center
}

img {
  width: 10%;
  margin: 0% 3% 0% 5%;
}

.block:hover #documentsFolder {
  filter: none;
}

#documentsFolder {
  height: 65%;
  margin-left: 1.5% ;
  margin-right: 1%;
  width: auto;
}


</style>
