<template>
  <section class="hero-carousel">
    <div class="hero-content">
      <h1>Find Your Perfect Bucket</h1>
      <p>Artfully crafted buckets & baskets for every occasion.</p>
      <router-link to="/products" class="cta-button">Shop Collection</router-link>
    </div>
  </section>
</template>

<script setup>
// Tidak ada perubahan di script
</script>

<style scoped>
.hero-carousel {
  height: 60vh;
  background-image: linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url('https://www.khayraflorist.com/~img/fresh_bouquet_colorful_mixed_flowers_european_floral_shop_concept_flowers_delivery-aadd7-3819_130-t598_13.webp');
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: white;
}
.hero-content h1 {
  font-size: 3rem;
  margin-bottom: 1rem;
  color: white;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
}
.hero-content p {
  font-size: 1.2rem;
  margin-bottom: 2rem;
}
.cta-button {
  padding: 0.8rem 2rem;
  background-color: white;
  color: var(--primary-color);
  border-radius: 50px;
  font-weight: bold;
  text-decoration: none;
  transition: all 0.3s ease;
}
.cta-button:hover {
  background-color: #f0e6ea;
  transform: translateY(-2px);
}

/* === BAGIAN RESPONSIVE === */
@media (max-width: 768px) {
  .hero-carousel {
    height: 50vh; /* Kurangi tinggi hero section */
    padding: 0 1rem; /* Beri padding agar teks tidak terlalu mepet */
  }
  
  .hero-content h1 {
    font-size: 2.2rem; /* Kecilkan font judul */
  }

  .hero-content p {
    font-size: 1rem; /* Kecilkan font sub-judul */
  }
}
</style>