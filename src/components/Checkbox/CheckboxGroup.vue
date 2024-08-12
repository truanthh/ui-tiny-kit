<script setup>
import { ref } from "vue";
import Checkbox from "@/components/Checkbox/Checkbox.vue";

const emit = defineEmits(["update:value"]);

const props = defineProps({
  value: {
    type: Array,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  options: {
    type: Array,
    required: true,
    validator: (value) => {
      const hasNameKey = value.every((option) =>
        Object.keys(option).includes("name"),
      );
      const hasIdKey = value.every((option) =>
        Object.keys(option).includes("id"),
      );
      return hasNameKey && hasIdKey;
    },
  },
});

function check(params) {
  let updateValue = [...props.value];
  if (params.checked) {
    updateValue.push(params.optionId);
  } else {
    updateValue.splice(updateValue.indexOf(params.optionId), 1);
  }
  emit("update:value", updateValue);
}
</script>

<template>
  <div v-for="option in options" :key="option.id">
    <Checkbox
      :name="name"
      :label="option.name"
      :id="option.id"
      :value="option.value"
      :checked="value.includes(option.id)"
      @blabla="check"
      group
    />
  </div>
</template>

<style scoped></style>
