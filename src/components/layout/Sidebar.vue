<script setup>
import { ref } from "vue";

const links = ref([
  { name: "Typography", href: "/typography" },
  { name: "Button", href: "/button" },
]);
</script>

<template>
  <div class="sidebar">
    <router-link to="/home" class="sidebar__link"> <b>Home </b></router-link>
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
  height: 100%;
  background: #fff;
  position: fixed;
  width: 250px;
  padding: 20px;
  // transition: 0.1s;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.07);
  transform: translateX(0px);
  &__link {
    display: block;
    border-radius: 12px;
    padding: 10px;
    border: 2px solid #fff;
    // transition: 0.1s;
    font-weight: bold;
    margin-bottom: 10px;
    &:hover {
      border-color: var(--primary);
    }
    b {
      font-family: cursive;
      font-size: 20px;
      color: black;
    }
  }
}
</style>
