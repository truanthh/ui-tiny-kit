<script setup>
const emit = defineEmits(["update:value"]);

const props = defineProps({
  error: {
    type: Array,
    required: false,
  },
  value: {
    type: String,
    default: "",
  },
  name: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    default: "text",
  },
  placeholder: {
    type: String,
    default: "placeholder",
  },
  label: {
    type: String,
    default: "",
  },
  width: {
    type: String,
    default: "300px",
  },
});

function updateValue() {
  emit("update:value", event.target.value);
}
</script>

<template>
  <div class="form-input" :style="{ width: width }">
    <input
      class="input-text"
      :type
      :name
      :id="name"
      :placeholder
      :value
      @input="updateValue"
    />
    <label :for="name" class="input-label" :style="{ width: width }">{{
      label
    }}</label>
    <div class="form-error" v-for="element of error" :key="element.$uid">
      <div class="form-error__message">{{ element.$message }}</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.form {
  &-input {
    position: relative;
    margin-bottom: 30px;
  }
  &-error {
    background: var(--danger);
    margin-top: 4px;
    border-radius: 7px;
    font-size: 13px;
    color: #fff;
    padding: 5px;
  }
}

.input {
  &-text {
    font-size: 20px;
    width: 100%;
    height: 40px;
    border-radius: 7px;
    padding: 0 10px;
    border: 1px solid var(--primary);
    position: relative;
    &:focus {
      & + .input-label {
        z-index: 1;
        opacity: 1;
        top: -20px;
      }
    }
  }
  &-label {
    display: block;
    position: absolute;
    z-index: -1;
    opacity: 0;
    top: 20px;
    color: var(--primary);
    font-size: 14px;
    font-weight: bold;
  }
}
</style>
