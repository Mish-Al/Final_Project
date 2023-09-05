import { createStore } from 'vuex'
import axios from 'axios'
import router from '@/router'
const suburbanUrl = "https://suburban-co.onrender.com"

export default createStore({
  state: {
    users: null,
    user: null,
    products: null,
    product: null,
    
  },
  getters: {
  },
  mutations: {
    setUsers(state, users) {
      state.users = users
    },
    setUser(state, users) {
      state.users = users
    },

  },
  actions: {
    async fetchUsers(context) {
      try{
        const {results} = (await axios.get(`${suburbanUrl}user`)).data
        context.commit
      }
    }
    async login(context, payload)
  },
  modules: {
  }
})
