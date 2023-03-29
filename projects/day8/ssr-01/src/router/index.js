import { createRouter, createWebHistory } from "vue-router";

const routes = [
  // {
  //   path: "/",
  //   name: "App",
  //   component: import("../App.vue"),
  // },

  {
    path: "/a",
    name: "A",
    component: () => import("../pages/a.vue"),
  },
  {
    path: "/b",
    name: "B",
    component: () => import("../pages/b.vue"),
  },
  {
    path: "/c",
    name: "C",
    component: () => import("../pages/c.vue"),
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(),
});

export default router;
