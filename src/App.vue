<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
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
  color: #2c3e50;
}

.bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.fit-width {
  width: 100%;
}

.fit-height {
  height: 100%;
}

.wrapper--center {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.clickable {
  cursor: pointer;
}

button, .btn {
  background: transparent;
  border: transparent;
  color: black;
  cursor: pointer;
}

.btn--medium {
  width: 100px;
  min-height: 30px;
}

</style>
