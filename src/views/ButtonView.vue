<script setup>
import Button from "@/components/Button.vue";
</script>

<template>
  <h1 class="heading-1">Button</h1>
  <h1 class="heading-2">Disabled</h1>
  <div class="line">
    <Button label="primary" color="primary" :disabled="true" />
    <Button label="second" color="second" :disabled="true" />
  </div>
  <h1 class="heading-2">Normal</h1>
  <div class="line">
    <Button label="primary" color="primary" />
    <Button label="second" color="second" />
    <Button label="success" color="success" />
    <Button label="info" color="info" />
    <Button label="warning" color="warning" />
    <Button label="danger" color="danger" />
  </div>
  <h1 class="heading-2">Rounded</h1>
  <div class="line">
    <Button label="primary" color="primary" :rounded="true" />
    <Button label="second" color="second" :rounded="true" />
    <Button label="success" color="success" :rounded="true" />
    <Button label="info" color="info" :rounded="true" />
    <Button label="warning" color="warning" :rounded="true" />
    <Button label="danger" color="danger" :rounded="true" />
  </div>
  <h1 class="heading-2">Outlined</h1>
  <div class="line">
    <Button label="primary" color="primary" outlined />
    <Button label="second" color="second" outlined />
    <Button label="success" color="success" outlined />
    <Button label="info" color="info" outlined />
    <Button label="warning" color="warning" outlined />
    <Button label="danger" color="danger" outlined />
  </div>
  <h1 class="heading-2">Icons</h1>
  <div class="line">
    <Button
      label="primary"
      color="primary"
      :rounded="true"
      :outlined="true"
      icon="mdi:cards-heart"
    />
    <Button
      label="primary"
      color="second"
      :rounded="true"
      icon="mdi:hand-back-right-outline"
    />
    <Button
      label="primary"
      color="success"
      :rounded="true"
      icon="mdi:book-open-blank-variant-outline"
    />
    <Button label="primary" color="info" :rounded="true" icon="mdi:account" />
    <Button
      label="primary"
      color="warning"
      :rounded="true"
      icon="mdi:white-balance-sunny"
    />
    <Button
      label="primary"
      color="danger"
      :rounded="true"
      icon="mdi:moon-and-stars"
    />
  </div>
</template>

<style scoped></style>
