import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import TypographyView from "../views/TypographyView.vue";
import ButtonView from "../views/ButtonView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/home",
      alias: ["/"],
      name: "home",
      component: HomeView,
    },
    {
      path: "/typography",
      name: "typography",
      component: TypographyView,
    },
    {
      path: "/button",
      name: "button",
      component: ButtonView,
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },
  ],
});

export default router;
