<template>
  <div class="parent-container">
    <h1>Vue 3 Custom Suspense Example</h1>
    <CustomSuspense>
      <AsyncComponent />
    </CustomSuspense>
  </div>
</template>

<script setup>
import { defineAsyncComponent } from 'vue';
import CustomSuspense from '@/components/CustomSuspense.vue';

// Define async component
const AsyncComponent = defineAsyncComponent(() => import('@/components/AsyncComponent.vue'));
</script>

<style scoped>
.parent-container {
  text-align: center;
  padding: 20px;
}

h1 {
  font-size: 2rem;
  margin-bottom: 20px;
}
</style>
