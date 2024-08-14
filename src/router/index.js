import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import TypographyView from "../views/TypographyView.vue";
import ButtonView from "../views/ButtonView.vue";
import CheckboxView from "../views/CheckboxView.vue";
import RadioButtonView from "../views/RadiobuttonView.vue";
import ProgressView from "../views/ProgressView.vue";
import InputView from "../views/InputView.vue";

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
      path: "/checkbox",
      name: "checkbox",
      component: CheckboxView,
    },
    {
      path: "/radiobutton",
      name: "radiobutton",
      component: RadioButtonView,
    },
    {
      path: "/progress",
      name: "progress",
      component: ProgressView,
    },
    {
      path: "/input",
      name: "input",
      component: InputView,
    },
  ],
});

export default router;
