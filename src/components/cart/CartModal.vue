<template>
  <div class="cart-modal" v-if="cartStore.isOpen" @click.self="cartStore.toggleCart">
    <div class="cart-content">
      <div class="cart-header">
        <h2>Your Shopping Cart</h2>
        <button class="close-btn" @click="cartStore.toggleCart">×</button>
      </div>
      
      <div class="cart-body">
        <div v-if="cartStore.items.length === 0" class="empty-cart">
          <p>Your cart is empty</p>
          <button class="continue-shopping" @click="cartStore.toggleCart">
            Continue Shopping
          </button>
        </div>
        
        <template v-else>
          <div class="cart-items">
            <CartItem
              v-for="item in cartStore.items"
              :key="item.id"
              :item="item"
              @remove="cartStore.removeItem(item.id)"
              @update-quantity="updateQuantity"
            />
          </div>
          
          <CartTotal :total="cartStore.totalPrice" />
          
          <div class="cart-actions">
            <button class="clear-cart" @click="handleClearCart">
              Clear Cart
            </button>
            <button class="checkout-btn" @click="handleCheckout">
              Proceed to Checkout
            </button>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useCartStore } from '@/stores/cart'
import { useRouter } from 'vue-router'
import CartItem from './CartItem.vue'
import CartTotal from './CartTotal.vue'

const cartStore = useCartStore()
const router = useRouter()

const updateQuantity = (payload) => {
  const item = cartStore.items.find(i => i.id === payload.itemId)
  if (item) {
    const newQuantity = Math.max(1, payload.quantity)
    if (newQuantity !== item.quantity) {
        item.quantity = newQuantity
    }
  }
}

const handleClearCart = () => {
  if (confirm('Are you sure you want to clear the cart?')) {
    cartStore.clearCart()
  }
}

const handleCheckout = () => {
    cartStore.toggleCart() // Tutup modal
    router.push({ name: 'cart' }) // Arahkan ke halaman ringkasan keranjang
}
</script>

<style scoped>
.cart-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: flex-end;
  z-index: 1000;
  animation: fadeIn 0.3s ease;
}

.cart-content {
  width: 100%;
  max-width: 450px;
  height: 100%;
  background: white;
  box-shadow: -5px 0 15px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  animation: slideIn 0.3s ease;
}

.cart-header {
  padding: 1.5rem;
  border-bottom: 1px solid #eee;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.cart-header h2 {
  font-size: 1.5rem;
  color: #5d4e75;
  margin: 0;
}

.close-btn {
  background: none;
  border: none;
  font-size: 1.8rem;
  cursor: pointer;
  color: #7a6b83;
  transition: color 0.2s;
}

.close-btn:hover {
  color: #c49a9a;
}

.cart-body {
  flex: 1;
  overflow-y: auto;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
}

.empty-cart {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  text-align: center;
}

.empty-cart p {
  font-size: 1.2rem;
  color: #7a6b83;
  margin-bottom: 1.5rem;
}

.continue-shopping {
  background: linear-gradient(45deg, #dab4b4, #c49a9a);
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.continue-shopping:hover {
  background: linear-gradient(45deg, #c49a9a, #b8888a);
  transform: translateY(-2px);
}

.cart-items {
  flex-grow: 1;
}

.cart-actions {
  display: flex;
  gap: 1rem;
  margin-top: 1.5rem;
  padding-top: 1.5rem;
  border-top: 1px solid #eee;
}

.clear-cart {
  flex: 1;
  background: #f8f4f8;
  color: #7a6b83;
  border: 1px solid #dab4b4;
  padding: 0.75rem;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.clear-cart:hover {
  background: #f0e6ea;
}

.checkout-btn {
  flex: 2;
  background: linear-gradient(45deg, #5d4e75, #7a6b83);
  color: white;
  border: none;
  padding: 0.75rem;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.checkout-btn:hover {
  background: linear-gradient(45deg, #7a6b83, #5d4e75);
  transform: translateY(-2px);
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes slideIn {
  from { transform: translateX(100%); }
  to { transform: translateX(0); }
}
</style>