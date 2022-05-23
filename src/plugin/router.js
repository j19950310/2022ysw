import { createRouter, createWebHistory } from "vue-router";
const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("@/views/home/index.vue"),
  },
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
  { path: "/:pathMatch(.*)", component: () => import("@/views/_404.vue") },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
