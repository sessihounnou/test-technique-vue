import Vue from 'vue'
import Vuex from 'vuex'
import animals from './modules/animals'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    animals
  },
  strict: debug
})