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
    categories: [],
    images: null,
    brands: null,
    sizes: null,
    payment_method: null,
    reviews: null
  },
  getters: {
    getCategoryById: (state) => (category_id) => {
      return state.categories.find((category) => category.category_id === catefory)
    }
  },
  mutations: {
    setUsers(state, users) {
      state.users = users
    },
    setUser(state, user) {
      state.users = user
    },
    setProducts(state, products) {
      state.products = products
    },
    setProduct(state, product) {
      state.products = product
    },
    setCategories(state, categories) {
      state.categories = categories
    }
 
  },
  actions: {

    // <==== User Actions ====>
    async fetchUsers(context) {
      try{
        const {results, msg} = (await axios.get(`${suburbanUrl}users`)).data
        // if(results) {
        context.commit("setUsers", data.results)
      // }else {
      //   sweet({
      //       title: 'Error',
      //       text: msg,
      //       icon: "error",
      //       timer: 3000
      //   })
      // }
      } catch (e) {
        context.commit("setMsg", "There was an error");
      }
    },


    // <==== Product Actions ====>
    async fetchProducts(context) {
      try {
        const data = await axios.get(`${suburbanUrl}products`);
      } catch (e) {
        alert(e.message);
      }
    },

    async fetchProduct(context, product_id) {
      try {
        const data = await axios.get(`${suburbanUrl}products/${product_id}`);
      } catch (e) {
        alert(e.message);
      }
    },

  
    // async addProduct(context, )
    // // async login(context, payload)
  },
  modules: {
  }
})
