<script setup>
const props = defineProps({
  maxWidth: {
    type: String,
    default: "400px",
  },
  percent: {
    type: Number,
    required: true,
  },
});
</script>

<template>
  <div class="progress-container" :style="[{ 'max-width': maxWidth }]">
    <span class="progress-percent"> {{ percent }}% </span>
    <div class="progress">
      <div
        class="progress-bar"
        :style="[
          { width: `${percent > 0 ? percent : 0}%`, 'max-width': maxWidth },
        ]"
      ></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.progress {
  height: 10px;
  border-radius: 4px;
  background-color: #e0e0e0;
  &-bar {
    border-radius: 4px;
    background-color: var(--primary);
    height: 100%;
    transition: 0.3s;
  }
  &-percent {
    color: var(--primary);
    display: block;
    text-align: center;

    font-weight: bold;
    font-size: 17px;
    margin-bottom: 10px;
  }
  &-container {
    overflow: hidden;
  }
}
</style>
