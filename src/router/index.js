import { createRouter, createWebHashHistory } from "vue-router";

// 前台
// import Home from "../views/FrontEnd/Home.vue";
import about from "@/views/FrontEnd/AboutView.vue";
import ProductsList from "../views/FrontEnd/ProductsView.vue";
import Cart from "../views/FrontEnd/CartView.vue";

// 後台
import Login from "../views/BackEnd/LoginView.vue";
import Dashboard from "../views/BackEnd/DashboardView.vue";
import Products from "../views/BackEnd/ProductsView.vue";

const routes = [
  // 前端
  {
    path: "/",
    name: "Layout",
    component: () => import("@/views/FrontEnd/LayoutView.vue"),
    children: [
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
        path: "products",
        name: "products",
        component: Products,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
