<template>
  <section class="featured-products">
    <div class="container">
      <h2 class="section-title">Featured Products</h2>
      <div v-if="productsStore.loading" class="loading-spinner">...</div>
      <div v-else class="products-grid">
        <ProductCard
          v-for="product in featured"
          :key="product.id"
          :product="product"
          @add-to-cart="cartStore.addItem($event)"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed, onMounted } from 'vue';
import { useProductsStore } from '@/stores/products';
import { useCartStore } from '@/stores/cart';
import ProductCard from '@/components/ui/ProductCard.vue';

const productsStore = useProductsStore();
const cartStore = useCartStore();

const featured = computed(() => productsStore.products.slice(0, 3));

onMounted(() => {
  if (productsStore.products.length === 0) {
    productsStore.fetchProducts();
  }
});
</script>

<style scoped>
.featured-products {
  padding: 4rem 0;
}
.section-title {
  text-align: center;
  font-size: 2rem;
  margin-bottom: 2.5rem;
}
.products-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
}
</style>