<script setup>
import { ref } from "vue";

const links = ref([
  { name: "Typography", href: "/typography" },
  { name: "Button", href: "/button" },
  { name: "Checkbox", href: "/checkbox" },
]);
</script>

<template>
  <div class="sidebar">
    <router-link to="/home" class="sidebar__link home">
      <b>Home </b></router-link
    >
    <router-link
      class="sidebar__link"
      v-for="link in links"
      :key="link.name"
      :to="link.href"
    >
      {{ link.name }}
    </router-link>
  </div>
</template>

<style lang="scss" scoped>
.sidebar {
  left: 0;
  top: 0;
  height: 100%;
  position: fixed;
  width: 250px;
  padding: 20px;
  transition: 0.2s;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.07);
  &__link {
    display: block;
    transition: 0.2s;
    font-weight: bold;
    margin-bottom: 10px;
    padding: 2px 6px 2px;
    &:hover {
      color: black;
    }
  }
}
.home {
  color: black;
  font-size: 22px;
  border-bottom: solid 2px black;
}
</style>
