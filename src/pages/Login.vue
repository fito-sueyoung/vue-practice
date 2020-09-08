<template>
  <div class="bg">
    <div id="login" class="login">
      <img src="../assets/logo.png">
      <div name="div_email">
        <span>Email</span>
        <input v-model="email" placeholder="abc@helloworld.com"/>
      </div>
      <div name="div_password">
        <span>Password</span>
        <input type="password" v-model="password" placeholder="abCD12!@"/>
      </div>
      <button name="btn_login" v-on:click="login">LOGIN</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  el: '#login',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    login: function (event) {
      alert('Login!!!!' + this.email + ' ' + this.password)
    }
  }
}

</script>

<style scoped>
  .bg {
    text-align: center;
  }
  .login {
    width: 500px;
    height: 500px;
    display: inline-block;
  }
</style>
