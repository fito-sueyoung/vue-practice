class Auth {
  constructor (jwtDec) {
    this.jwtDec = jwtDec
  }

  setToken (token) {
    token = token.replace('Bearer ', '')
    localStorage.auth_token = token
  }

  hasToken () {
    return !!localStorage.auth_token
  }

  getToken () {
    return this.hasToken() ? localStorage.auth_token : null
  }

  getPayload () {
    return this.hasToken() ? this.jwtDec.decode(this.getToken()) : null
  }

  revoke () {
    localStorage.clear()
  }
}

export { Auth as default }
