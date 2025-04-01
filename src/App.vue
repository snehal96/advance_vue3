<script setup>
import { useRoute } from 'vue-router'
import Header from '@/components/Header.vue'
import { computed } from 'vue'

const route = useRoute()
const showHeader = computed(() => route.name !== 'Home')
</script>

<template>
  <Header v-if="showHeader" />
  <main class="main-content">
    <router-view />
  </main>
</template>

<style scoped>
.main-content {
  padding-top: 4rem;
}
</style>
