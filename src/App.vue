<script setup>
import { RouterLink, RouterView } from "vue-router";
import LayoutSidebar from "@/components/Layout/Sidebar.vue";
</script>

<template>
  <div class="container">
    <LayoutSidebar />
    <div class="content">
      <RouterView />
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

.content {
  max-width: 1400px;
  margin-left: 250px;
  padding: 30px;
  transition: 0.2s;
  &_full {
    margin-left: 0;
  }
}
</style>
