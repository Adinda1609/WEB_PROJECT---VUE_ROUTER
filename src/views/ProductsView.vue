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
          </div>
          
          <div class="products-grid">
            <ProductCard
              v-for="product in filteredProducts"
              :key="product.id"
              :product="product"
              @add-to-cart="addToCart"
            />
          </div>
        </template>
      </div>
    </div>
  </main>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useCartStore } from '@/stores/cart'
import { useProductsStore } from '@/stores/products'
import ProductCard from '@/components/ui/ProductCard.vue'

const cartStore = useCartStore()
const productsStore = useProductsStore()

const searchQuery = ref('')
const selectedCategory = ref('')

const categories = computed(() => {
  if (!productsStore.products) return []
  const allCategories = productsStore.products.map(p => p.category)
  return [...new Set(allCategories)]
})

const filteredProducts = computed(() => {
  if (!productsStore.products) return []
  return productsStore.products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.value.toLowerCase())
    const matchesCategory = selectedCategory.value ? 
      product.category === selectedCategory.value : true
    return matchesSearch && matchesCategory
  })
})

const addToCart = (product) => {
  cartStore.addItem(product)
  // Opsi: tidak otomatis membuka keranjang agar tidak mengganggu Browse
  // cartStore.toggleCart() 
}

onMounted(() => {
  if (productsStore.products.length === 0) {
    productsStore.fetchProducts()
  }
})
</script>

<style scoped>
.products-view {
  padding: 8rem 0 4rem; /* Padding atas agar tidak tertutup navbar */
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
  margin-bottom: 2rem;
  flex-wrap: wrap; /* Biarkan filter wrap jika perlu */
}

.search-input, .category-select {
  padding: 0.75rem 1rem;
  border: 1px solid #dab4b4;
  border-radius: 8px;
  font-size: 1rem;
  background: white;
  flex: 1;
  min-width: 200px;
  max-width: 300px;
}

.category-select {
  cursor: pointer;
}

.products-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 2rem;
}

.loading-spinner {
  display: flex;
  justify-content: center;
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

.error-message {
  color: #d9534f;
  text-align: center;
  padding: 2rem;
  font-weight: 500;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

/* === BAGIAN RESPONSIVE === */
@media (max-width: 768px) {
  .products-view {
    padding-top: 6rem;
  }
  .products-filter {
    flex-direction: column; /* Tumpuk filter secara vertikal */
    align-items: stretch; /* Buat input memenuhi lebar */
  }
  .search-input, .category-select {
    max-width: 100%; /* Hapus batasan lebar maksimal di mobile */
  }
}
</style>