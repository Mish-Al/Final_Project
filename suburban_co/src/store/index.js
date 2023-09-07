import { createStore } from "vuex";
import axios from "axios";
import sweet from "sweetalert";
import router from "@/router";
import { useCookies } from "vue3-cookies";
import authUser from "@/services/AuthenticateUser";
const suburbanUrl = "https://suburban-co.onrender.com";
const { cookies } = useCookies();

export default createStore({
  state: {
    users: null,
    user: null,
    products: null,
    product: null,
    categories: null,
    images: null,
    brands: null,
    sizes: null,
    size: null,
    payment_method: null,
    reviews: null,
    spinner: null,
    token: null,
    msg: null,
  },
  getters: {
    // getCategoryById: (state) => (category_id) => {
    //   return state.categories.find((category) => category.category_id === category)
    // }
  },
  mutations: {
    setUsers(state, users) {
      state.users = users;
    },
    setUser(state, user) {
      state.user = user;
    },

    setProducts(state, products) {
      state.products = products;
    },
    setProduct(state, product) {
      state.product = product;
    },

    setCategories(state, categories) {
      state.categories = categories;
    },
    setImages(state, images) {
      state.images = images;
    },
    setBrands(state, brands) {
      state.brands = brands;
    },
    setSizes(state, sizes) {
      state.sizes = sizes;
    },
    setSize(state, size) {
      state.size = size;
    },
    setPayment(state, payment_method) {
      state.payment_method = payment_method;
    },
    setSpinner(state, value) {
      state.spinner = value;
    },
  },
  actions: {
    // <==== User Actions ====>
    async fetchUsers(context) {
      try {
        const { results } = (await axios.get(`${suburbanUrl}/users`)).data;
        context.commit("setUsers", results);
      } catch (e) {
        sweet({
          title: "Error",
          text: "Oops, an error occured",
          icon: "error",
          timer: 3000,
        });
      }
    },
    // async addUser(context, payload) {
    //   try{
    //     const { msg } = (await axios.post(`${suburbanUrl}/user/register`, payload)).data
    //     if(msg) {
    //       sweet({
    //         title: "Registration",
    //         text: msg,
    //         icon: "success",
    //         timer: 3000
    //       })

    //       //explain line 95
    //       context.dispatch('fetchUsers')
    //       router.push({name: 'login'})
    //     }else {
    //       sweet({
    //         title: "Error",
    //         text: "Oops, an error occured",
    //         icon: "error",
    //         timer: 3000
    //       })
    //     }
    //   }
    // }
    // async fetchUsers(context) {
    //   try{
    //     const {results, msg} = (await axios.get(`${suburbanUrl}users`)).data
    //     // if(results) {
    //     context.commit("setUsers", data.results)
    //   // }else {
    //   //   sweet({
    //   //       title: 'Error',
    //   //       text: msg,
    //   //       icon: "error",
    //   //       timer: 3000
    //   //   })
    //   // }
    //   } catch (e) {
    //     context.commit("setMsg", "There was an error");
    //   }
    // },

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

    async login(context, payload) {
      try {
        const { msg, token, result } = (
          await axios.post(`${suburbanUrl}/login`, payload)
        ).data;
        if (result) {
          context.commit("setUser", { result, msg });
          cookies.set("GrantedUserAccess", { token, msg, result });
          authUser.applyToken(token);
          sweet({
            title: msg,
            text: `Welcome Back, ${result?.first_name}
              ${result?.last_name}`,
            icon: "success",
            timer: 3000,
          });
          router.push({ name: "home" });
        } else {
          sweet({
            title: "Error",
            text: "Oops, an error occured",
            icon: "error",
            timer: 3000,
          });
        }
      } catch (e) {
        context.commit(console.log(e));
      }
    },

    // async addProduct(context, )
    // // async login(context, payload)
  },
  modules: {},
});
