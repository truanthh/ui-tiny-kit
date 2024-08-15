<script setup>
import { ref } from "vue";

import Tabs from "@/components/Tabs.vue";

const tabs = [
  { name: "About", label: "О проекте" },
  { name: "Vue", label: "Про Vue" },
  { name: "Javascript", label: "Про Javascript" },
];

const selectedTab = ref("About");

const changeTab = (tabName) => {
  selectedTab.value = tabName;
  console.log(`changing selectedtab to ${tabName}`);
};
</script>

<template>
  <h1 class="heading-1">Tabs</h1>
  <Tabs :tabs :selectedTab="selectedTab" @changeTab="changeTab">
    <div v-if="selectedTab === 'About'">
      This project was made by me mostly for learning making of the UI
      components, and grasping component interaction basics.
    </div>
    <div v-if="selectedTab === 'Vue'">
      I really like Vue. I think it looks clean and usage is easy and intuitive.
    </div>
    <div v-if="selectedTab === 'Javascript'">
      I started learning Javascript 3 months ago. Though i'm not closely
      familiar with any languages aside from C#, i like it so far.
    </div>
  </Tabs>
</template>

<style scoped></style>
