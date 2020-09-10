<template>
  <div id="top-nav" class="top-nav theme-white">
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
      <button class="btn btn--medium" v-on:click="logout">Log Out</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Top',
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

@import "../../styles/style.css";
.top-nav {
  top: 0;
  left: 0;
  width: 100%;
  height: 100px;
  display: inline-flex;
  vertical-align: middle;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.75) 0px 5px 16px -8px;
}
.top-nav__logo-area {
  min-width: 100px;
  width: 100px;
  height: 100%;
  background: var(--primary-color);
}
.top-nav__right-area {
  right: 0;
  width: fit-content;
}

</style>
