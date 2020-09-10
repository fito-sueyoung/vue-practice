<template>
  <div class="bg">
    <div id="top-nav" class="top-nav">
      <div class="top-nav__logo-area">
        <img class="fit-width fit-height clickable" v-on:click="goMainView()">
      </div>
      <div class="fit-width">
        main
      </div>
      <div class="top-nav__right-area wrapper--center">
        <button class="btn--medium" v-on:click="goAccountView()">
          {{ user.name }}
        </button>
        <button class="btn--medium" v-on:click="logout">Log Out</button>
      </div>
    </div>
    <div class="fit-height fit-width" style="display: inline-flex;">
      <div id="left-nav" class="left-nav">
      </div>
      <div id="contents" class="contents">
        <main-view></main-view>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Home',
  data () {
    return {
      user: this.$store.getters['auth/getPayload']
    }
  },
  methods: {
    logout () {
      let result = confirm('Really????')
      if (result) {
        this.$store.dispatch('auth/revoke')
        this.$router.replace({name: 'Login'})
      }
    },
    goMainView () {
      this.$router.push({name: 'Home'}, () => {})
    },
    goAccountView () {
      alert('Account View')
    }
  }
}
</script>

<style scoped>
  .top-nav {
    top: 0;
    left: 0;
    width: 100%;
    height: 100px;
    display: inline-flex;
    vertical-align: middle;
    align-items: center;
    background: white;
    box-shadow: rgba(0, 0, 0, 0.75) 0px 5px 16px -8px;
  }
  .left-nav {
    top: 0;
    left: 0;
    height: 100%;
    min-width: 100px;
    width: 100px;
    z-index: 2;
    background: black;
  }
  .contents {
    position: relative;
    width: 100%;
    height: 100%;
  }
  .top-nav__logo-area {
    min-width: 100px;
    width: 100px;
    height: 100%;
    background: #31C29C;
  }
  .top-nav__right-area {
    right: 0;
    width: fit-content;
  }
</style>
