<template>
  <div>
    <button v-on:click="logout">Log Out</button>
    {{ this.$auth.getPayload() }}
  </div>
</template>

<script>
export default {
  name: 'Home',
  mounted () {
    if (!this.$auth.hasToken()) {
      this.$router.replace({name: 'Login'})
    }
    console.log(this.$auth.getPayload())
  },
  methods: {
    logout () {
      this.$auth.revoke()
      this.$router.replace({name: 'Login'})
    }
  }
}
</script>

<style scoped>

</style>
