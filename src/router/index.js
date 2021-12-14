import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import PromptsIndex from "../views/PromptsIndex.vue";
import PromptsNew from "../views/PromptsNew.vue";
import Signup from "../views/Signup.vue";
import Login from "../views/Login.vue";
import Logout from "../views/Logout.vue";
import Favorites from "../views/FavoritesIndex.vue";
import Test from "../views/test.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/prompts",
    name: "propmts-index",
    component: PromptsIndex,
  },
  {
    path: "/create",
    name: "propmts-create",
    component: PromptsNew,
  },
  {
    path: "/signup",
    name: "signup",
    component: Signup,
  },
  {
    path: "/login",
    name: "login",
    component: Login,
  },
  {
    path: "/logout",
    name: "logout",
    component: Logout,
  },
  {
    path: "/favorites",
    name: "favorites",
    component: Favorites,
  },
  {
    path: "/test",
    name: "test",
    component: Test,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
