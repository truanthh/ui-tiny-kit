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
import RadiobuttonString from "@/components/Checkbox/Radiobutton.vue?raw";
import ProgressString from "@/components/ProgressCircle.vue?raw";
import InputString from "@/components/Input.vue?raw";
import TabsString from "@/components/Tabs.vue?raw";
import TableString from "@/components/Table/BaseTable.vue?raw";

const isOpenMenu = ref(true);
const isOpenCodeDrawer = ref(false);

const toggleMenu = () => {
  isOpenMenu.value = !isOpenMenu.value;
};
const toggleCodeDrawer = () => {
  isOpenCodeDrawer.value = !isOpenCodeDrawer.value;
};

const route = useRoute();
const currentPath = ref(route.path);
const compString = ref(null);

const componentStrings = {
  "/button": ButtonString,
  "/checkbox": CheckboxString,
  "/typography": TypographyString,
  "/radiobutton": RadiobuttonString,
  "/progress": ProgressString,
  "/input": InputString,
  "/tabs": TabsString,
  "/table": TableString,
};

watch(route, (newRoute) => {
  currentPath.value = newRoute.path;
  compString.value = componentStrings[currentPath.value];
});
</script>

<template>
  <div class="container">
    <layout-sidebar
      :openSidebar="isOpenMenu"
      @closeSidebar="toggleMenu"
      :currentPage="currentPath"
    />
    <div :class="['content', { content_full: !isOpenMenu }]">
      <Button
        v-if="currentPath !== '/home'"
        outlined
        color="gray"
        icon="solar:document-outline"
        @click="toggleCodeDrawer"
      />
      <RouterView />
    </div>
    <layout-code-drawer
      :openCodeDrawer="isOpenCodeDrawer"
      :compString
      @closeCodeDrawer="toggleCodeDrawer"
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
