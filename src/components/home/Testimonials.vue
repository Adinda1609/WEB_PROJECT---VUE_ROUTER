<template>
  <section class="testimonials-section">
    <div class="container">
      <div class="testimonials-header">
        <span class="star-icon">⭐</span>
        <h2>ULASAN PELANGGAN</h2>
        <span class="star-icon">⭐</span>
      </div>

      <div class="testimonials-carousel">
        <div
          v-for="(testimonial, index) in testimonials"
          :key="testimonial.name"
          class="testimonial-card"
          :class="{ active: index === currentIndex }"
        >
          <div class="avatar-container">
            <img :src="testimonial.avatar" alt="Customer Avatar" class="avatar" />
          </div>
          <div class="rating">
            <span v-for="i in 5" :key="i">★</span>
          </div>
          <p class="testimonial-text">"{{ testimonial.text }}"</p>
          <div class="customer-info">
            <span class="customer-name">{{ testimonial.name }}</span>
            <span class="customer-location">/ {{ testimonial.location }}</span>
          </div>
        </div>

        <button @click="prev" class="nav-btn prev-btn" aria-label="Previous testimonial">‹</button>
        <button @click="next" class="nav-btn next-btn" aria-label="Next testimonial">›</button>
      </div>

      <div class="pagination">
        <span
          v-for="(item, index) in testimonials"
          :key="`dot-${index}`"
          class="dot"
          :class="{ active: index === currentIndex }"
          @click="goTo(index)"
        ></span>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

// --- DATA Ulasan ---
// Ganti data ini dengan ulasan asli dari pelanggan Anda
const testimonials = ref([
  {
    avatar: 'https://i.pravatar.cc/150?img=11',
    name: 'Maria Ulfah',
    location: 'Jakarta Timur',
    text: 'Saya sudah 2 kali pesan buket bunga melalui Bucket Mart. Kedua pesanan saya telah sampai di tujuan dengan cepat sesuai estimasi waktu yang diberikan. Terima kasih!',
  },
  {
    avatar: 'https://i.pravatar.cc/150?img=32',
    name: 'Rendra',
    location: 'Jakarta Utara',
    text: 'Terima kasih, pesanan bunga sudah diterima istri saya. Bakal jadi favorit saya, respon cepat, pelayanan profesional, rangkaian bunganya istimewa.',
  },
  {
    avatar: 'https://i.pravatar.cc/150?img=45',
    name: 'Aulia Putri',
    location: 'Bekasi',
    text: 'Pelayanannya sangat memuaskan, bunganya segar dan desain buketnya sangat kreatif. Sangat direkomendasikan untuk acara spesial!',
  },
]);
// ---

const currentIndex = ref(0);
let autoPlayInterval = null;

const next = () => {
  currentIndex.value = (currentIndex.value + 1) % testimonials.value.length;
};

const prev = () => {
  currentIndex.value = (currentIndex.value - 1 + testimonials.value.length) % testimonials.value.length;
};

const goTo = (index) => {
  currentIndex.value = index;
};

const startAutoPlay = () => {
  autoPlayInterval = setInterval(next, 5000); // Ganti slide setiap 5 detik
};

const stopAutoPlay = () => {
  clearInterval(autoPlayInterval);
};

onMounted(() => {
  startAutoPlay();
});

onUnmounted(() => {
  stopAutoPlay();
});
</script>

<style scoped>
.testimonials-section {
  background-color: #fdf7f7; /* Warna latar belakang lembut */
  padding: 4rem 1rem;
  text-align: center;
}

.testimonials-header {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 2rem;
  color: var(--primary-color, #5d4e75);
}

.star-icon {
  font-size: 1.2rem;
  margin: 0 1rem;
}

.testimonials-header h2 {
  font-size: 1.8rem;
  font-weight: 600;
  margin: 0;
}

.testimonials-carousel {
  position: relative;
  max-width: 700px;
  margin: 0 auto;
  min-height: 320px; /* Beri tinggi minimum agar layout tidak "loncat" */
}

.testimonial-card {
  background-color: white;
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.07);
  opacity: 0;
  transform: scale(0.95);
  transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out;
  position: absolute; /* Kunci untuk menumpuk kartu */
  top: 0;
  left: 0;
  width: 100%;
  visibility: hidden;
}

.testimonial-card.active {
  opacity: 1;
  transform: scale(1);
  position: relative;
  visibility: visible;
}

.avatar-container {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  overflow: hidden;
  margin: 0 auto 1.5rem;
  border: 3px solid var(--secondary-color, #c49a9a);
}

.avatar {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.rating {
  color: #ffc107;
  font-size: 1.2rem;
  margin-bottom: 1rem;
}

.testimonial-text {
  color: var(--text-light, #7a6b83);
  font-style: italic;
  line-height: 1.7;
  margin-bottom: 1.5rem;
  min-height: 70px; /* Beri tinggi minimum untuk teks */
}

.customer-info {
  font-size: 1rem;
}

.customer-name {
  font-weight: 600;
  color: var(--primary-color, #5d4e75);
}

.customer-location {
  color: var(--text-light, #7a6b83);
}

.nav-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(255, 255, 255, 0.7);
  border: 1px solid #eee;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  font-size: 2rem;
  line-height: 40px;
  color: var(--primary-color, #5d4e75);
  cursor: pointer;
  z-index: 10;
  transition: all 0.3s ease;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
}

.nav-btn:hover {
  background-color: white;
  transform: translateY(-50%) scale(1.1);
}

.prev-btn {
  left: -20px;
}

.next-btn {
  right: -20px;
}

.pagination {
  display: flex;
  justify-content: center;
  margin-top: 2rem;
}

.dot {
  width: 10px;
  height: 10px;
  background-color: #ddd;
  border-radius: 50%;
  margin: 0 0.4rem;
  cursor: pointer;
  transition: all 0.3s ease;
}

.dot.active {
  background-color: var(--secondary-color, #c49a9a);
  transform: scale(1.2);
}

/* === RESPONSIVE DESIGN === */
@media (max-width: 768px) {
  .nav-btn {
    display: none; /* Sembunyikan tombol panah di mobile agar tidak sempit */
  }
  .testimonial-text {
    min-height: 100px;
  }
}
</style>