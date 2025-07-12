<template>
  <div class="product-card">
    <div class="product-image-container">
      <div v-if="product.originalPrice" class="discount-badge">
        -{{ discountPercentage }}%
      </div>
      <img :src="product.image" :alt="product.name" class="product-image">
      <div class="overlay">
        <button class="add-to-cart-btn" @click.stop="$emit('addToCart', product)">
          Add to Cart
        </button>
      </div>
    </div>
    <div class="product-info">
      <span class="product-category">{{ product.category }}</span>
      <h3 class="product-name">{{ product.name }}</h3>
      <div class="product-pricing">
        <span v-if="product.originalPrice" class="original-price">
          Rp{{ product.originalPrice.toLocaleString('id-ID') }}
        </span>
        <span class="current-price">
          Rp{{ product.price.toLocaleString('id-ID') }}
        </span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  product: {
    type: Object,
    required: true,
  },
});

defineEmits(['addToCart']);

// Menghitung persentase diskon secara otomatis
const discountPercentage = computed(() => {
  if (!props.product.originalPrice || !props.product.price) {
    return 0;
  }
  const discount = ((props.product.originalPrice - props.product.price) / props.product.originalPrice) * 100;
  return Math.round(discount);
});
</script>

<style scoped>
.product-card {
  background-color: white;
  border: 1px solid #f0e9e9;
  border-radius: 12px;
  overflow: hidden;
  transition: all 0.3s ease;
  cursor: pointer;
}

.product-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 25px rgba(218, 165, 180, 0.2);
}

.product-image-container {
  position: relative;
  overflow: hidden;
}

.product-image {
  width: 100%;
  height: 280px;
  object-fit: cover;
  display: block;
}

/* Badge Diskon */
.discount-badge {
  position: absolute;
  top: 15px;
  left: 15px;
  background-color: var(--secondary-color, #c49a9a);
  color: white;
  width: 45px;
  height: 45px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.9rem;
  font-weight: 600;
  z-index: 2;
  box-shadow: 0 2px 5px rgba(0,0,0,0.2);
}

/* Overlay dan Tombol Add to Cart */
.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}
.product-card:hover .overlay {
  opacity: 1;
}
.add-to-cart-btn {
  background-color: white;
  color: var(--primary-color);
  border: 2px solid var(--primary-color);
  padding: 0.7rem 1.5rem;
  border-radius: 50px;
  font-weight: 600;
  cursor: pointer;
  transform: translateY(20px);
  transition: all 0.3s ease;
}
.product-card:hover .add-to-cart-btn {
  transform: translateY(0);
}

/* Info Produk */
.product-info {
  padding: 1rem;
  text-align: center;
}
.product-category {
  font-size: 0.75rem;
  color: #aaa;
  text-transform: uppercase;
  letter-spacing: 1px;
}
.product-name {
  font-size: 1.1rem;
  font-weight: 500;
  margin: 0.5rem 0;
  color: var(--primary-color);
}
.product-pricing {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.75rem;
  margin-top: 0.5rem;
}

/* Harga Coret */
.original-price {
  font-size: 0.9rem;
  color: #aaa;
  text-decoration: line-through;
}
.current-price {
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--text-color);
}
</style>