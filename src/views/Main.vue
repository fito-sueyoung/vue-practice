<template>
  <div id="main-view">
    {{ user }}
  </div>
</template>

<script>
export default {
  name: 'Main',
  data () {
    return {
      user: this.$store.getters['auth/getPayload']
    }
  }
}
</script>

<style scoped>

</style>
