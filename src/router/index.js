import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/log-in",
      name: "LogIn",
      component: () => import("../components/tsai/LogIn.vue"),
    },
    {
      path: "/signup",
      name: "Signup",
      component: () => import("../components/tsai/Signup.vue"),
    },
    {
      path: "/manager",
      name: "Manager",
      component: () => import("../components/tsai/Manager.vue"),
    },
    {
      path: "/set-info",
      name: "SetInfo",
      component: () => import("../components/tsai/SetInfo.vue"),
    },
    {
      path: "/original-info",
      name: "OriginalInfo",
      component: () => import("../components/tsai/OriginalInfo.vue"),
      children: {},
    },
    {
      path: "/personInfo",
      name: "personInfo",
      component: () => import("../components/tsai/personInfo.vue"),
    },
    {
      path: "/seller",
      name: "seller",
      component: () => import("../views/Tung/seller.vue"),
    },
    {
      path: "/buyer",
      name: "buyer",
      component: () => import("../views/Tung/buyer.vue"),
    },
    {
      path: "/vitae",
      name: "vitae",
      component: () => import("../views/Tung/vitae.vue"),
      chlidren: [
        {
          path: "mapN",
          name: "mapN",
          component: () => import("../components/Tung/mapN/mapN.vue"),
        },
        {
          path: "mapS",
          name: "mapS",
          component: () => import("../components/Tung/mapS/mapS.vue"),
        },
        {
          path: "mapE",
          name: "mapE",
          component: () => import("../components/Tung/mapE/mapE.vue"),
        },
        {
          path: "mapW",
          name: "mapW",
          component: () => import("../components/Tung/mapW/mapW.vue"),
        },
      ],
    },
    {
      path: "/MapView",
      name: "MapView",
      component: () => import("../views/shan/map.vue"),
    },
    {
      path: "/CheckOut",
      name: "Checkout",
      component: () => import("../views/shan/Checkout.vue"),
    },
  ],
});

export default router;
