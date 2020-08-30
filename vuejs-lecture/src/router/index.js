import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Addresses from "../views/Addresses";
import AddressForm from "../views/AddressFrom.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/addresses",
    name: "addresses",
    component: Addresses,
  },
  {
    // ?をつけることでオプション扱いになる
    path: "/address/:address_id?/edit",
    name: "address_edit",
    component: AddressForm,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
