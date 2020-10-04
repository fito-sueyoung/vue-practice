<template>
  <div id="main-view">
    {{ payload }}
    <user-table></user-table>
  </div>
</template>

<script>

import { mapGetters } from 'vuex'
import UserTable from '../components/table/User'

export default {
  name: 'Main',
  components: {
    'user-table': UserTable
  },
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
