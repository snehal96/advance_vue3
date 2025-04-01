<template>
  <div id="piniaApp">
    <CounterApp />
  </div>
</template>

<script setup>
import CounterApp from '@/components/CounterComponent.vue';
</script>

<style scoped>
#piniaApp {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90vh;
}
</style>
