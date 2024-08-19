<script setup>
import Button from "@/components/Button.vue";

const emit = defineEmits(["closeCodeDrawer"]);

const props = defineProps({
  openCodeDrawer: {
    type: Boolean,
    default: false,
  },
  compString: {
    type: String,
    required: false,
  },
});
</script>

<template>
  <div :class="['codedrawer', { codedrawer_isopen: openCodeDrawer }]">
    <pre><code> {{ compString}}</code></pre>
  </div>
</template>

<style lang="scss" scoped>
.codedrawer {
  position: fixed;
  right: 0;
  top: 0;
  height: 100%;
  width: 800px;
  font-size: 18px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.07);
  transform: translateX(calc(100% + 300px));
  background-color: #fafafa;
  padding: 10px;
  overflow-y: auto;
  &_isopen {
    transform: translateX(0px);
  }
}
</style>
