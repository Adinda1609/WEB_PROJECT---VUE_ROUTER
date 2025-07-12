<template>
  <div class="cart-item">
    <img :src="item.image" :alt="item.name" class="item-image">
    <div class="item-details">
      <h4 class="item-name">{{ item.name }}</h4>
      <p class="item-price">{{ formatPrice(item.price) }}</p>
      <div class="quantity-control">
        <button @click="decreaseQuantity">-</button>
        <input type="number" :value="item.quantity" @input="updateQuantity" min="1">
        <button @click="increaseQuantity">+</button>
      </div>
    </div>
    <div class="item-total">
      <p>{{ formatPrice(item.price * item.quantity) }}</p>
      <button class="remove-btn" @click="$emit('remove')">Remove</button>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  item: {
    type: Object,
    required: true,
  },
})

const emit = defineEmits(['update-quantity', 'remove'])

const formatPrice = (price) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  }).format(price)
}

const updateQuantity = (event) => {
  const newQuantity = parseInt(event.target.value, 10)
  if (!isNaN(newQuantity) && newQuantity > 0) {
    emit('update-quantity', { itemId: props.item.id, quantity: newQuantity })
  }
}

const decreaseQuantity = () => {
  if (props.item.quantity > 1) {
    emit('update-quantity', { itemId: props.item.id, quantity: props.item.quantity - 1 })
  }
}

const increaseQuantity = () => {
  emit('update-quantity', { itemId: props.item.id, quantity: props.item.quantity + 1 })
}
</script>

<style scoped>
.cart-item {
  display: flex;
  gap: 1rem;
  padding: 1rem 0;
  border-bottom: 1px solid #eee;
  align-items: center;
}
.item-image {
  width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: 8px;
}
.item-details {
  flex-grow: 1;
}
.item-name {
  margin: 0 0 0.25rem;
  font-size: 1rem;
  color: var(--primary-color);
}
.item-price {
  color: var(--text-light);
  font-size: 0.9rem;
}
.quantity-control {
  display: flex;
  align-items: center;
  margin-top: 0.5rem;
}
.quantity-control button {
  width: 30px;
  height: 30px;
  border: 1px solid #ddd;
  background: #f9f9f9;
  cursor: pointer;
}
.quantity-control input {
  width: 40px;
  text-align: center;
  border: 1px solid #ddd;
  border-left: none;
  border-right: none;
  height: 30px;
}
.item-total {
  text-align: right;
}
.item-total p {
  font-weight: bold;
  font-size: 1.1rem;
}
.remove-btn {
  background: none;
  border: none;
  color: #d9534f;
  font-size: 0.8rem;
  cursor: pointer;
  margin-top: 0.5rem;
}
</style>