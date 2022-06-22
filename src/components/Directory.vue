<template>
    <div ref="draggableContainer" class="directory-container" :id="name">
        <div id="directory-header" @mousedown="dragMouseDown">
            <span>{{ name }}</span>
            <div class="close" v-on:click="close()">X</div>
        </div>
        <div id="links">
            <div>directory</div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Directory',
    props: {
        name: String
    },
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
        document.querySelector(`#${this.name}`).style.display = 'none'
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
        closeDragElement() {
            document.onmouseup = null
            document.onmousemove = null
        },
        close() {
            document.querySelector(`#${this.name}`).style.display = 'none'
        }
    }
}
</script>

<style lang="scss">
@import '../styles/global.scss';
@import url('https://fonts.googleapis.com/css2?family=VT323&display=swap');


.directory-container {
    position: absolute;
    z-index: 10;
    height: auto;
    width: 50%;
    max-width: 600px;
    min-width: 300px;
    border: 2px solid;
    background-color: rgb(192, 192, 192);
    border-width: 1px;
    border-color: #FFFFFF #808080 #808080 #FFFFFF;
    resize: both;
    overflow: hidden;
    font-family: 'VT323', monospace;
    text-align: center;
    top: 5%;
    left: 15%;
}

#directory-header {
    cursor: move;
    z-index: 10;
    border: 1px solid black;
    color: white;
    background-image: linear-gradient(90deg, rgb(0, 0, 123), black);
    display: flex;
    justify-content: space-between;
}

.close {
    border: 1px solid;
    border-width: 1px;
    border-color: #FFFFFF #808080 #808080 #FFFFFF;
    background-color: rgb(192, 192, 192);
    width: 3%;
}

.close:active {
    border-color: #808080 #FFFFFF #FFFFFF #808080;
}

#links {
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: space-evenly;
    height: 90%;
    /* border: 1px solid gold; */
    overflow: auto;
    padding: 5%;
}
</style>