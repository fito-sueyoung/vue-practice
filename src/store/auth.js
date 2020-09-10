const auth = {
  namespaced: true,
  state: () => ({
    token: null,
    payload: null
  }),
  getters: {
    isAuthenticated (state) {
      return !!state.token
    },
    getPayload (state) {
      return state.payload
    }
  },
  actions: {
    authenticate (context, token) {
      this.commit('auth/setToken', token)
      localStorage.auth_token = context.state.token
    },
    revoke (context) {
      this.commit('auth/clearToken')
      localStorage.clear()
    }
  },
  mutations: {
    setToken (state, token) {
      token = token.replace('Bearer ', '')
      state.token = token
      let jwtDecode = require('jwt-decode')
      state.payload = jwtDecode(token)
    },
    clearToken (state) {
      state.token = null
      state.payload = null
    }
  }
}

export default auth
