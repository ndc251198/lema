import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Main",
    component: () => import("@/views/main/Main.vue"),
    children: [
      {
        path: "infomation",
        component: () => import("@/views/main/dictionary/Infomation.vue")
      },
      {
        path: "dashboard",
        component: () => import("@/views/main/dictionary/Dashboard.vue")
      },
      {
        path: "setting",
        component: () => import("@/views/main/dictionary/Setting.vue")
      },
      {
        path: "statistic",
        component: () => import("@/views/main/dictionary/Statistic.vue")
      },
      {
        path: "accountan",
        component: () => import("@/views/main/dictionary/Accountan.vue")
      },
      {
        path: "",
        redirect: "infomation"
      }
    ],
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("@/views/login/Login.vue"),
  },
  {
    path: "*",
    redirect: '/'
  },
  {
    path: "**",
    name: "NotFound",
    component: () => import("@/views/NotFound.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
