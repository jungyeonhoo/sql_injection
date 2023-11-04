// Composables
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: () => import("@/layouts/default/Default.vue"),
    children: [
      {
        path: "",
        name: "Home",
        component: () =>
          import(/* webpackChunkName: "home" */ "@/views/Home.vue"),
      },
      {
        path: "/signup",
        name: "signup",
        component: () =>
          import(/* webpackChunkName: "home" */ "@/components/SignUp.vue"),
      },
      {
        path: "/userpage",
        name: "userpage",
        component: () =>
          import(/* webpackChunkName: "home" */ "@/views/UserPage.vue"),
      },
      {
        path: "/admin",
        name: "admin",
        component: () =>
          import(/* webpackChunkName: "home" */ "@/views/AdminPage.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
