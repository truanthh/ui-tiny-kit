<script setup>
import ProgressBar from "@/components/ProgressBar.vue";
import ProgressCircle from "@/components/ProgressCircle.vue";
import Button from "@/components/Button.vue";
import { ref } from "vue";

const percent = ref(25);

const stepSize = 10;

function inc() {
  if (percent.value + stepSize >= 100) {
    percent.value = 100;
  } else {
    percent.value += stepSize;
  }
}
function dec() {
  if (percent.value - stepSize <= 0) {
    percent.value = 0;
  } else {
    percent.value -= stepSize;
  }
}
</script>

<template>
  <h1 class="heading-1">Progress</h1>
  <div class="line line_block">
    <Button
      :label="`-${stepSize}`"
      color="primary"
      rounded
      outlined
      @click="dec"
    />
    <Button
      :label="`+${stepSize}`"
      color="primary"
      rounded
      outlined
      @click="inc"
    />
  </div>

  <h2 class="heading-2">Progress Bar</h2>

  <div class="line line_block">
    <ProgressBar :percent />
  </div>

  <h2 class="heading-2">Progress Circle</h2>

  <div class="line line_block">
    <ProgressCircle :percent />
  </div>
</template>

<style scoped></style>
