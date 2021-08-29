import Vue from 'vue'
import Vuex from 'vuex'
import HotelsModule from './module/hotels'
import HotelModule from './module/hotel'
import ServiceModule from './module/services'
import PartnerModule from './module/partners'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isAuthenticated: false,
    token : '',
    hotels: []
  },
  mutations: {
    initializeStore(state) {
      if (localStorage.getItem('token')) {
        state.token = localStorage.getItem('token') ?? ''
        state.isAuthenticated = true
      } else {
        state.token = ''
        state.isAuthenticated = false
      }
    },
    setToken(state, token) {
      state.token = token
      state.isAuthenticated = true
    },
    removeToken(state) {
      state.token = ''
      state.isAuthenticated = false
    },
  },
  getters: {
  },
  actions: {
  },
  modules: {
    HotelsModule,
    HotelModule,
    ServiceModule,
    PartnerModule
  }
})
