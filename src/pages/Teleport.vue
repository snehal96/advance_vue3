<template>
  <div class="app-container">
    <h1>Vue 3 Teleport Demo</h1>
    <TeleportDemo />
  </div>
</template>

<script setup>
import TeleportDemo from '@/components/TeleportModal.vue';
</script>

<style scoped>
.app-container {
  text-align: center;
  padding: 20px;
}

h1 {
  font-size: 2rem;
  margin-bottom: 30px;
}
</style>
