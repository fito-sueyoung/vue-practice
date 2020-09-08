<template>
  <div class="bg wrapper--center">
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
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export default {
  name: 'Login',
  data () {
    return {
      email: 'sunghoon.cho@fitogether.com',
      password: 'whtjdgns00!!',
      accountInfo: null,
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
    login () {
      this.$http
        .post(this.$apiUrl + '/auth/signin',
          {
            email: this.email,
            password: this.password
          })
        .then(response => {
          let token = response.data.Authorization
          this.$auth.setToken(token)
          alert('Welcome!')
          this.$router.replace({name: 'Home'})
        })
        .catch(error => {
          alert('[Login Failed] ' + error)
        })
    }
  }
}

</script>

<style scoped>
  .login {
    width: 500px;
    height: 500px;
    display: inline-block;
    box-shadow: 0 10px 16px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19) !important;
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
