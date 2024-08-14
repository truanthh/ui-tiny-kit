<script setup>
import { ref, computed } from "vue";
import useVuelidate from "@vuelidate/core";
import { helpers, minLength } from "@vuelidate/validators";

import Input from "@/components/Input.vue";

const nameField = ref("");

const rules = computed(() => ({
  nameField: {
    minLength: helpers.withMessage(
      "Минимальная длина - 3 символа",
      minLength(3),
    ),
  },
}));

const v = useVuelidate(rules, { nameField });
</script>

<template>
  <h1 class="heading-1">Input</h1>
  <br />
  <div class="line line_block">
    <Input
      name="bla"
      label="bla"
      placeholder="bblablaba"
      v-model:value="v.nameField.$model"
      :error="v.nameField.$errors"
    />
  </div>
  <!-- <div class="line line_block"> -->
  <!--   {{ v }} -->
  <!-- </div> -->
</template>

<style scoped></style>
