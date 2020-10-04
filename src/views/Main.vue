<template>
  <div id="main-view">
    {{ payload }}
  </div>
</template>

<script>

import { mapGetters } from 'vuex'

export default {
  name: 'Main',
  computed: {
    ...mapGetters([
      'getPayload'
    ]),
    payload () {
      return this.$store.getters['auth/getPayload']
    }
  }
}
</script>

<style scoped>

</style>
