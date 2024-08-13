<script setup>
import { RouterLink, RouterView, useRoute } from "vue-router";
import { ref, watch } from "vue";

import { Icon } from "@Iconify/vue";
import LayoutSidebar from "@/components/Layout/Sidebar.vue";
import Button from "@/components/Button.vue";

// components raw text data
import CheckboxString from "@/components/Checkbox/Checkbox.vue?raw";
import ButtonString from "@/components/Button.vue?raw";
import TypographyString from "@/views/TypographyView.vue?raw";

const route = useRoute();
const currentPath = ref(route.path);
const compString = ref(null);

const componentStrings = {
  "/button": ButtonString,
  "/checkbox": CheckboxString,
  "/typography": TypographyString,
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
    <LayoutSidebar />
    <div class="content">
      <Button
        class="copy"
        label="primary"
        color="primary"
        :rounded="true"
        :outlined="true"
        icon="ph:copy"
        @click="copyToClipboard"
      />
      <RouterView />
    </div>
    <div class="code" ref="codeText">
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
  position: absolute;
  top: 10px;
  right: 60px;
  // margin-right: 75px;
  margin-top: 45px;
}
.container {
  display: grid;
  grid-template-columns: 1.3fr 1fr;
  height: 100vh;
}
.content {
  position: relative;
  max-width: 1400px;
  margin-left: 250px;
  padding: 30px;
  transition: 0.2s;
  overflow-y: auto;
  &_full {
    margin-left: 0;
  }
}
.code {
  height: 100%;
  width: 100%;
  padding: 10px;
  overflow-y: auto;
  background-color: #f5f5f5;
  border-left: solid 2px black;
}
</style>
