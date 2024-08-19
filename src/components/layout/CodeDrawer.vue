<script setup></script>

<template>
  <div class="codedrawer">codedrawer</div>
</template>

<style scoped>
.codedrawer {
  position: fixed;
  right: 0;
  top: 0;
  height: 100%;
  width: 300px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.07);
  transform: translateX(calc(100% + 300px));
  background-color: orange;
}
</style>
