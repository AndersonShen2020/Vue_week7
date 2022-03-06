import { createRouter, createWebHashHistory } from "vue-router";

// 前台
import HomeView from "../views/FrontEnd/HomeView.vue";
import about from "@/views/FrontEnd/AboutView.vue";
import ProductsList from "../views/FrontEnd/ProductsView.vue";
import Cart from "../views/FrontEnd/CartView.vue";

// 後台
import Login from "../views/BackEnd/LoginView.vue";
import BackEndHomeView from "../views/BackEnd/BackEndHomeView.vue";
import Dashboard from "../views/BackEnd/DashboardView.vue";
import Products from "../views/BackEnd/ProductsView.vue";
import Coupons from "../views/BackEnd/CouponsView.vue";

const routes = [
  // 前端
  {
    path: "/",
    name: "Layout",
    component: () => import("@/views/FrontEnd/LayoutView.vue"),
    children: [
      {
        path: "",
        name: "home",
        component: HomeView,
      },
      {
        path: "/about",
        name: "about",
        component: about,
      },
      {
        path: "/Products",
        name: "Products",
        component: ProductsList,
      },
      {
        path: "/Product/:id",
        name: "Product",
        component: () => import("@/views/FrontEnd/ProductView.vue"),
      },
      {
        path: "/Cart",
        name: "Cart",
        component: Cart,
      },
    ],
  },
  // 登入
  {
    path: "/Login",
    name: "Login",
    component: Login,
  },
  // 後台
  {
    path: "/admin",
    name: "Dashboard",
    component: Dashboard,
    children: [
      {
        path: "",
        name: "BackEndHome",
        component: BackEndHomeView,
      },
      {
        path: "products",
        name: "products",
        component: Products,
      },
      {
        path: "Coupons",
        name: "Coupons",
        component: Coupons,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
