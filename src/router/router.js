import { createRouter, createWebHistory } from "vue-router";
import Todo from "@/pages/Todo";
import Posts from "@/pages/Posts";

const routes = [
  {
    path: "/",
    component: Todo,
  },
  {
    path: "/posts",
    component: Posts,
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(process.env.BASE_URL),
});

export default router;
