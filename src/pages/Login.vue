<template>
  <div class="bg">
    <div id="login" class="login">
      <img src="../assets/logo.png">
      <div name="div_email" class="login__row">
        <span>Email</span>
        <input v-model="email" v-on:keyup="validateEmail" placeholder="abc@helloworld.com"/>
        <div>
          <span class="msg msg--warning">{{msg_email_invalid}}</span>
        </div>
      </div>
      <div name="div_password" class="login__row">
        <span>Password</span>
        <input type="password" v-model="password" placeholder="abCD12!@"/>
      </div>
      <div>
        <button name="btn_login" v-on:click="login">LOGIN</button>
      </div>
    </div>
  </div>
</template>

<script>
const axios = require('axios')

const DEV_API_URL = 'https://admin-api-dev.ohcoach.com'
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export default {
  name: 'Login',
  data () {
    return {
      email: '',
      password: '',
      auth: '',
      loading: true,
      msg_email_invalid: ''
    }
  },
  methods: {
    validateEmail () {
      let email = this.email
      let matches = EMAIL_REGEX.exec(email)
      if (!matches) {
        this.msg_email_invalid = 'Wrong email address'
      } else {
        this.msg_email_invalid = ''
      }
    },
    login: function (event) {
      axios
        .post(DEV_API_URL + '/auth/signin',
          {
            'email': this.email,
            'password': this.password
          })
        .then(response => {
          console.log(response)
          this.auth = response.data.Authorization
          alert('Welcome!')
        })
        .catch(error => {
          alert('[Login Failed] ' + error)
        })
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
  .login__row {
    height: 50px;
  }
  .msg {
    font-size: 14px;
  }
  .msg--warning {
    color: red;
  }
</style>
