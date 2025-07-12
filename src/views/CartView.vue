<template>
  <main class="cart-view">
    <div class="container">
      <div class="page-header">
        <h1>Shopping Cart Summary</h1>
      </div>
      <div v-if="cart.items.length === 0" class="empty-cart">
        <p>Your cart is empty. Why not add something lovely?</p>
        <router-link to="/products" class="shop-now-btn">Continue Shopping</router-link>
      </div>
      <div v-else class="cart-content">
        <div class="cart-items-list">
          <CartItem
            v-for="item in cart.items"
            :key="item.id"
            :item="item"
            @remove="cart.removeItem(item.id)"
            @update-quantity="updateQuantity"
          />
        </div>
        <div class="cart-summary">
          <h3>Summary</h3>
          <CartTotal :total="cart.totalPrice" />
          <button class="checkout-btn">Proceed to Checkout</button>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import { useCartStore } from '@/stores/cart';
import CartItem from '@/components/cart/CartItem.vue';
import CartTotal from '@/components/cart/CartTotal.vue';

const cart = useCartStore();

const updateQuantity = (payload) => {
  const item = cart.items.find(i => i.id === payload.itemId);
  if (item) {
    item.quantity = Math.max(1, payload.quantity);
  }
};
</script>

<style scoped>
.cart-view {
  padding: 8rem 0 4rem; /* Padding atas agar tidak tertutup navbar */
  flex-grow: 1;
}
.page-header {
  text-align: center;
  margin-bottom: 3rem;
}
.cart-content {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 2rem;
}
.cart-summary {
  background: white;
  padding: 1.5rem;
  border-radius: var(--border-radius);
  box-shadow: var(--shadow-sm);
  align-self: flex-start; /* Agar summary tetap di atas */
  position: sticky; /* Membuat summary "mengikuti" saat scroll */
  top: 100px; /* Jarak dari atas, sesuaikan dengan tinggi navbar */
}
.checkout-btn {
  width: 100%;
  padding: 0.8rem;
  margin-top: 1rem;
  background: var(--primary-color);
  color: white;
  border: none;
  border-radius: 8px;
  font-weight: bold;
}
.empty-cart {
  text-align: center;
  padding: 3rem;
}
.shop-now-btn {
  display: inline-block;
  margin-top: 1rem;
  padding: 0.8rem 1.5rem;
  background: var(--secondary-color);
  color: white;
  border-radius: 8px;
}

/* === BAGIAN RESPONSIVE === */
@media (max-width: 992px) {
  .cart-content {
    grid-template-columns: 1fr; /* Ubah menjadi 1 kolom */
  }
  .cart-summary {
    margin-top: 2rem;
    position: static; /* Hapus sticky di mobile */
  }
}

@media (max-width: 768px) {
  .cart-view {
    padding-top: 6rem; /* Sesuaikan padding atas */
  }
}
</style>