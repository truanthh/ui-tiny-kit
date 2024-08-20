<script setup>
import { ref, computed } from "vue";
import useVuelidate from "@vuelidate/core";
import {
  helpers,
  minLength,
  maxLength,
  numeric,
  email,
  sameAs,
} from "@vuelidate/validators";

import Input from "@/components/Input.vue";
import Button from "@/components/Button.vue";

const nameField = ref("");
const emailField = ref("");
const luckyNumberField = ref("");
const passwordField = ref("");
const confirmPasswordField = ref("");
const stringWithCatField = ref("");

const containsCat = (value) => value.toLowerCase().includes("cat");

const rules = computed(() => ({
  nameField: {
    minLength: helpers.withMessage(
      "Минимальная длина - 3 символа",
      minLength(3),
    ),
  },
  emailField: {
    email: helpers.withMessage("Введите корректный e-mail", email),
  },
  luckyNumberField: {
    maxLength: helpers.withMessage(
      "Максимальная длина - 2 символа",
      maxLength(2),
    ),
    numeric: helpers.withMessage("Введите цифры", numeric),
  },
  confirmPasswordField: {
    samAs: helpers.withMessage(
      "Пароли не совпадают",
      sameAs(passwordField.value),
    ),
  },
  stringWithCatField: {
    containsCat: helpers.withMessage(
      "Строка должна содержать слово 'cat'",
      containsCat,
    ),
  },
}));

const v = useVuelidate(rules, {
  nameField,
  emailField,
  luckyNumberField,
  confirmPasswordField,
  stringWithCatField,
});

const submitForm = () => {
  v.value.$touch();
  if (v.value.$error) return;
  alert("Form submitted!");
};
</script>

<template>
  <h1 class="heading-1">Input</h1>
  <h3 class="heading-3">+ vuelidate</h3>
  <br />
  <form @submit.prevent="submitForm">
    <Input
      name="name"
      label="Your name"
      placeholder="Enter your name"
      v-model:value="v.nameField.$model"
      :error="v.nameField.$errors"
    />
    <Input
      name="email"
      label="Your e-mail"
      placeholder="Enter your e-mail"
      v-model:value="v.emailField.$model"
      :error="v.emailField.$errors"
    />
    <Input
      name="luckynumber"
      label="Your lucky number"
      placeholder="Enter your lucky number"
      v-model:value="v.luckyNumberField.$model"
      :error="v.luckyNumberField.$errors"
    />
    <Input
      name="password"
      label="Your password"
      placeholder="Enter your password"
      v-model:value="passwordField"
    />
    <Input
      name="confirmPassword"
      label="Confirm password"
      placeholder="Confirm password"
      v-model:value="v.confirmPasswordField.$model"
      :error="v.confirmPasswordField.$errors"
    />
    <Input
      name="stringwithcat"
      label="Enter string that contains word 'cat'"
      placeholder="String with word 'cat'"
      v-model:value="v.stringWithCatField.$model"
      :error="v.stringWithCatField.$errors"
    />
    <Button label="Submit" />
  </form>
</template>

<style scoped></style>
