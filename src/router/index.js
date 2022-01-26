import { createRouter, createWebHashHistory } from "vue-router";

// 前台
// import Home from "../views/FrontEnd/Home.vue";
import Cart from "../views/FrontEnd/Cart.vue";

// 後台
import Login from "../views/BackEnd/Login.vue";
import Dashboard from "../views/BackEnd/Dashboard.vue";
// import Products from "../views/BackEnd/Dashboard/Products.vue";

const routes = [
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
  {
    path: "/Login",
    name: "Login",
    component: Login,
  },
  {
    path: "/Dashboard",
    name: "Dashboard",
    component: Dashboard,
    // children: [
    //   {
    //     name: "products",
    //     component: { backboard: Products },
    //   },
    // ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
