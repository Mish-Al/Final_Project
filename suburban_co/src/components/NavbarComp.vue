<template>
  <div>
    <nav class="navbar">
        <div class="container-fluid">
          <a class="navbar-brand" href="/">
            <img
              src="https://i.postimg.cc/6qWdhgFG/Screenshot-2023-09-04-120606-clipdrop-background-removal.png"
              style="height: 7rem;"
              id="logo"
          /></a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class="offcanvas offcanvas-end"
            tabindex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div class="offcanvas-header">
              <a class="offcanvas-title" id="offcanvasNavbarLabel"
                ><img
                  src="https://i.postimg.cc/6qWdhgFG/Screenshot-2023-09-04-120606-clipdrop-background-removal.png"
                  href="../views/HomeView.vue"
                  alt="logo"
              /></a>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div class="offcanvas-body">
              <ul class="navbar-nav">
                <li class="nav-item" data-bs-dismiss="offcanvas">
                  <router-link class="nav-link" to="/">Home</router-link>
                </li>
                <li class="nav-item" data-bs-dismiss="offcanvas">
                  <router-link class="nav-link" to="/about">About</router-link>
                </li>
               
                <li class="nav-item"  data-bs-dismiss="offcanvas">
                  <router-link class="nav-link" to="/admin"
                 v-show="isAdmin">Admin</router-link
                  >
                </li>
                <li class="nav-item"  data-bs-dismiss="offcanvas">
                  <router-link class="nav-link" to="/products"
                    >Products</router-link
                  >
                </li>
                <li class="nav-item" v-show="isAdmin" data-bs-dismiss="offcanvas">
                  <router-link class="nav-link" to="/profile"
                    >Profile</router-link
                  >
                </li>
                <li class="nav-item" data-bs-dismiss="offcanvas">
                  <router-link class="nav-link" to="/contact"
                    >Contact</router-link
                  >
                </li>
                <li class="nav-item" data-bs-dismiss="offcanvas">
                  <router-link class="nav-link" to="/login"
                    >Log In</router-link
                  >
                </li>
                <li class="nav-item" data-bs-dismiss="offcanvas">
                  <router-link class="nav-link" to="/register"
                    >Register</router-link
                  >
                </li>
                <li class="nav-item" data-bs-dismiss="offcanvas">
                  <router-link class="nav-link" to="/login"
                     @click="logout">Log Out</router-link
                  >
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
  </div>
</template>

<script>
// import { useStore } from 'vuex'
import { useCookies } from 'vue3-cookies'
const { cookies } = useCookies()
    export default {
        computed: {
          user() {
            return this.$store.state.user ||
            cookies.get('GrantedUserAccess')
          },
          result() {
          return this.user?.result;
        },
        isAdmin() {
          return this.result?.user_role?.toLowerCase() === "admin"
        },
        isUser() {
          return this.result?.user_role?.toLowerCase() === "user"
        },
        },
        methods: {
          logout() {
            this.$store.dispatch('logout')
          }
        }
      }
</script>

<style scoped>
.navbar{
  background-color: #DEE2E6;
}
 #offcanvasNavbarLabel img{
    width: 18rem;
    height: 7%;
  }
  .navbar-toggler {
    border: 3px groove #ADB5BD;
  }
  .offcanvas-body {
    background-color: #DEE2E6;
  }
  .offcanvas-header {
    background-color: #DEE2E6;
  }
  img {
    height: 4rem;
  }
  #navbarNav {
    display: flex;
    justify-content: end;
    text-align: center;
  }
  
  .nav-link {
    color: #495057;
    font-weight: 700;
  }
  .nav-link:hover {
    color: #ADB5BD;
  }
  
  li {
    color: #495057;
  }
  </style>