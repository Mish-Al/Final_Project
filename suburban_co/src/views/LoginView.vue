<template>
  <div class="container" style="height: 80vh; margin-top: 1rem;">
    <div class="row">
      <form class="form" @submit.prevent="login">
        <div class="form-control-wrapper">
          <span class="inline">
            <input
              type="email"
              class="form-control"
              placeholder="email"
              v-model="payload.email"
              required
            />
          </span>
        </div>
        <br>
        <div class="form-control-wrapper">
          <span class="inline">
            <input
              type="password"
              class="form-control"
              placeholder="password"
              minlength="4"
              maxlength="12"
              v-model="payload.user_password"
            />
          </span>
        </div>
        <div class="form-control-wrapper">
          <div class="col">
            <button type="submit" class="btn">
              Log In
              <span
                v-show="spinner"
                class="spinner-border spinner-border-sm"
                role="status"
                aria-hidden="true"
              ></span>
            </button>
          </div>
        </div>
        <br>
        <div class="form-control-wrapper">
          <div class="row">
            <div class="col">
              <router-link class="d-flex justify-content-center text-decoration-none" to="/register"
                >Don't have an account ? Click here to register</router-link
              >
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
// import NewUserComp from "@/components/NewUserComp";
import { useCookies } from "vue3-cookies";
const { cookies } = useCookies();

// import { computed } from 'vue';
export default {
  components: {
  },
  data() {
    return {
      payload: {
        email: "",
        user_password: "",
      },
      message: null,
    };
  },
  computed: {
    user() {
      return this.$store.state.user;
      //  || JSON.parse( cookies.get('GrantedUserAccess'))
    },
    spinner() {
      return this.$store.state.spinner;
    },
  },
  methods: {
    login() {
      this.$store.dispatch("login", this.payload);
    },
    // logout() {
    //   this.$store.dispatch("logout", this.payload)
    // },
  },
  beforeCreate() {
    this.$store.dispatch('fetchUsers')
  },
    mounted() {
    console.log(cookies.get("GrantedUserAccess"));
  }
};
</script>

<style scoped>
.btn{
  background-color: #212529;
  border: 2px ridge #495057;
  color: #E9ECEF;
  margin: 4px;
  width: 4rem;
}
.btn:hover{
  background-color: #CED4DA;
  color: #495057;
  border: 2px ridge #E9ECEF;
}
</style>