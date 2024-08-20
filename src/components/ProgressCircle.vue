<script setup>
const props = defineProps({
  percent: {
    type: Number,
    required: true,
  },
});

// circumference = 2 * pi * radius
</script>

<template>
  <div class="progress-circle">
    <span class="progress-circle-percent"> {{ percent }}%</span>
    <svg
      width="160"
      height="160"
      viewBox="0 0 160 160"
      class="progress-circle-svg"
    >
      <circle
        r="70"
        cx="80"
        cy="80"
        fill="transparent"
        stroke="#e0e0e0"
        stroke-width="12px"
      ></circle>
      <circle
        class="progress-circle-line"
        r="70"
        cx="80"
        cy="80"
        fill="transparent"
        stroke-width="12px"
        stroke-dasharray="439.6px"
        :style="[
          { 'stroke-dashoffset': `calc(439.6px * ((100 - ${percent})/100))` },
        ]"
      ></circle>
    </svg>
  </div>
</template>

<style lang="scss" scoped>
.progress {
  &-circle {
    position: relative;
    margin-bottom: 20px;
    width: 160px;
    height: 160px;
    &-svg {
      transform: rotate(-90deg);
    }
    &-line {
      // stroke-dasharray: 100;
      transition: 0.3s;
      stroke: var(--primary);
    }
    &-percent {
      position: absolute;
      left: 0;
      width: 100%;
      top: 0;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: bold;
      font-size: 18px;
      color: var(--primary);
    }
  }
}
</style>
