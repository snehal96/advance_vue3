<template>
  <div class="app-container">
    <h1>Vue 3 KeepAlive Example</h1>
    <h2>Selected Tab - {{ currentTab }}</h2>
    <br/>
    <div class="tabs">
      <button @click="currentTab = 'tab1'">Tab 1</button>
      <button @click="currentTab = 'tab2'">Tab 2</button>
      <button @click="currentTab = 'tab3'">Tab 3</button>
    </div>

    <KeepAlive>
      <component :is="components[currentTab]" />
    </KeepAlive>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Tab1 from '@/components/KeepAliveComponent1.vue';
import Tab2 from '@/components/KeepAliveComponent2.vue';
import Tab3 from '@/components/KeepAliveComponent3.vue';

const currentTab = ref('tab1');

// Dynamically load the component based on the current tab
const components = {
  tab1: Tab1,
  tab2: Tab2,
  tab3: Tab3,
};
</script>

<style scoped>
.app-container {
  text-align: center;
  margin-top: 50px;
}

h1 {
  font-size: 2rem;
  color: #333;
  margin-bottom: 30px;
}

.tabs {
  margin-bottom: 30px;
}

.tabs button {
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 1rem;
  border-radius: 5px;
  cursor: pointer;
  margin: 0 10px;
  transition: background-color 0.3s ease;
}

.tabs button:hover {
  background-color: #1673ca;
}

.tabs button:focus {
  outline: none;
}
</style>
