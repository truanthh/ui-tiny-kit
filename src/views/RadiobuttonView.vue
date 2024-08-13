<script setup>
import { ref } from "vue";
import Radiobutton from "@/components/Checkbox/Radiobutton.vue";
const listOfTeams = ref([
  { name: "Manchester City", id: "t1" },
  { name: "Barcelona", id: "t2" },
  { name: "Bayern Munich", id: "t3" },
  { name: "Real Madrid", id: "t4" },
]);

const selectedTeam = ref("teamname");
</script>

<template>
  <h1 class="heading-1">Radiobutton</h1>
  <h2 class="heading-2">Radiobutton Disabled</h2>
  <div class="line">
    <Radiobutton
      name="radiobuttondisabled"
      id="radiobuttondisabled"
      label="Radiobutton disabled"
      value="whatever"
      disabled
    />
  </div>
  <h2 class="heading-2">Radiobutton active</h2>
  <p>{{ selectedTeam }}</p>
  <div class="line line_block">
    <div class="radiobutton__group" v-for="team of listOfTeams" :key="team.id">
      <Radiobutton
        name="team"
        :id="team.id"
        :label="team.name"
        :value="team.name"
        v-model:checkedValue="selectedTeam"
      />
    </div>
  </div>
</template>

<style scoped></style>
