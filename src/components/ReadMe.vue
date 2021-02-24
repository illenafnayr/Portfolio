<template>
  <div ref="draggableContainer" id="readMe-container">
    <div id="readMe-header" @mousedown="dragMouseDown">
      <img src="../assets/Pin-sheet.png" alt="">
    </div>
    <span id="readMeBody">README.txt</span>
  </div>
</template>

<script>
export default {
  name: 'ReadMe',
  data: function () {
    return {
      positions: {
        clientX: undefined,
        clientY: undefined,
        movementX: 0,
        movementY: 0
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
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=VT323&display=swap');


#readMe-container {
  position: absolute;
  left: 80%;
  top: 15%;
  z-index: 9;
  font-family: 'VT323', monospace;
  text-align:center;
  margin: 0%;
  padding: 0%;
}

#readMe-container:active {
    background-color: blue;
    color: white;
}

#readMe-header {
  cursor:move;
  z-index: 10;
  color: white;
}

#readMeBody {
    font-size: .85rem;
}
</style>