<template>
  <div id="app">
    <Navbar />
    <router-view />
    <Footer v-if="showFooter" /> <CartModal />
    <Notification />
  </div>
</template>

<script setup>
import { computed } from 'vue'; // Import computed
import { useRoute } from 'vue-router'; // Import useRoute

import Navbar from '@/components/layout/Navbar.vue'
import Footer from '@/components/layout/Footer.vue'
import CartModal from '@/components/cart/CartModal.vue'
import Notification from '@/components/ui/Notification.vue'

// Inisialisasi useRoute
const route = useRoute();

const showFooter = computed(() => {
  const routesWithoutFooter = ['login', 'register']; 

  return !routesWithoutFooter.includes(route.name);
});
</script>

<style>
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh; /* Memastikan app mengisi tinggi viewport minimum */
}
.router-view-container { /* Jika Anda membungkus router-view */
    flex-grow: 1;
}
#app > *:nth-child(2) { /* Ini menargetkan router-view jika posisinya kedua */
    flex-grow: 1;
}
</style>