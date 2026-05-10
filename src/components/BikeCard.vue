<template>
  <article class="bike-card">
    <!-- Image Section -->
    <div class="bike-image-wrapper">
      <div class="badge">E-Bike</div>
      <img
        class="bike-image"
        :src="bikeImage"
        alt="Kona Dew-E electric hybrid bike"
        loading="eager"
      />
      <div class="image-overlay">
        <span class="overlay-label">Best price in Finland</span>
        <span class="overlay-price">{{ formatPrice(minPrice) }}</span>
        <span class="overlay-updated">Checked {{ formatDateTime(priceUpdatedAt) }}</span>
      </div>
    </div>

    <!-- Info Section -->
    <div class="bike-info">
      <header class="bike-header">
        <h1 class="bike-name">Kona Dew-E</h1>
      </header>

      <div class="bike-specs">
        <div class="spec-item">
          <div>
            <span class="spec-label">Motor</span>
            <span class="spec-value">Shimano EP6, 250W</span>
          </div>
        </div>
        <div class="spec-item">
          <div>
            <span class="spec-label">Battery</span>
            <span class="spec-value">504 Wh · ~100 km range</span>
          </div>
        </div>
        <div class="spec-item">
          <div>
            <span class="spec-label">Drivetrain</span>
            <span class="spec-value">Shimano Deore, 10-speed</span>
          </div>
        </div>
        <div class="spec-item">
          <div>
            <span class="spec-label">Brakes</span>
            <span class="spec-value">Hydraulic disc</span>
          </div>
        </div>
      </div>

      <div class="bike-description">
        <h2>About this bike</h2>
        <p>
          The Kona Dew-E takes everything you love about urban cycling and adds intelligent
          electric assist. Shimano's EP6 mid-drive motor delivers smooth, natural power exactly
          when you need it — conquering hills with ease and extending every commute into
          something you actually look forward to.
        </p>
      </div>

      <div class="bike-footer">
        <a
          class="learn-more"
          href="https://www.konaworld.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Kona official site ↗
        </a>
      </div>
    </div>
  </article>
</template>

<script setup lang="ts">
import bikeImage from '@/assets/images/kona-dew-e-2.webp'

defineProps<{
  minPrice: number
  priceUpdatedAt: Date
}>()

function formatPrice(price: number): string {
  return new Intl.NumberFormat('fi-FI', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 }).format(price)
}

function formatDateTime(date: Date): string {
  return new Intl.DateTimeFormat('fi-FI', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  }).format(date)
}
</script>

<style scoped>
/* ── Card ──────────────────────────────────────────── */
.bike-card {
  display: grid;
  grid-template-columns: 1fr;
  width: 100%;
  max-width: 1100px;
  background: var(--color-background-soft);
  border: 1px solid var(--color-border);
  border-radius: 20px;
  overflow: hidden;
  box-shadow:
    0 4px 6px -1px rgba(0, 0, 0, 0.07),
    0 10px 40px -5px rgba(0, 0, 0, 0.1);
}

@media (min-width: 768px) {
  .bike-card {
    grid-template-columns: 2fr 1fr;
  }
}

/* ── Image ─────────────────────────────────────────── */
.bike-image-wrapper {
  position: relative;
  background: linear-gradient(160deg, #0d1f2d 0%, #1a3a4a 60%, #0f2b1f 100%);
  min-height: 340px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.bike-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.7s ease;
}

.bike-image-wrapper:hover .bike-image {
  transform: scale(1.04);
}

.badge {
  position: absolute;
  top: 1.25rem;
  left: 1.25rem;
  z-index: 2;
  background: hsla(160, 100%, 37%, 1);
  color: #fff;
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  padding: 0.3rem 0.8rem;
  border-radius: 100px;
}

.image-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 2;
  padding: 2rem 1.5rem 1.25rem;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.65) 0%, transparent 100%);
  display: flex;
  flex-direction: column;
  gap: 0.1rem;
}

.overlay-label {
  font-size: 0.7rem;
  font-weight: 500;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.6);
}

.overlay-price {
  font-size: 1.6rem;
  font-weight: 700;
  color: #fff;
  line-height: 1;
}

.overlay-updated {
  font-size: 0.65rem;
  color: rgba(255, 255, 255, 0.5);
  margin-top: 0.2rem;
}

/* ── Info ──────────────────────────────────────────── */
.bike-info {
  padding: 2rem 2rem 2.25rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

/* Header */
.bike-header {
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
}

.bike-name {
  font-size: 2.4rem;
  font-weight: 700;
  color: var(--color-heading);
  line-height: 1.1;
}

.bike-tagline {
  font-size: 0.92rem;
  color: var(--color-text);
  opacity: 0.6;
  margin-top: 0.1rem;
  font-style: italic;
}

/* Specs */
.bike-specs {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.65rem;
}

.spec-item {
  display: flex;
  align-items: flex-start;
  gap: 0.6rem;
  background: var(--color-background-mute);
  border: 1px solid var(--color-border);
  border-radius: 10px;
  padding: 0.65rem 0.75rem;
}

.spec-item > div {
  display: flex;
  flex-direction: column;
  gap: 0.1rem;
  min-width: 0;
}

.spec-label {
  font-size: 0.67rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  opacity: 0.5;
  color: var(--color-text);
}

.spec-value {
  font-size: 0.79rem;
  font-weight: 600;
  color: var(--color-heading);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

/* Description */
.bike-description {
  display: flex;
  flex-direction: column;
  gap: 0.65rem;
}

.bike-description h2 {
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  opacity: 0.45;
  color: var(--color-text);
}

.bike-description p {
  font-size: 0.875rem;
  line-height: 1.75;
  color: var(--color-text);
  opacity: 0.82;
}

/* Footer */
.bike-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  margin-top: auto;
  padding-top: 0.25rem;
  border-top: 1px solid var(--color-border);
}

.learn-more {
  font-size: 0.8rem;
  font-weight: 600;
  color: hsla(160, 100%, 37%, 1);
  text-decoration: none;
  white-space: nowrap;
  transition: opacity 0.2s;
}

.learn-more:hover {
  opacity: 0.75;
}
</style>
