<template>
  <div ref="draggableContainer" id="cli-container">
    <div id="cli-header" @mousedown="dragMouseDown">
      <span>command prompt</span>
      <div class="close" v-on:click="closeCLI()">X</div>
    </div>
    <span id="cmds">C: _/></span><input type="text" name="command" id="command">
  </div>
</template>

<script>
export default {
  name: 'CLI',
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
  mounted() {
    console.log('asdf')
    let input = document.querySelector('#command');
    input.focus();
  input.select();

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
    closeCLI () {
      document.querySelector('#cli-container').style.display = 'none'
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=VT323&display=swap');


#cli-container {
  position: absolute;
  z-index: 10;
  height: 31%;
  width: 50%;
  border: 2px solid;
  background-color: black;
  border-width:1px;
  border-color:#FFFFFF #808080 #808080 #FFFFFF;
  resize: both;
  overflow: auto;
  font-family: 'VT323', monospace;
  /* text-align:center; */
  display: none;
  color: #FFFFFF;
  top: 25%;
  left: 25%;
}
#cli-header {
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
  text-align: center;
}

.close:active{
    border-color: #808080  #FFFFFF  #FFFFFF #808080;
}

#command {
  background-color: black;
  border: none;
  color: white;
  font-family: 'VT323', monospace;
  outline: none;
  
}


</style>