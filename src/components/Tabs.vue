<script setup>
const emit = defineEmits(["changeTab"]);

const props = defineProps({
  tabs: {
    type: Array,
    required: true,
  },
  selectedTab: {
    type: String,
    required: false,
  },
});

const tabClick = (tabName) => {
  emit("changeTab", tabName);
};
</script>

<template>
  <div class="tab-nav">
    <span
      v-for="tab in tabs"
      :key="tab.name"
      :class="['tab-nav__item', { selectedTab: tab.name === selectedTab }]"
      @click="tabClick(tab.name)"
    >
      {{ tab.label }}</span
    >
  </div>
  <div class="tab-content">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.tab {
  &-nav {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    &__item {
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-right: 10px;
      border-radius: 7px;
      cursor: pointer;
      border: 1px solid var(--primary);
      padding: 0 20px;
      font-size: 15px;
      &:hover {
        background: var(--primary-hover);
        color: #fff;
        transition: 0.2s;
      }
      &.selectedTab {
        background: var(--primary);
        color: #fff;
      }
    }
  }
  &-content {
    padding: 20px;
    border-radius: 7px;
    background: #fff;
    border: 1px solid var(--primary-hover);
  }
}
</style>
