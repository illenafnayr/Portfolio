<template>
  <div ref="draggableContainer" id="draggable-container">
    <div id="draggable-header" @mousedown="dragMouseDown">
      <span>header</span>
    </div>
    <span>Body</span>
  </div>
</template>

<script>
export default {
  name: 'DraggableDiv',
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
#draggable-container {
  position: absolute;
  z-index: 9;
  height: 30%;
  width: 50%;
  border: 2px solid;
  background-color: rgb(192,192,192);
  border-width:1px;
  border-color:#FFFFFF #808080 #808080 #FFFFFF;
  resize: both;
  overflow: auto;
}
#draggable-header {
  cursor:move;
  z-index: 10;
  border: 1px solid black;
  color: white;
  background-image: linear-gradient(90deg, rgb(0,0,123), black);


}
</style>