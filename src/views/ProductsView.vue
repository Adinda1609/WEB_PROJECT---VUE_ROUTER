<template>
  <main class="products-view">
    <div class="container">
      <div class="page-header">
        <h1>Our Lovely Collection</h1>
        <p>Discover our carefully curated products</p>
      </div>
      
      <div class="products-container">
        <div v-if="productsStore.loading" class="loading-spinner">
          <div class="spinner"></div>
        </div>
        
        <div v-else-if="productsStore.error" class="error-message">
          {{ productsStore.error }}
        </div>
        
        <template v-else>
          <div class="products-filter">
            <input 
              v-model="searchQuery" 
              placeholder="Search products..." 
              class="search-input"
            >
            <select v-model="selectedCategory" class="category-select">
              <option value="">All Categories</option>
              <option v-for="category in categories" :key="category" :value="category">
                {{ category }}
              </option>
            </select>
            <div class="sale-filter">
              <input type="checkbox" id="sale-toggle" v-model="showOnlyOnSale">
              <label for="sale-toggle">🔥 Tampilkan Diskon</label>
            </div>
          </div>
          
          <div class="products-grid">
            <ProductCard
              v-for="product in filteredProducts"
              :key="product.id"
              :product="product"
              @add-to-cart="addToCart"
            />
          </div>
          <div v-if="filteredProducts.length === 0" class="no-results">
            <p>Oops! No products match your criteria.</p>
          </div>
        </template>
      </div>
    </div>
  </main>
</template>

<script setup>
import { ref, computed, onMounted, watch } from 'vue';
import { useCartStore } from '@/stores/cart';
import { useProductsStore } from '@/stores/products';
import { useRoute, useRouter } from 'vue-router'; // Import useRoute & useRouter
import ProductCard from '@/components/ui/ProductCard.vue';

const cartStore = useCartStore();
const productsStore = useProductsStore();
const route = useRoute(); // Untuk mengakses info rute saat ini
const router = useRouter(); // Untuk memanipulasi rute

// State untuk semua filter
const searchQuery = ref('');
const selectedCategory = ref('');
const showOnlyOnSale = ref(false); // <-- State baru untuk filter diskon

const categories = computed(() => {
  if (!productsStore.products) return [];
  const allCategories = productsStore.products.map(p => p.category);
  return [...new Set(allCategories)];
});

// Logika filter utama yang diperbarui
const filteredProducts = computed(() => {
  if (!productsStore.products) return [];
  return productsStore.products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.value.toLowerCase());
    const matchesCategory = selectedCategory.value ? product.category === selectedCategory.value : true;
    const matchesSale = showOnlyOnSale.value ? !!product.originalPrice : true; // <-- Logika filter diskon
    return matchesSearch && matchesCategory && matchesSale;
  });
});

const addToCart = (product) => {
  cartStore.addItem(product);
};

// Cek filter dari URL saat komponen pertama kali dimuat
onMounted(() => {
  if (productsStore.products.length === 0) {
    productsStore.fetchProducts();
  }
  // Jika URL memiliki ?filter=on-sale, aktifkan checkbox diskon
  if (route.query.filter === 'on-sale') {
    showOnlyOnSale.value = true;
  }
});

// Awasi perubahan pada checkbox diskon
watch(showOnlyOnSale, (newValue) => {
  const query = { ...route.query };
  if (newValue) {
    query.filter = 'on-sale';
  } else {
    delete query.filter;
  }
  // Perbarui URL tanpa reload halaman
  router.replace({ query });
});
</script>

<style scoped>
.products-view {
  padding: 8rem 0 4rem;
}
.page-header {
  text-align: center;
  margin-bottom: 3rem;
}
.page-header h1 {
  font-size: 2.5rem;
  color: #5d4e75;
  margin-bottom: 0.5rem;
}
.page-header p {
  color: #7a6b83;
  font-size: 1.1rem;
}
.products-filter {
  display: flex;
  gap: 1rem;
  margin-bottom: 2.5rem;
  flex-wrap: wrap;
  align-items: center;
}
.search-input, .category-select {
  padding: 0.75rem 1rem;
  border: 1px solid #dab4b4;
  border-radius: 8px;
  font-size: 1rem;
  background: white;
  flex: 1;
  min-width: 200px;
}
.category-select {
  cursor: pointer;
  flex-grow: 0; /* Agar tidak meregang penuh */
}

/* Style untuk filter diskon */
.sale-filter {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: white;
  padding: 0.75rem 1rem;
  border: 1px solid #dab4b4;
  border-radius: 8px;
}
.sale-filter label {
  font-weight: 500;
  cursor: pointer;
  color: var(--primary-color);
}
.sale-filter input[type="checkbox"] {
  width: 18px;
  height: 18px;
  cursor: pointer;
}

.products-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 2rem;
}
.no-results {
  text-align: center;
  padding: 3rem;
  color: #777;
}

/* Styling untuk loading spinner */
.loading-spinner, .error-message {
  text-align: center;
  padding: 3rem;
}
.spinner {
  width: 50px;
  height: 50px;
  border: 5px solid rgba(196, 154, 154, 0.3);
  border-radius: 50%;
  border-top-color: #c49a9a;
  animation: spin 1s ease-in-out infinite;
}
@keyframes spin { to { transform: rotate(360deg); } }
</style>