<script setup>
import { RouterLink } from 'vue-router';

const routes = [
  {name: 'Reactivity', path: '/reactivity'},
  {name: 'Custom Directives', path: '/directives'},
  {name: 'Suspense and Async components', path: '/suspense'},
  {name: 'Teleport and Portals', path: '/teleport'},
  {name: 'Pinia', path: '/pinia'},
  {name: 'Keep Alive', path: '/keep-alive'}
]
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="../assets/logo.svg" width="125" height="125" />
    <h1>Advanced Vue 3 Demo</h1>
  </header>

  <main>
    <ul>
      <RouterLink v-for="route in routes" :key="route.path" :to="route.path">
        <li>
          <h2>{{ route.name }}</h2>
        </li>
      </RouterLink>
    </ul>
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
  display: flex;
  flex-direction: column;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
