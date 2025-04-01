<template>
  <div class="counter-app">
    <h1>Pinia Store Counter</h1>
    <div class="counter-display">
      <p>Current Count: <span>{{ counter.count }}</span></p>
    </div>
    <div class="counter-actions">
      <button @click="counter.increment">Increment</button>
      <button @click="counter.decrement">Decrement</button>
      <button @click="counter.reset">Reset</button>
    </div>
  </div>
</template>

<script setup>
import { useCounterStore } from '@/store/counterStore';

const counter = useCounterStore();
</script>

<style scoped>
.counter-app {
  text-align: center;
  font-family: Arial, sans-serif;
  margin-top: 50px;
}

h1 {
  font-size: 2rem;
  color: #333;
  margin-bottom: 20px;
}

.counter-display p {
  font-size: 1.5rem;
  font-weight: bold;
  color: #333;
}

.counter-display span {
  font-size: 2rem;
  color: #3498db;
}

.counter-actions {
  margin-top: 20px;
}

.counter-actions button {
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 1.1rem;
  border-radius: 5px;
  cursor: pointer;
  margin: 0 10px;
  transition: background-color 0.3s ease;
}

.counter-actions button:hover {
  background-color: #1673ca;
}

.counter-actions button:focus {
  outline: none;
}
</style>
