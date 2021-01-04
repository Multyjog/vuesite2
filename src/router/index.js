import Vue from "vue";
import VueRouter from "vue-router";
import Catalog from "../views/Catalog.vue";
import Cart from "../views/Cart.vue";
import Main from "../views/Main.vue";
import Contacts from "../views/Contacts.vue";
import Testimonials from "../views/Testimonials.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Main",
    component: Main
  },
  {
    path: "/catalog",
    name: "Catalog",
    component: Catalog
  },
  {
    path: "/cart",
    name: "Cart",
    component: Cart
  },
  {
    path: "/contacts",
    name: "Contacts",
    component: Contacts
  },
  {
    path: "/main",
    name: "Main",
    component: Main
  },
  {
    path: "/testimonials",
    name: "Testimonials",
    component: Testimonials
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
