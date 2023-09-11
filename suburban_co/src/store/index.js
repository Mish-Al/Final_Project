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
    upper: null,
    lower: null,
    shoes: null,
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

    setUpper(state, upper) {
      state.upper = upper;
    },
    setLower(state, lower) {
      state.lower = lower;
    },
    setShoes(state, shoes) {
      state.shoes = shoes;
    },
    setVans(state, vans) {
      state.vans = vans;
    },
    setNike(state, nike) {
      state.nike = nike;
    },
    setBalance(state, balance) {
      state.balance = balance;
    },
    setlevi(state, levi) {
      state.levi = levi;
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
      context.commit("setUser")
      cookies.remove("GrantedUserAccess")
      router.push({ name: "login" })
    },
    
    deleteUser( context, payload ) {
      axios.delete(`${ suburbanUrl }/user/${ user_id }`)
      .then((res) => {
        console.log(res);
        this.dispatch(fetchUsers);
      })
      .catch(( error ) => {
        console.error(error);
      })
    },

    async addProduct(context) {
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

    // <==== Product Actions ====>
    async fetchProducts(context) {
      try {
        const {data} = await axios.get(`${suburbanUrl}/products`);
        context.commit("setProducts", data.results)
        console.log(data.result)
      } catch (e) {
        console.log(e);
      }
    },
    async fetchImages(context) {
      try {
        const {data} = await axios.get(`${suburbanUrl}/images`);
        context.commit("setImages", data.results)
        console.log(data.result)
      } catch (e) {
        console.log(e);
      }
    },

    async fetchProduct(context, product_id) {
      try {
        const data = await axios.get(`${suburbanUrl}/products/${product_id}`);
        context.commit('setProduct', data.results)

      } catch (e) {
        console.log(e);
      }
    },
    deleteProduct(product_id) {
      axios.delete(`${suburbanUrl}/product/${product_id}`)
      .then((res) => {
        console.log(res);
        this.dispatch('fetchhProducts')
      })
      .catch((error) => {
        console.log(error);
      })
    },
    // <==== Category Actions ====>
    async fetchUpper(context) {
      try {
        const {data} = await axios.get(`${suburbanUrl}/upper`);
        context.commit('setUpper', data.results)
      } catch (e) {
        console.log(e);
      }
    },
    async fetchLower(context) {
      try {
        const {data} = await axios.get(`${suburbanUrl}/lower`);
        context.commit('setLower', data.results)
      } catch (e) {
      console.log(e);
      }
    },
    async fetchShoes(context) {
      try {
        const {data} = await axios.get(`${suburbanUrl}/shoes`);
        context.commit('setShoes', data.results)
      } catch (e) {
        console.log(e);
      }
    },
    async fetchVans(context) {
      try {
        const data = await axios.get(`${suburbanUrl}/vans`);
        context.commit('setVans', data.results)

      } catch (e) {
        console.log(e);
      }
    },
    async fetchNike(context) {
      try {
        const data = await axios.get(`${suburbanUrl}/nike`);
        context.commit('setNike', data.results)

      } catch (e) {
        console.log(e);
      }
    },
    async fetchBalance(context) {
      try {
        const data = await axios.get(`${suburbanUrl}/balance`);
        context.commit('setBalance', data.results)

      } catch (e) {
        console.log(e);
      }
    },
    async fetchLevi(context) {
      try {
        const data = await axios.get(`${suburbanUrl}/levi`);
        context.commit('setLevi', data.results)

      } catch (e) {
        console.log(e);
      }
    },
  },
  modules: {},
});
