<template>
  <div ref="draggableContainer" id="resume-container">
    <div id="resume-header" @mousedown="dragMouseDown">
      <span>Resume</span>
      <div class="close" v-on:click="closePortfolio()">X</div>
    </div>
    <!-- <iframe src="https://drive.google.com/file/d/1KP3j4HTnb6PT7QXT_49KP7CdftAgPvc7/preview" width="640" height="480"></iframe> -->
    <div id="resumeBody">
      <img src="../assets/me.jpeg" alt="My Smiling Face" id="myFace">
      <h3>Ryan Fanelli</h3>
      <h4>Full-Stack Software Engineer</h4>
      <h5>(802)-777-3409</h5>
      <div>
        <span class="contact"><a href="https://www.linkedin.com/in/ryan-fanelli/">LinkedIn</a></span>
        <span class="contact"><a href = "mailto: illenafnayr@gmail.com">illenafnayr@gmail.com</a></span>
        <span class="contact"><a href="https://github.com/illenafnayr">GitHub</a></span>
      </div>
      <div id="stack">
        <img class="tech-logo" src="../assets/react.png" alt="react">
        <img class="tech-logo" src="../assets/vue.png" alt="vue">
        <img class="tech-logo" src="../assets/node.png" alt="node">
        <img class="tech-logo" src="../assets/mysql.png" alt="mysql">
        <img class="tech-logo" src="../assets/express.png" alt="express">
        <img class="tech-logo" src="../assets/mongodb.png" alt="mongodb">
        <img class="tech-logo" src="../assets/rubyonrails.png" alt="ruby on rails">
        <img class="tech-logo" src="../assets/postgresql.png" alt="postgresql">
      </div>
      <hr style="width: 95%">
      <div id="skills">
        <span class="bold">Skills</span>
          <div id="frontend"><span class="bold">Frontend: </span>VueJs, ReactJS, EJS, CSS3, Bootstrap, CSS Flexbox / Grid, SASS, HTML, vanilla JavaScript</div>
          <div id="backend"><span class="bold">Backend: </span>NodeJS, MongoDB/Mongoose, ExpressJS, PostgreSQL, MySQL, Sequelize, Ruby on Rails</div>
          <div id="technologies"><span class="bold">Technologies: </span>R programming language, Git/GitHub, Google Maps API, Google GeoCoder, TypeScript, JQuery, DataGrip, DbDesign</div>
          <hr style="width: 95%">
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'Resume',
  data: function () {
    return {
      positions: {
        clientX: undefined,
        clientY: undefined,
        movementX: 0,
        movementY: 0,
      }
    }
  },
  methods: {
    dragMouseDown: function (event) {
      event.preventDefault()
      // get the mouse cursor position at startup:
      this.positions.clientX = event.clientX
      this.positions.clientY = event.clientY
      document.onmousemove = this.elementDrag
      document.onmouseup = this.closeDragElement
    },
    elementDrag: function (event) {
      event.preventDefault()
      this.positions.movementX = this.positions.clientX - event.clientX
      this.positions.movementY = this.positions.clientY - event.clientY
      this.positions.clientX = event.clientX
      this.positions.clientY = event.clientY
      // set the element's new position:
      this.$refs.draggableContainer.style.top = (this.$refs.draggableContainer.offsetTop - this.positions.movementY) + 'px'
      this.$refs.draggableContainer.style.left = (this.$refs.draggableContainer.offsetLeft - this.positions.movementX) + 'px'
    },
    closeDragElement () {
      document.onmouseup = null
      document.onmousemove = null
    },
    closePortfolio () {
      document.querySelector('#resume-container').style.display = 'none'
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=VT323&display=swap');


#resume-container {
  position: absolute;
  z-index: 10;
  height: 55%;
  /* width: fit-content; */
  border: 2px solid;
  background-color: rgb(192,192,192);
  border-width:1px;
  border-color:#FFFFFF #808080 #808080 #FFFFFF;
  resize: both;
  overflow: hidden;
  font-family: 'VT323', monospace;
  text-align:center;
  display: none;
  top: 21%;
  left: 30%;
}
#resume-header {
  cursor:move;
  z-index: 10;
  border: 1px solid black;
  color: white;
  background-image: linear-gradient(90deg, rgb(0,0,123), black);
  display: flex;
  justify-content: space-between;
}

.close {
  border: 1px solid;
  border-width:1px;
  border-color:#FFFFFF #808080 #808080 #FFFFFF;
  background-color: rgb(192,192,192);
  width: 3%;
}

.close:active{
    border-color: #808080  #FFFFFF  #FFFFFF #808080;
}



#resumeBody {
  height: 100%;
  /* width: 100%; */
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: auto;
  /* justify-content: center; */
}

#myFace {
  height: 175px;
  width: auto;
  border: 2px solid black;
  border-radius: 50%;
  margin-top: 3%;
}

.contact {
  margin: 2%;
}

#stack{
  display: flex;
  /* margin: 2.5%; */
}

.tech-logo {
  height: 25px;
}

.bold {
  font-weight: 600;
}
</style>