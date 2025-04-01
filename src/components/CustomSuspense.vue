<template>
  <div class="custom-suspense">
    <div v-if="isLoaded" class="content">
      <slot></slot> <!-- Content will be shown once loaded -->
    </div>
    <div v-else class="loading">
      <div class="spinner"></div>
      <p>Loading, please wait...</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const isLoaded = ref(false);

// Simulate an async load with a timeout (like fetching data)
setTimeout(() => {
  isLoaded.value = true;
}, 3000); // 3 seconds delay
</script>

<style scoped>
.custom-suspense {
  font-family: Arial, sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 79vh;
  background-color: #f0f4f8;
}

.content {
  text-align: center;
  font-size: 20px;
}

.loading {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  color: #555;
}

.spinner {
  border: 5px solid #f3f3f3;
  border-top: 5px solid #3498db;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: spin 1s linear infinite;
  margin-bottom: 20px;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>
