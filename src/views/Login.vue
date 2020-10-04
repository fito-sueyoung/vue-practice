<template>
  <div class="bg wrapper--center">
    <login-form></login-form>
  </div>
</template>

<script>
import LoginForm from '../components/form/Login'

export default {
  name: 'Login',
  components: {
    'login-form': LoginForm
  }
}

</script>

<style scoped>

</style>
