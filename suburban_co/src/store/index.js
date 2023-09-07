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

    async fetchUser(context, user_id) {
      try {
        const { results } = (await axios.get(`${suburbanUrl}/user/${user_id}`))
          .data;
        context.commit("setUser", results);
      } catch (e) {
        sweet({
          title: "Error",
          text: "Oops, an error occured",
          icon: "error",
          timer: 3000,
        });
      }
    },

    async register(context, payload) {
      try {
        const { msg } = (await axios.post(`${suburbanUrl}/register`, payload))
          .data;
        if (msg) {
          sweet({
            title: "Registration",
            text: msg,
            icon: "success",
            timer: 3000,
          });

          //explain line  below
          context.dispatch("fetchUsers");
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
    async logout(context) {
      try {
        // Make a request to your server's logout endpoint
        await axios.get(`${suburbanUrl}/logout`);
        
        // Clear the local user data and token
        context.commit("setUser", null); // Clear user data from Vuex store
        cookies.remove("GrantedUserAccess"); // Clear the cookie
        
        // Notify the user and redirect to the login page
        sweet({
          title: "Logged Out",
          text: "You have been successfully logged out.",
          icon: "success",
          timer: 3000,
        });
    
        // Redirect the user to the login page
        router.push({ name: "login" });
      } catch (e) {
        // Handle any errors that occur during the logout process
        console.error("Logout error:", e);
        sweet({
          title: "Error",
          text: "An error occurred during logout.",
          icon: "error",
          timer: 3000,
        });
      }
    },
    
    deleteUser(context, payload) {

    },

    // <==== Product Actions ====>
    async fetchProducts(context) {
      try {
        const data = await axios.get(`${suburbanUrl}products`);
      } catch (e) {
        context.commit(console.log(e));
      }
    },

    async fetchProduct(context, product_id) {
      try {
        const data = await axios.get(`${suburbanUrl}products/${product_id}`);
      } catch (e) {
        context.commit(console.log(e));
      }
    },
  },
  modules: {},
});
