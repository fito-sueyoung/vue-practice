<template>
  <div class="bg">
    <top-navbar></top-navbar>
    <div class="fit-height fit-width" style="display: inline-flex;">
      <lef-navbar></lef-navbar>
      <div id="contents" class="contents">
        <main-view></main-view>
      </div>
    </div>
  </div>
</template>

<script>
import Top from '../components/public/Top'
import Left from '../components/public/Left'
import Main from './Main'

export default {
  name: 'Home',
  components: {
    'top-navbar': Top,
    'lef-navbar': Left,
    'main-view': Main
  }
}
</script>

<style scoped>
  .contents {
    position: relative;
    width: 100%;
    height: 100%;
  }

</style>
