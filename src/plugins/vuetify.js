import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify)

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: '#31C29C',
        secondary: '#b0bec5',
        accent: '#31C29C',
        error: '#b71c1c'
      }
    }
  }
})
