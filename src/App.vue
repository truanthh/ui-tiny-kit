<script setup>
import { RouterLink, RouterView, useRoute } from "vue-router";
import { ref, watch } from "vue";

import { Icon } from "@iconify/vue";
import LayoutSidebar from "@/components/Layout/Sidebar.vue";
import LayoutCodeDrawer from "@/components/Layout/CodeDrawer.vue";
import Button from "@/components/Button.vue";

// components raw text data
import CheckboxString from "@/components/Checkbox/Checkbox.vue?raw";
import ButtonString from "@/components/Button.vue?raw";
import TypographyString from "@/views/TypographyView.vue?raw";
import RadioButtonString from "@/components/Checkbox/RadioButton.vue?raw";
import ProgressString from "@/components/ProgressCircle.vue?raw";

const isOpenMenu = ref(true);
const isOpenCodeDrawer = ref(true);

const toggleMenu = () => {
  isOpenMenu.value = !isOpenMenu.value;
};
const toggleCodeDrawer = () => {
  isOpenCodeDrawer.value = !isOpenCodeDrawer.value;
};

const route = useRoute();
const currentPath = ref(route.path);
const compString = ref(null);
const codeText = ref(null);

const componentStrings = {
  "/button": ButtonString,
  "/checkbox": CheckboxString,
  "/typography": TypographyString,
  "/radiobutton": RadioButtonString,
  "/progress": ProgressString,
};

watch(route, (newRoute) => {
  currentPath.value = newRoute.path;
  compString.value = componentStrings[currentPath.value];
});

const copyToClipboard = async () => {
  try {
    await navigator.clipboard.writeText(codeText.value.innerText);
  } catch (error) {
    console.error("Не удалось скопировать текст!");
  }
};
</script>

<template>
  <div class="container">
    <layout-sidebar :openSidebar="isOpenMenu" @close="toggleMenu" />
    <div :class="['content', { content_full: !isOpenMenu }]">
      <RouterView />
    </div>
    <layout-code-drawer
      :openCodeDrawer="isOpenCodeDrawer"
      @close="toggleCodeDrawer"
    />
  </div>
</template>

<style lang="scss">
@import "./styles/global.scss";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialised;
  -moz-osx-font-smoothing: grayscale;
}
.content {
  // width: 100%;
  max-width: 1700px;
  margin-left: calc(300px + 50px);
  // margin-right: 300px;
  padding: 30px;
  transition: 0.2s;
  overflow-y: auto;
  &_full {
    margin-left: 100px;
  }
}
</style>
