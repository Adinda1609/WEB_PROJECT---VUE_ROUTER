<template>
  <main class="home-view">
    <div class="home-layout container">
      <div class="hero-main">
        <HeroCarousel />
      </div>

      <aside class="home-sidebar">
        <DiscountCountdown />
        <div class="free-shipping-banner">
          <h5>GRATIS ONGKIR</h5>
          <p>Tanpa Minimum Pembelian</p>
        </div>
      </aside>
    </div>

    <FeaturedProducts />
    <Testimonials />
    <AboutSection />
  </main>
</template>

<script setup>
import HeroCarousel from '@/components/home/HeroCarousel.vue'
import FeaturedProducts from '@/components/home/FeaturedProducts.vue'
import AboutSection from '@/components/home/AboutSection.vue'
import Testimonials from '@/components/home/Testimonials.vue'
import DiscountCountdown from '@/components/home/DiscountCountdown.vue'
</script>

<style scoped>
.home-view {
  padding-top: 80px; /* Jarak dari navbar fixed */
  background-color: #fdf7f7; /* Warna latar belakang lembut untuk seluruh halaman */
}

.home-layout {
  display: grid;
  grid-template-columns: 2fr 1fr; /* 2 kolom, kiri lebih besar */
  gap: 1.5rem;
  padding-top: 2rem;
  margin-bottom: 4rem; /* Jarak ke Featured Products */
}

.hero-main {
  min-height: 400px;
}

.home-sidebar {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.free-shipping-banner {
  background: white;
  padding: 1.5rem;
  border-radius: 16px;
  text-align: center;
  color: var(--primary-color);
  box-shadow: 0 5px 15px rgba(0,0,0,0.07);
  border: 1px solid #f0e9e9;
}
.free-shipping-banner h5 {
  font-size: 1.1rem;
  font-weight: 600;
  margin: 0 0 0.25rem 0;
  letter-spacing: 1px;
}
.free-shipping-banner p {
  margin: 0;
  opacity: 0.9;
  color: var(--text-light);
}

/* --- RESPONSIVE --- */
@media (max-width: 992px) {
  .home-layout {
    grid-template-columns: 1fr; /* Ubah jadi 1 kolom di tablet/mobile */
  }
}
</style>