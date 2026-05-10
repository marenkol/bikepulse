<template>
  <section class="store-list">
    <h2 class="store-list-title">Available in Finland</h2>
    <ul class="stores">
      <li v-for="store in stores" :key="store.name" class="store-item">
        <a :href="store.url" target="_blank" rel="noopener noreferrer" class="store-logo-link">
          <img :src="store.logoUrl" :alt="store.name + ' logo'" class="store-logo" />
        </a>
        <div class="store-info">
          <a :href="store.url" target="_blank" rel="noopener noreferrer" class="store-name">
            {{ store.name }}
          </a>
          <span class="store-price">{{ formatPrice(store.price) }}</span>
        </div>
        <span v-if="store.price === minPrice" class="best-price-badge">Best price</span>
      </li>
    </ul>
  </section>
</template>

<script setup lang="ts">
import type { BikeStore } from '@/data/bikeStores'

const props = defineProps<{
  stores: BikeStore[]
}>()

const minPrice = Math.min(...props.stores.map((s) => s.price))

function formatPrice(price: number): string {
  return new Intl.NumberFormat('fi-FI', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 }).format(price)
}
</script>

<style scoped>
.store-list {
  width: 100%;
  max-width: 1100px;
  margin-top: 1.5rem;
}

.store-list-title {
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  opacity: 0.45;
  color: var(--color-text);
  margin-bottom: 0.75rem;
}

.stores {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.store-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  background: var(--color-background-soft);
  border: 1px solid var(--color-border);
  border-radius: 12px;
  padding: 0.85rem 1.25rem;
  position: relative;
}

.store-logo-link {
  display: flex;
  align-items: center;
  flex-shrink: 0;
}

.store-logo {
  width: 32px;
  height: 32px;
  border-radius: 6px;
  object-fit: contain;
  background: var(--color-background-mute);
  padding: 2px;
}

.store-info {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex: 1;
  gap: 1rem;
}

.store-name {
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--color-heading);
  text-decoration: none;
  transition: color 0.2s;
}

.store-name:hover {
  color: hsla(160, 100%, 37%, 1);
}

.store-price {
  font-size: 1rem;
  font-weight: 700;
  color: var(--color-heading);
  white-space: nowrap;
}

.best-price-badge {
  font-size: 0.65rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  background: hsla(160, 100%, 37%, 1);
  color: #fff;
  padding: 0.2rem 0.6rem;
  border-radius: 100px;
  flex-shrink: 0;
}
</style>