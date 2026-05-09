<template>
  <main class="bike-page">
    <BikeCard />
  </main>
</template>

<script setup lang="ts">
import BikeCard from '@/components/BikeCard.vue'
</script>

<style scoped>
.bike-page {
  min-height: 100vh;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding: 2rem 1rem;
  background: var(--color-background);
}
</style>
