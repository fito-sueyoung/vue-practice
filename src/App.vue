<script src="store/index.js"></script>
<script src="main.js"></script>
<template>
  <div id="app" data-app>
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'App'
}
</script>

<style>

@import "assets/styles/style.css";

#app {
  clear: both;
  display: block;
  min-width: 920px;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-box-shadow: unset;
  color: #2c3e50;
}

</style>
