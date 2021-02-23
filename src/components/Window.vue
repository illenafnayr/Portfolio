<template>
    <div class="resizable-content">
        resizable
    </div>
</template>

<script>
export default {
  name: 'Window'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.resizable-content {
    height: 100px;
    width: 100px;
    border: 1px solid black;
    z-index: 1;
}
</style>
