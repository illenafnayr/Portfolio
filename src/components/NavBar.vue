<template>
<div id="navbar">
    <div id="startbtn">
        <img src="../assets/windows.png" alt="windows" id="windowslogo" >
        <span>START</span>
    </div>
</div>

</template>

<script>
export default {
  name: 'NavBar',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=VT323&display=swap');


#navbar {
    position: absolute;
    bottom: 0%;
    height: 25px;
    width: 100vw;
    background-color: rgb(192,192,192);
}

#startbtn {
    font-family: 'VT323', monospace;
    height: 80%;
    left: 3px;
    border: .5px solid black;
    box-sizing: border-box;
    margin-top: 2px;
    margin-bottom: 2px;
    position: absolute;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1px 2px 1px 2px;
    border-width:1px;
    border-color:#FFFFFF #808080 #808080 #FFFFFF;
    cursor: pointer;
}

#startbtn:active {
    border-color: #808080 #FFFFFF #FFFFFF #808080 ;
}

#windowslogo {
    height: 98%;
}

</style>
