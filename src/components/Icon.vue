<template>
    <div ref="draggableContainer" :id="`${name}-icon-container`" class="icon-container">
      <div class="icon-header" @mousedown="dragMouseDown">
        <img :id="`${name}-icon-img`" :src="require(`../assets/${this.filename}`)" alt="">
      </div>
      <span class="icon-body">{{title}}</span>
    </div>
  </template>
  
  <script>
  export default {
    name: 'CLIIcon',
    props: {
        name: String,
        filename: String,
        title: String
    },
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
		mounted() {
			document.getElementById(`${this.name}-icon-container`).style.left = `${Math.floor(Math.random() * 90)}%` ;
			document.getElementById(`${this.name}-icon-container`).style.top = `${Math.floor(Math.random() * 75)}%`;
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
    }
  }
  </script>
  
  <style lang="scss">
  @import '../styles/global.scss';
  @import url('https://fonts.googleapis.com/css2?family=VT323&display=swap');
  
  
  .icon-container {
    position: absolute;
    z-index: 9;
    font-family: 'VT323', monospace;
    text-align:center;
    margin: 0%;
    padding: 0%;
  }
  
  .icon-container:active {
      background-color: blue;
      color: white;
  }
  
  .icon-header {
    cursor:move;
    z-index: 10;
    color: white;
  }
  
  .icon-body {
      font-size: .85rem;
  }
  </style>