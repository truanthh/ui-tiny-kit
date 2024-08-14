<script setup>
import { RouterLink, RouterView, useRoute } from "vue-router";
import { ref, watch } from "vue";

import { Icon } from "@iconify/vue";
import LayoutSidebar from "@/components/Layout/Sidebar.vue";
import Button from "@/components/Button.vue";

// components raw text data
import CheckboxString from "@/components/Checkbox/Checkbox.vue?raw";
import ButtonString from "@/components/Button.vue?raw";
import TypographyString from "@/views/TypographyView.vue?raw";
import RadioButtonString from "@/components/Checkbox/RadioButton.vue?raw";
import ProgressString from "@/components/ProgressCircle.vue?raw";

const isOpenMenu = ref(true);

const togglMenu = () => {
  isOpenMenu.value = !isOpenMenu.value;
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
  <div :class="['container', { container__sidebarclosed: !isOpenMenu }]">
    <layout-sidebar :openSidebar="isOpenMenu" @close="togglMenu" />
    <div class="content">
      <RouterView />
    </div>
    <div class="code" ref="codeText" v-if="currentPath !== '/home'">
      <Button
        v-if="currentPath !== '/home'"
        class="copy"
        label="primary"
        color="gray"
        :rounded="true"
        :outlined="true"
        icon="ph:copy"
        @click="copyToClipboard"
      />
      <pre> <code> {{ compString}} </code> </pre>
    </div>
  </div>
</template>

<style lang="scss">
@import "./styles/global.scss";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialised;
  -moz-osx-font-smoothing: grayscale;
}
.copy {
}
.container {
  display: grid;
  grid-template-columns: auto 1.3fr 1.2fr;
  height: 100vh;
  &__sidebarclosed {
    grid-template-columns: 60px auto minmax(25%, 50%);
  }
}
.content {
  max-width: 1400px;
  margin-left: 50px;
  padding: 30px;
  transition: 0.2s;
  overflow-y: auto;
}
.code {
  height: 100%;
  width: 100%;
  padding: 10px;
  overflow-y: auto;
  background-color: #f6f6f6;
  border-left: solid 2px black;
}
</style>
