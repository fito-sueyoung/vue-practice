<template>
  <div id="main-view">
    {{ this.$auth.getPayload() }}
  </div>
</template>

<script>
export default {
  name: 'Main'
}
</script>

<style scoped>

</style>
