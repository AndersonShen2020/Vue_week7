import { createRouter, createWebHashHistory } from "vue-router";

// 前台
// import Home from "../views/FrontEnd/Home.vue";
import Cart from "../views/FrontEnd/Cart.vue";

// 後台
import Login from "../views/BackEnd/Login.vue";
import Dashboard from "../views/BackEnd/Dashboard.vue";
import Products from "../views/BackEnd/Products.vue";

const routes = [
  // 前端
  {
    path: "/",
    name: "Layout",
    component: () => import("@/views/FrontEnd/Layout.vue"),
    children: [
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
