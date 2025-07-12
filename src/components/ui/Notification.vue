<template>
  <div v-if="message" class="notification" :class="type">
    {{ message }}
  </div>
</template>

<script setup>
import { ref } from 'vue';

const message = ref('');
const type = ref('success'); // 'success' or 'error'

// Logika untuk menampilkan dan menyembunyikan notifikasi bisa ditambahkan di sini
// Misalnya dengan event bus atau state management global.
</script>

<style scoped>
.notification {
  position: fixed;
  bottom: 20px;
  right: 20px;
  padding: 1rem 1.5rem;
  border-radius: 8px;
  color: white;
  z-index: 2000;
}
.notification.success {
  background-color: #5cb85c;
}
.notification.error {
  background-color: #d9534f;
}
</style>