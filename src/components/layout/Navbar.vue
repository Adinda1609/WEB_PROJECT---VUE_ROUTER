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
        <button v-if="auth.isAuthenticated" class="action-button user-button">
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
        </button>
        <button @click="cart.toggleCart" class="action-button cart-button">
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
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
/* Pastikan Anda sudah mengimpor font seperti 'Poppins' di file CSS utama Anda */
.navbar {
  background-color: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(10px);
  padding: 1rem 0;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 100;
  border-bottom: 1px solid rgba(0,0,0,0.07);
  box-shadow: 0 2px 10px rgba(0,0,0,0.05);
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
  text-decoration: none;
  z-index: 1001;
}

/* Navigasi Utama */
.nav-links {
  display: flex;
  gap: 2.5rem; /* Jarak antar link lebih besar */
  position: absolute; /* Posisikan di tengah navbar */
  left: 50%;
  transform: translateX(-50%);
}
.nav-links a {
  position: relative;
  color: var(--text-light);
  font-weight: 500;
  font-size: 1rem;
  padding: 0.5rem 0;
  text-decoration: none;
  transition: color 0.3s ease;
}
/* Efek garis bawah yang elegan */
.nav-links a::after {
  content: '';
  position: absolute;
  width: 0;
  height: 2px;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  background-color: var(--primary-color);
  transition: width 0.3s ease;
}
.nav-links a:hover,
.nav-links a.router-link-exact-active {
  color: var(--primary-color);
}
.nav-links a:hover::after,
.nav-links a.router-link-exact-active::after {
  width: 100%;
}

/* Tombol Aksi (User & Keranjang) */
.nav-actions {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}
.action-button {
  background: none;
  border: none;
  position: relative;
  cursor: pointer;
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  color: var(--text-light);
  transition: background-color 0.3s ease, color 0.3s ease;
}
.action-button:hover {
  background-color: rgba(0,0,0,0.05);
  color: var(--primary-color);
}
.cart-badge {
  position: absolute;
  top: 5px;
  right: 2px;
  background-color: var(--secondary-color);
  color: white;
  border-radius: 50%;
  width: 18px;
  height: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.7rem;
  font-weight: 600;
  border: 1px solid white;
}

/* Tombol Hamburger */
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
    /* Sembunyikan menu di mobile, dan ubah menjadi fullscreen */
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
    transform: translateX(0); /* Reset transform */
  }

  .nav-links.mobile-nav-active {
    display: flex; /* Tampilkan saat state-nya aktif */
  }

  .nav-links a {
    font-size: 1.8rem;
  }
  
  .hamburger-menu {
    display: block;
    z-index: 1002; /* Pastikan di atas menu mobile */
  }
  
  .nav-actions {
    /* Pindahkan ke paling kanan setelah logo di mobile */
    position: absolute;
    right: 1rem;
    top: 50%;
    transform: translateY(-50%);
  }

  /* Sembunyikan tombol hamburger saat menu terbuka agar bisa menampilkan tombol 'X' */
  .hamburger-menu {
    order: 3; /* Pindahkan hamburger ke paling kanan */
  }
  .nav-actions {
    order: 2;
  }
  .nav-logo {
    order: 1;
  }
  .nav-container {
    justify-content: space-between;
  }
}
</style>