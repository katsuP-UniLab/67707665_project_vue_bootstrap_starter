import { createRouter, createWebHistory } from "vue-router";

import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import Product_Jewel from "../views/Product_Jewel.vue";
import ProductView from "@/views/ProductView.vue";
import CustomerView from "@/views/CustomerView.vue";

import RegisterView from "@/views/Users/RegisterView.vue";
import LoginView from "@/views/Users/LoginView.vue";
import ProductTableView from "@/views/ProductTableView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    component: AboutView,
  },
  {
    path: "/product",
    name: "product",
    component: ProductView,
  },
  {
    path: "/prod_jewel",
    name: "prod_jewel",
    component: Product_Jewel,
  },
  {
    path: "/prod_table",
    name: "prod_table",
    component: ProductTableView,
  },
  {
    path: "/customer",
    name: "customer",
    component: CustomerView,
  },
  {
    path: "/register",
    name: "register",
    component: RegisterView,
  },
  {
    path: "/login",
    name: "login",
    component: LoginView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
