<template>
  <div class="tab-content">
    <h2>Tab 3</h2>
    <p>Counter: {{ count }}</p>
    <button @click="increment">Increment Counter</button>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const count = ref(0);

const increment = () => {
  count.value++;
};
</script>

<style scoped>
.tab-content {
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
}

button:hover {
  background-color: #1673ca;
}
</style>
