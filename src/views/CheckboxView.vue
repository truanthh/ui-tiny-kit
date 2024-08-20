<script setup>
import { ref } from "vue";
import Checkbox from "@/components/Checkbox/Checkbox.vue";
import CheckboxGroup from "@/components/Checkbox/CheckboxGroup.vue";

const checkboxActive = ref(false);
const checkboxDisabled = ref(true);
const checkboxDisabledChecked = ref(true);
const switchActive = ref(false);

const listOfHeroes = ref([
  { name: "Spider-man", id: "h1" },
  { name: "Batman", id: "h2" },
  { name: "Tor", id: "h3" },
  { name: "Loki", id: "h4" },
]);

const selectedHeroes = ref(["h1", "h2"]);
</script>

<template>
  <h1 class="heading-1">Checkbox</h1>
  <!-- <div>{{ checkboxActive }}</div> -->
  <h2 class="heading-2">Checkbox Active</h2>
  <div class="line">
    <Checkbox
      label="Checkbox active"
      id="checkboxactive"
      name="checkboxactive"
      value="whatever"
      v-model:checked="checkboxActive"
    />
  </div>
  <h2 class="heading-2">Checkbox disabled</h2>
  <div class="line">
    <Checkbox
      label="Checkbox disabled"
      id="checkboxdisabled"
      name="checkboxdisabled"
      value="whatever"
      :disabled="checkboxDisabled"
      v-model:checked="checkboxDisabledChecked"
    />
  </div>
  <h2 class="heading-2">CheckboxGroup</h2>
  <div class="line line_block">
    <p>selected heroes: {{ selectedHeroes }}</p>
    <CheckboxGroup
      name="heroes"
      :options="listOfHeroes"
      v-model:value="selectedHeroes"
    />
  </div>
  <div class="line line_block">
    <p>{{ switchActive }}</p>
    <Checkbox
      label="Switch Active"
      id="switchactive"
      name="switchactive"
      value="nop"
      v-model:checked="switchActive"
      type="switch"
    />
  </div>
</template>

<style lang="scss" scoped></style>
