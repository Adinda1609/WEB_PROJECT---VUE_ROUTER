<template>
  <div class="discount-banner">
    <div class="banner-content">
      <h4>DISKON SEGERA BERAKHIR</h4>
      <p class="subtitle">Jangan lewatkan penawaran spesial kami!</p>
      <div class="countdown-timer">
        <div class="timer-block">
          <span class="number">{{ days }}</span>
          <span class="label">Hari</span>
        </div>
        <div class="timer-block">
          <span class="number">{{ hours }}</span>
          <span class="label">Jam</span>
        </div>
        <div class="timer-block">
          <span class="number">{{ minutes }}</span>
          <span class="label">Menit</span>
        </div>
        <div class="timer-block">
          <span class="number">{{ seconds }}</span>
          <span class="label">Detik</span>
        </div>
      </div>
      <router-link :to="{ path: '/products', query: { filter: 'on-sale' } }" class="view-all-btn">
        Cek Koleksi Diskon
        <span class="arrow">→</span>
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const days = ref('00');
const hours = ref('00');
const minutes = ref('00');
const seconds = ref('00');

let intervalId = null;

const startCountdown = () => {
  // Tetapkan tanggal akhir diskon. Contoh: 2 hari dari sekarang.
  const countdownEndDate = new Date();
  countdownEndDate.setDate(countdownEndDate.getDate() + 2);

  const updateTimer = () => {
    const now = new Date().getTime();
    const distance = countdownEndDate - now;

    if (distance < 0) {
      clearInterval(intervalId);
      days.value = '00';
      hours.value = '00';
      minutes.value = '00';
      seconds.value = '00';
      return;
    }

    days.value = Math.floor(distance / (1000 * 60 * 60 * 24)).toString().padStart(2, '0');
    hours.value = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)).toString().padStart(2, '0');
    minutes.value = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)).toString().padStart(2, '0');
    seconds.value = Math.floor((distance % (1000 * 60)) / 1000).toString().padStart(2, '0');
  };

  updateTimer(); // Panggil sekali agar tidak ada delay
  intervalId = setInterval(updateTimer, 1000);
};

onMounted(() => {
  startCountdown();
});

onUnmounted(() => {
  clearInterval(intervalId);
});
</script>

<style scoped>
@keyframes subtle-glow {
  0% { box-shadow: 0 0 15px rgba(218, 180, 180, 0.2); }
  50% { box-shadow: 0 0 25px rgba(218, 180, 180, 0.4); }
  100% { box-shadow: 0 0 15px rgba(218, 180, 180, 0.2); }
}

.discount-banner {
  background: linear-gradient(135deg, hsl(350, 60%, 85%), hsl(340, 50%, 75%));
  padding: 2rem;
  border-radius: 16px;
  text-align: center;
  color: white;
  border: 1px solid rgba(255, 255, 255, 0.2);
  animation: subtle-glow 5s infinite ease-in-out;
  text-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.discount-banner h4 {
  font-size: 1rem;
  font-weight: 600;
  margin: 0;
  letter-spacing: 2px;
  text-transform: uppercase;
  opacity: 0.9;
}

.subtitle {
  font-size: 0.9rem;
  margin: 0.25rem 0 1.5rem 0;
  opacity: 0.8;
}

.countdown-timer {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 2rem;
}

.timer-block {
  background-color: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  padding: 0.75rem;
  border-radius: 10px;
  width: 70px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 10px rgba(0,0,0,0.05);
}

.timer-block .number {
  font-size: 2rem;
  font-weight: 700;
  line-height: 1.1;
  color: white;
}

.timer-block .label {
  font-size: 0.7rem;
  text-transform: uppercase;
  opacity: 0.8;
  margin-top: 0.25rem;
}

.view-all-btn {
  background-image: linear-gradient(to right, var(--primary-color, #5d4e75), var(--secondary-color, #c49a9a));
  color: white;
  padding: 0.8rem 2rem;
  border-radius: 50px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0,0,0,0.2);
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  border: none;
  cursor: pointer;
}

.view-all-btn:hover {
  transform: translateY(-3px) scale(1.05);
  box-shadow: 0 7px 20px rgba(0,0,0,0.25);
}

.arrow {
  transition: transform 0.3s ease;
}

.view-all-btn:hover .arrow {
  transform: translateX(5px);
}
</style>