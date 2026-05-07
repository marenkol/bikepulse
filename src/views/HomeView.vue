<template>
  <main class="bike-page">
    <article class="bike-card">
      <!-- Image Section -->
      <div class="bike-image-wrapper">
        <div class="badge">New 2025</div>
        <img
          class="bike-image"
          src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&auto=format&fit=crop"
          alt="Trek Domane SL 7 road bike"
          loading="eager"
        />
      </div>

      <!-- Info Section -->
      <div class="bike-info">
        <header class="bike-header">
          <p class="bike-brand">Trek</p>
          <h1 class="bike-name">Domane SL 7</h1>
          <div class="bike-rating" aria-label="Rating: 4.8 out of 5">
            <span class="stars" aria-hidden="true">★★★★★</span>
            <span class="rating-value">4.8</span>
            <span class="rating-count">(142 reviews)</span>
          </div>
        </header>

        <div class="bike-price-block">
          <span class="price-label">Retail price</span>
          <div class="price-row">
            <span class="price">$5,499</span>
            <span class="price-original">$6,199</span>
            <span class="price-badge">Save 11%</span>
          </div>
        </div>

        <div class="bike-specs">
          <div class="spec-item">
            <span class="spec-icon">⚙️</span>
            <div>
              <span class="spec-label">Groupset</span>
              <span class="spec-value">Shimano Ultegra Di2</span>
            </div>
          </div>
          <div class="spec-item">
            <span class="spec-icon">🪶</span>
            <div>
              <span class="spec-label">Weight</span>
              <span class="spec-value">7.9 kg (56 cm)</span>
            </div>
          </div>
          <div class="spec-item">
            <span class="spec-icon">🛞</span>
            <div>
              <span class="spec-label">Wheels</span>
              <span class="spec-value">Bontrager Aeolus Pro 3V</span>
            </div>
          </div>
          <div class="spec-item">
            <span class="spec-icon">🏗️</span>
            <div>
              <span class="spec-label">Frame</span>
              <span class="spec-value">OCLV 500 Carbon</span>
            </div>
          </div>
        </div>

        <div class="bike-description">
          <h2>About this bike</h2>
          <p>
            The Domane SL 7 is the ultimate endurance road bike — engineered to eat up miles on
            rough roads without sacrificing speed. IsoSpeed front and rear decouplers absorb
            road buzz so you arrive fresh, whether it's a centuries-long gran fondo or a
            multi-day tour.
          </p>
          <p>
            Electronic shifting via Shimano Ultegra Di2 delivers precise, effortless gear
            changes at the push of a button. Paired with Bontrager's Aeolus Pro 3V carbon
            wheels, this bike is fast, comfortable, and ready for any road you point it at.
          </p>
        </div>

        <div class="bike-tags">
          <span class="tag">Endurance</span>
          <span class="tag">Carbon</span>
          <span class="tag">Electronic Shifting</span>
          <span class="tag">Road</span>
        </div>

        <div class="bike-actions">
          <button class="btn-primary">Add to Cart</button>
          <button class="btn-secondary" aria-label="Save to wishlist">♡ Save</button>
        </div>
      </div>
    </article>
  </main>
</template>

<script setup lang="ts">
// Static presentation — no reactive state needed
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

/* ── Card ──────────────────────────────────────────── */
.bike-card {
  display: grid;
  grid-template-columns: 1fr;
  gap: 0;
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
    grid-template-columns: 1fr 1fr;
  }
}

/* ── Image ─────────────────────────────────────────── */
.bike-image-wrapper {
  position: relative;
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%);
  min-height: 320px;
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
  transition: transform 0.6s ease;
}

.bike-image-wrapper:hover .bike-image {
  transform: scale(1.03);
}

.badge {
  position: absolute;
  top: 1.25rem;
  left: 1.25rem;
  z-index: 1;
  background: hsla(160, 100%, 37%, 1);
  color: #fff;
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  padding: 0.3rem 0.75rem;
  border-radius: 100px;
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
  gap: 0.25rem;
}

.bike-brand {
  font-size: 0.78rem;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: hsla(160, 100%, 37%, 1);
}

.bike-name {
  font-size: 2rem;
  font-weight: 700;
  color: var(--color-heading);
  line-height: 1.15;
}

.bike-rating {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  margin-top: 0.25rem;
}

.stars {
  color: #f59e0b;
  font-size: 0.9rem;
  letter-spacing: 0.05em;
}

.rating-value {
  font-weight: 600;
  font-size: 0.875rem;
  color: var(--color-heading);
}

.rating-count {
  font-size: 0.8rem;
  color: var(--color-text);
  opacity: 0.6;
}

/* Price */
.bike-price-block {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.price-label {
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  opacity: 0.55;
  color: var(--color-text);
}

.price-row {
  display: flex;
  align-items: baseline;
  gap: 0.75rem;
  flex-wrap: wrap;
}

.price {
  font-size: 2.25rem;
  font-weight: 700;
  color: var(--color-heading);
  line-height: 1;
}

.price-original {
  font-size: 1rem;
  opacity: 0.45;
  text-decoration: line-through;
  color: var(--color-text);
}

.price-badge {
  background: #fef3c7;
  color: #92400e;
  font-size: 0.72rem;
  font-weight: 600;
  padding: 0.2rem 0.6rem;
  border-radius: 100px;
}

@media (prefers-color-scheme: dark) {
  .price-badge {
    background: rgba(245, 158, 11, 0.2);
    color: #fbbf24;
  }
}

/* Specs */
.bike-specs {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.75rem;
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

.spec-icon {
  font-size: 1.1rem;
  line-height: 1;
  flex-shrink: 0;
  margin-top: 1px;
}

.spec-item > div {
  display: flex;
  flex-direction: column;
  gap: 0.1rem;
  min-width: 0;
}

.spec-label {
  font-size: 0.68rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  opacity: 0.5;
  color: var(--color-text);
}

.spec-value {
  font-size: 0.8rem;
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
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  opacity: 0.5;
  color: var(--color-text);
}

.bike-description p {
  font-size: 0.88rem;
  line-height: 1.7;
  color: var(--color-text);
  opacity: 0.85;
}

/* Tags */
.bike-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.tag {
  font-size: 0.75rem;
  font-weight: 500;
  border: 1px solid var(--color-border-hover);
  color: var(--color-text);
  padding: 0.25rem 0.75rem;
  border-radius: 100px;
  transition: background 0.2s;
}

.tag:hover {
  background: var(--color-background-mute);
}

/* Actions */
.bike-actions {
  display: flex;
  gap: 0.75rem;
  margin-top: auto;
}

.btn-primary {
  flex: 1;
  padding: 0.85rem 1.5rem;
  background: hsla(160, 100%, 37%, 1);
  color: #fff;
  border: none;
  border-radius: 10px;
  font-size: 0.95rem;
  font-weight: 600;
  cursor: pointer;
  transition:
    background 0.2s,
    transform 0.1s;
}

.btn-primary:hover {
  background: hsla(160, 100%, 30%, 1);
}

.btn-primary:active {
  transform: scale(0.98);
}

.btn-secondary {
  padding: 0.85rem 1.25rem;
  background: transparent;
  border: 1px solid var(--color-border-hover);
  border-radius: 10px;
  font-size: 0.95rem;
  font-weight: 500;
  color: var(--color-text);
  cursor: pointer;
  transition:
    background 0.2s,
    border-color 0.2s;
  white-space: nowrap;
}

.btn-secondary:hover {
  background: var(--color-background-mute);
  border-color: var(--color-border-hover);
}
</style>
