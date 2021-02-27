<template>
  <div ref="draggableContainer" id="contact-container">
    <div id="contact-header" @mousedown="dragMouseDown">
      <span>E-mail</span>
      <div class="close" v-on:click="closeContact()">X</div>
    </div>
    <br>
    <form action="https://mailthis.to/Ryan"
        method="POST" encType="multipart/form-data" id="contactForm">
        <div id="emailMeta">
          <div id="metaContainer">
            <div class="metaDiv">
              <label for="name">To: </label>
              <input id="name" type="text" name="name" value="illenafnayr@gmail.com" disabled="disabled"><br>
            </div>

            <div class="metaDiv">
              <label for="email">Cc: </label>
              <input  id="email" type="email" name="_replyto" placeholder="Your E-mail address"><br>
            </div>

            <div>
              <label for="subject">Subject: </label>
              <input type="text" name="subject" id="subject"><br>
            </div>
          </div>
          <button type="submit" id="send">
            <img src="../assets/Letter.png" alt="send">
            <span>Send</span>
          </button>
        </div>
        <br>
        <div id="emailBody">
          <textarea name="message" id="text"></textarea><br>
          <input type="file" name="file" placeholder="Attachments (optional)"><br>
          <input type="hidden" name="_subject" value="Contact form submitted">
          <input type="hidden" name="_after" value="https://myhomepage.net/">
          <input type="hidden" name="_honeypot" value="">
          <input type="hidden" name="_confirmation" value="">
        </div>

    </form>
  </div>
</template>

<script>
export default {
  name: 'Email',
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
  height: 370px;
  width: 50%;
  border: 2px solid;
  background-color: rgb(192,192,192);
  border-width:1px;
  border-color:#FFFFFF #808080 #808080 #FFFFFF;
  resize: both;
  overflow: auto;
  font-family: 'VT323', monospace;
  text-align:center;
  /* display: none; */
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

#contactForm {
  display: flex;
  flex-direction: column;
}

#emailMeta {
  display: flex;
  justify-content: center;
}

#metaContainer {
  display: flex;
  flex-direction: column;
}

.metaDiv {
  margin-left: 32px;
}

#send {
  border: 1px solid black;
  display: flex;
  background-color: rgb(192,192,192);
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 64px;
  height: 64px;
  margin-left: 5px;
  box-sizing: border-box;
  outline: none;
  border-color:#FFFFFF #808080 #808080 #FFFFFF;
  cursor: pointer;
}

#send:active {
  border-color: #808080  #FFFFFF  #FFFFFF #808080;
}

#text {
  width: 350px;
  height: 200px;
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

@media only screen and (max-width: 740px) {

  #contact-container {
    width: 95%;
    left: 2.5%;
  }

   input{
     width: 30%;
   }

   #send {
     width: 32px;
     height: 32px;
     border: none;
     margin-left: 0;
   }

   .metaDiv {
     margin: 0;
     width:120%
   }

   #text {
     height: 200px;
     width:80%;
   }
}
</style>