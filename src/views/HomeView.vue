<template>
  <main class="bike-page">
    <BikeCard :min-price="MIN_PRICE" :price-updated-at="PRICE_UPDATED_AT" />
    <StoreList :stores="KONA_DEW_E_STORES" />
  </main>
</template>

<script setup lang="ts">
import BikeCard from '@/components/BikeCard.vue'
import StoreList from '@/components/StoreList.vue'
import { KONA_DEW_E_STORES, MIN_PRICE, PRICE_UPDATED_AT } from '@/data/bikeStores'
</script>

<style scoped>
.bike-page {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 1rem 3rem;
  background: var(--color-background);
}
</style>
