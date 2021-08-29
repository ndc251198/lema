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
        component: () => import("@/views/main/dictionary/Infomation.vue"),
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
        path: "hotel/:id",
        component: () => import("@/views/main/dictionary/Hotel.vue")
      },
      {
        path: "/create-booking",
        name: "CreateBooking",
        component: () => import("@/views/main/dictionary/CreateForm.vue"),
      },
      {
        path: "/hotels",
        name: "Hotels",
        component: () => import("@/views/main/dictionary/Hotels.vue"),
      },
      {
        path: "/services",
        name: "Services",
        component: () => import("@/views/main/dictionary/Services.vue"),
      },
      {
        path: "/partners",
        name: "Partners",
        component: () => import("@/views/main/dictionary/Partners.vue"),
      },
      {
        path: "",
        redirect: "infomation"
      }
    ],
    meta: {
      requireLogin: true
    }
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

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requireLogin) && !localStorage.getItem('token')){
    next({name: 'Login', query: {to: to.path}})
  } else {
    next()
  }
})

export default router;
