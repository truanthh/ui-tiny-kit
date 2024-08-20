<script setup>
import { ref } from "vue";
import { Icon } from "@iconify/vue";

const emit = defineEmits(["closeSidebar"]);

const props = defineProps({
  openSidebar: {
    type: Boolean,
    default: false,
  },
});

const links = ref([
  { name: "Typography", href: "/typography" },
  { name: "Button", href: "/button" },
  { name: "Checkbox", href: "/checkbox" },
  { name: "Radiobutton", href: "/radiobutton" },
  { name: "Progress", href: "/progress" },
  { name: "Input", href: "/input" },
  { name: "Tabs", href: "/tabs" },
  { name: "Table", href: "/table" },
]);

const closeSidebar = () => {
  // if (event.target !== event.currentTarget) {
  //   return;
  // }
  emit("closeSidebar");
};
</script>

<template>
  <div :class="['sidebar', { sidebar_isopen: openSidebar }]">
    <div class="sidebar__link menu" @click.stop="closeSidebar">
      Menu
      <Icon icon="vaadin:menu" />
    </div>

    <router-link
      class="sidebar__link"
      v-for="link in links"
      :key="link.name"
      :to="link.href"
    >
      {{ link.name }}
    </router-link>

    <a
      class="sidebar__github"
      href="https://github.com/truanthh"
      target="_blank"
    >
      <Icon icon="mdi:github" :style="{ fontSize: '28px' }" />
    </a>
  </div>
</template>

<style lang="scss" scoped>
.sidebar {
  left: 0;
  // top: 0;
  height: 100%;
  position: fixed;
  width: 300px;
  // padding: 20px;
  transition: 0.2s;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.07);
  transform: translateX(-240px);
  font-family: monospace;
  &_isopen {
    transform: translateX(0px);
  }
  &__link {
    display: block;
    color: #595959;
    transition: 0.2s;
    font-size: 19px;
    margin-bottom: 12px;
    padding: 0 20px;
    // border: solid 2px black;
    &:hover {
      // color: var(--gray);
      color: orange;
    }
  }
  &__github {
    // align-self: end;
    position: absolute;
    left: 18px;
    bottom: 18px;
    cursor: pointer;
    color: #333333;
  }
}
.menu {
  // border: 2px solid black;
  padding-top: 15px;
  padding-bottom: 10px;
  margin-bottom: 5px;
  font-weight: bold;
  color: black;
  font-size: 24px;
  cursor: pointer;
  display: flex;
  align-items: center;
  position: relative;
  &:hover {
    color: green;
  }
  &:hover svg {
    font-size: 23px;
    color: green;
  }
  svg {
    margin-left: auto;
    font-size: 22px;
    color: gray;
  }
}
</style>
