<template>
  <article class="product-card">
    <div class="card-image">
      <img :src="product.image" :alt="product.name" class="product-image">
      <span class="card-badge" v-if="product.badge">{{ product.badge }}</span>
    </div>
    
    <div class="card-content">
      <h3>{{ product.name }}</h3>
      <p class="product-description">{{ product.description }}</p>
      
      <div class="price-section">
        <span class="price">{{ formatPrice(product.price) }}</span>
        <span class="old-price" v-if="product.oldPrice">
          {{ formatPrice(product.oldPrice) }}
        </span>
      </div>
      
      <button 
        class="add-to-cart-btn"
        @click.stop="$emit('add-to-cart', product)"
      >
        <span class="icon">🛒</span>
        <span>Add to Cart</span>
      </button>
    </div>
  </article>
</template>

<script setup>
defineProps({
  product: {
    type: Object,
    required: true
  }
})

defineEmits(['add-to-cart'])

const formatPrice = (price) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  }).format(price)
}
</script>

<style scoped>
.product-card {
  background: white;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(218, 165, 180, 0.15);
  transition: all 0.3s ease;
  cursor: pointer;
  position: relative;
  display: flex;
  flex-direction: column;
}

.product-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(218, 165, 180, 0.25);
}

.card-image {
  position: relative;
  height: 200px;
  overflow: hidden;
}

.product-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.product-card:hover .product-image {
  transform: scale(1.05);
}

.card-badge {
  position: absolute;
  top: 12px;
  right: 12px;
  background: linear-gradient(45deg, #f48fb1, #c49a9a);
  color: white;
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 600;
  box-shadow: 0 3px 8px rgba(244, 143, 177, 0.3);
}

.card-content {
  padding: 1.25rem;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
}

.card-content h3 {
  font-size: 1.1rem;
  color: #5d4e75;
  margin-bottom: 0.5rem;
  font-weight: 600;
}

.product-description {
  color: #7a6b83;
  font-size: 0.9rem;
  margin-bottom: 1rem;
  line-height: 1.5;
  flex-grow: 1;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.price-section {
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.price {
  font-size: 1.1rem;
  font-weight: 700;
  color: #c49a9a;
}

.old-price {
  font-size: 0.9rem;
  color: #999;
  text-decoration: line-through;
}

.add-to-cart-btn {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  background: linear-gradient(45deg, #dab4b4, #c49a9a);
  color: white;
  border: none;
  padding: 0.75rem;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: auto; /* Mendorong tombol ke bawah */
}

.add-to-cart-btn:hover {
  background: linear-gradient(45deg, #c49a9a, #b8888a);
  transform: translateY(-2px);
}

.add-to-cart-btn .icon {
  font-size: 1.1rem;
}
</style>