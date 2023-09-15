import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import { useCookies } from 'vue3-cookies'
const { cookies } = useCookies()

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    beforeEnter() {
      if(!cookies.get('GrantedUserAccess')) {
      router.push({name: "login"})
      }
    }
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: "/products",
    name: "products",
    component: () => import("../views/ProductsView.vue"),
    beforeEnter() {
      if(!cookies.get('GrantedUserAccess')) {
      router.push({name: "login"})
      }
    }
  },
  {
    path: "/admin",
    name: "admin",
    component: () => import("../views/AdminView.vue"),
    beforeEnter() {
      if(!cookies.get('GrantedUserAccess')) {
      router.push({name: "login"})
      }
    }
  },
  {
    path: "/profile",
    name: "profile",
    component: () => import("../views/ProfileView.vue"),
    beforeEnter() {
      if(!cookies.get('GrantedUserAccess')) {
      router.push({name: "login"})
      }
    }
  },
  {
    path: "/register",
    name: "register",
    component: () => import("../views/RegisterView.vue"),
    beforeEnter() {
    }
  },
  {
    path: "/cart",
    name: "cart",
    component: () => import("../views/CartView.vue"),
    beforeEnter() {
      if(!cookies.get('GrantedUserAccess')) {
      router.push({name: "login"})
      }
    }
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../views/LoginView.vue"),
    afterEnter() {
      if(!cookies.delete('GrantedUserAccess')) {
      router.push({name: "home"})
      }
    }
  },
  {
    path: "/contact",
    name: "contact",
    component: () => import("../views/ContactView.vue"),
  },
  {
    path: "/upper",
    name: "upper",
    component: () => import("../views/UpperView.vue"),
  },
  {
    path: "/lower",
    name: "lower",
    component: () => import("../views/LowerView.vue"),
  },
  {
    path: "/shoes",
    name: "shoes",
    component: () => import("../views/ShoesView.vue"),
  },
  {
    path: "/single/:id",
    name: "single",
    props: true,
    component: () => import("../views/SingleView.vue"),
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
