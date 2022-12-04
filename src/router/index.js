import { createRouter, createWebHistory } from "vue-router";
import ListView from "@/views/ListView.vue";

const routes = [
  {
    path: "/",
    component: ListView,
  },
  {
    path: "/list",
    name: "list",
    component: ListView,
  },
  {
    path: "/detail/:id",
    name: "detail",
    component: () =>
      import(/* webpackChunkName: "detail" */ "@/views/DetailView.vue"),
  },
  {
    path: "/:notFound(.*)",
    component: () => import("@/views/NotFound.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
