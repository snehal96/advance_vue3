<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()
</script>

<template>
  <header class="header">
    <div class="header-content">
      <h1 class="title">Advanced Vue 3 Topics</h1>
      <router-link to="/" class="home-link">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
          <polyline points="9 22 9 12 15 12 15 22"></polyline>
        </svg>
      </router-link>
    </div>
  </header>
</template>

<style scoped>
.header {
  background-color: #f8f9fa;
  padding: 1rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
}

.header-content {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
}

.title {
  margin: 0;
  font-size: 1.5rem;
  color: #2c3e50;
}

.home-link {
  color: #2c3e50;
  text-decoration: none;
  transition: color 0.2s;
  display: flex;
  align-items: center;
}

.home-link:hover {
  color: #42b983;
}
</style> 