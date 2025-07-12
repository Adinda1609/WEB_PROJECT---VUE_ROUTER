<template>
  <div class="cart-total">
    <div class="total-row">
      <span>Subtotal</span>
      <span>{{ formatPrice(total) }}</span>
    </div>
    <div class="total-row grand-total">
      <span>Grand Total</span>
      <span>{{ formatPrice(total) }}</span>
    </div>
  </div>
</template>

<script setup>
defineProps({
  total: {
    type: Number,
    required: true,
  },
})

const formatPrice = (price) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  }).format(price)
}
</script>

<style scoped>
.cart-total {
  margin-top: 1.5rem;
  padding-top: 1.5rem;
  border-top: 1px solid #eee;
}
.total-row {
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
  font-size: 1rem;
}
.grand-total {
  font-weight: bold;
  font-size: 1.2rem;
  color: var(--primary-color);
}
</style>