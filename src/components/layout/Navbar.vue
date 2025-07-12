<template>
  <header class="navbar">
    <div class="container nav-container">
      <router-link to="/" class="nav-logo">💐 Bucket Mart</router-link>

      <button class="hamburger-menu" @click="toggleMobileMenu">
        {{ isMobileMenuOpen ? '✕' : '☰' }}
      </button>

      <nav class="nav-links" :class="{ 'mobile-nav-active': isMobileMenuOpen }">
        <router-link to="/" @click="closeMobileMenu">Home</router-link>
        <router-link to="/products" @click="closeMobileMenu">Products</router-link>
        <router-link to="/about" @click="closeMobileMenu">About</router-link>
        <router-link v-if="auth.isAuthenticated" to="/order-history" @click="closeMobileMenu">Orders</router-link>
        <a v-if="auth.isAuthenticated" href="#" @click.prevent="handleLogout">Logout</a>
        <router-link v-else to="/login" @click="closeMobileMenu">Login</router-link>
      </nav>

      <div class="nav-actions">
        <button @click="cart.toggleCart" class="cart-button">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <path d="M16 10a4 4 0 0 1-8 0"></path>
          </svg>
          <span v-if="cart.totalItems > 0" class="cart-badge">{{ cart.totalItems }}</span>
        </button>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue';
import { useCartStore } from '@/stores/cart';
import { useAuthStore } from '@/stores/auth';
import { useRouter } from 'vue-router';

const cart = useCartStore();
const auth = useAuthStore();
const router = useRouter();

const isMobileMenuOpen = ref(false);

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
};

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false;
};

const handleLogout = () => {
  closeMobileMenu();
  auth.logout();
  router.push('/login');
};
</script>

<style scoped>
/* Ganti font di file CSS global atau index.html Anda, contoh:
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');
body { font-family: 'Poppins', sans-serif; } */

.navbar {
  background-color: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(12px);
  padding: 1rem 0;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 100;
  border-bottom: 1px solid rgba(0,0,0,0.05);
  box-shadow: 0 4px 15px rgba(0,0,0,0.05);
}
.nav-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.nav-logo {
  font-weight: 600;
  font-size: 1.5rem;
  color: var(--primary-color);
  z-index: 1001;
  letter-spacing: -0.5px;
}
.nav-links {
  display: flex;
  gap: 2rem; /* Jarak sedikit lebih besar */
}
.nav-links a {
  position: relative; /* Diperlukan untuk garis bawah */
  color: var(--text-light);
  font-weight: 500;
  font-size: 1rem;
  padding-bottom: 5px; /* Jarak untuk garis bawah */
  transition: color 0.3s ease;
}
/* Efek garis bawah (underline) */
.nav-links a::after {
  content: '';
  position: absolute;
  width: 0;
  height: 2px;
  bottom: 0;
  left: 0;
  background-color: var(--secondary-color);
  transition: width 0.3s ease;
}
.nav-links a:hover,
.nav-links a.router-link-exact-active {
  color: var(--primary-color);
}
.nav-links a:hover::after,
.nav-links a.router-link-exact-active::after {
  width: 100%; /* Tampilkan garis bawah saat hover atau aktif */
}

/* Styling untuk tombol keranjang dan ikon SVG */
.nav-actions {
  z-index: 1001;
}
.cart-button {
  background: none;
  border: none;
  font-size: 1.5rem;
  position: relative;
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: background-color 0.3s ease, transform 0.2s ease;
}
.cart-button:hover {
  background-color: rgba(218, 165, 180, 0.1);
  transform: scale(1.05);
}
.cart-button svg {
  color: var(--primary-color);
}
.cart-badge {
  position: absolute;
  top: 2px;
  right: 0px;
  background-color: var(--secondary-color);
  color: white;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.7rem;
  font-weight: 600;
  border: 2px solid white; /* Membuat badge terlihat lebih menonjol */
}

.hamburger-menu {
  display: none;
  font-size: 1.8rem;
  background: none;
  border: none;
  color: var(--primary-color);
  z-index: 1001;
  cursor: pointer;
  padding: 0.5rem;
}

/* === BAGIAN RESPONSIVE === */
@media (max-width: 768px) {
  .nav-links {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: rgba(255, 255, 255, 0.98);
    backdrop-filter: blur(10px);
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2.5rem;
  }

  .nav-links.mobile-nav-active {
    display: flex;
  }

  .nav-links a {
    font-size: 1.8rem;
  }
  
  .hamburger-menu {
    display: block;
  }
}
</style>