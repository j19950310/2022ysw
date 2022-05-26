import {
  createRouter,
  createWebHistory,
  createWebHashHistory,
} from "vue-router";
const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("@/views/home/index.vue"),
  },
  // {
  //   path: "/dev",
  //   name: "home",
  //   component: () => import("@/views/home/index.vue"),
  // },
  {
    path: "/news",
    name: "news",
    component: () => import("@/views/news.vue"),
  },
  {
    path: "/works",
    name: "works",
    component: () => import("@/views/works.vue"),
  },
  {
    path: "/:pathMatch(.*)",
    component: () => import("@/views/home/index.vue"),
  },
];
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
