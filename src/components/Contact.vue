<template>
  <div ref="draggableContainer" id="contact-container">
    <div id="contact-header" @mousedown="dragMouseDown">
      <span>Contact</span>
      <div class="close" v-on:click="closeContact()">X</div>
    </div>
    <form action="post" method="post" enctype="text/plain">
    Name:<br>
    <input type="text" name="name"><br>
    E-mail:<br>
    <input type="text" name="mail"><br>
    Comment:<br>
    <!-- <input type="text" name="comment" size="45"> -->
    <textarea id="comment" name="comment" rows="4" cols="50">
    </textarea>
    <br><br>
    <input type="submit" value="Send">
    <input type="reset" value="Reset">
  </form>
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
    closeContact () {
      document.querySelector('#contact-container').style.display = 'none'
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=VT323&display=swap');


#contact-container {
  position: absolute;
  z-index: 10;
  height: 55%;
  width: 50%;
  border: 2px solid;
  background-color: rgb(192,192,192);
  border-width:1px;
  border-color:#FFFFFF #808080 #808080 #FFFFFF;
  resize: both;
  overflow: auto;
  font-family: 'VT323', monospace;
  text-align:center;
  display: none;
  top: 21%;
  left: 30%;
}
#contact-header {
  cursor:move;
  z-index: 10;
  border: 1px solid black;
  color: white;
  background-image: linear-gradient(90deg, rgb(0,0,123), black);
  display: flex;
  justify-content: space-between;
}

#comment {
  margin: 1%;
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

</style>