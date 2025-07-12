<template>
  <main class="home-view">
    <HeroCarousel />
    <FeaturedProducts />
    <AboutSection />
  </main>
</template>

<script setup>
import HeroCarousel from '@/components/home/HeroCarousel.vue'
import FeaturedProducts from '@/components/home/FeaturedProducts.vue'
import AboutSection from '@/components/home/AboutSection.vue'
</script>

<style scoped>
.home-view {
  padding-top: 70px; /* Sesuaikan jika perlu */
}
</style>