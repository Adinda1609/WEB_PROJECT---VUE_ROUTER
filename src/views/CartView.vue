<template>
  <main class="cart-view-page">
    <div class="container">
     <div class="page-header">
       <nav class="breadcrumbs-text">
        <span class="step-active">Keranjang Belanja</span>
        <span class="separator">&gt;</span>
        <span class="step-inactive">Detail Pemesanan</span>
        <span class="separator">&gt;</span>
        <span class="step-inactive">Pesanan Selesai</span>
      </nav>
    </div>


      <div v-if="cartStore.items.length === 0" class="empty-cart">
        <h2>Keranjang Belanja Anda Kosong</h2>
        <p>Sepertinya Anda belum menambahkan produk apapun ke keranjang.</p>
        <router-link to="/products" class="continue-shopping-btn">Lanjut Belanja</router-link>
      </div>

      <div v-else class="cart-content">
        <div class="cart-items-table">
          <table>
            <thead>
              <tr>
                <th colspan="2">PRODUCT</th>
                <th>PRICE</th>
                <th>QUANTITY</th>
                <th>SUBTOTAL</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in cartStore.items" :key="item.id">
                <td class="product-thumbnail">
                  <button @click="cartStore.removeItem(item.id)" class="remove-item-btn">×</button>
                  <img :src="item.image" :alt="item.name">
                </td>
                <td class="product-name">
                  <router-link :to="`/product/${item.id}`">{{ item.name }}</router-link>
                </td>
                <td class="product-price">Rp{{ item.price.toLocaleString('id-ID') }}</td>
                <td class="product-quantity">
                  <div class="quantity-control">
                    <button @click="decreaseQuantity(item)">-</button>
                    <input type="number" :value="item.quantity" @input="updateQuantity(item, $event)" min="1">
                    <button @click="increaseQuantity(item)">+</button>
                  </div>
                </td>
                <td class="product-subtotal">Rp{{ (item.price * item.quantity).toLocaleString('id-ID') }}</td>
              </tr>
            </tbody>
          </table>
          <router-link to="/products" class="continue-shopping-btn">← CONTINUE SHOPPING</router-link>
        </div>

        <div class="cart-summary">
          <h3>CART TOTALS</h3>
          <div class="summary-row">
            <span>Subtotal</span>
            <span>Rp{{ cartStore.totalPrice.toLocaleString('id-ID') }}</span>
          </div>
          <div class="summary-row">
            <span>Shipping</span>
            <div class="shipping-details">
              <span>Free shipping</span>
              <span>Shipping to <strong>DKI Jakarta</strong></span>
              <a href="#">Change address</a>
            </div>
          </div>
          <div class="summary-row total-row">
            <span>Total</span>
            <span>Rp{{ cartStore.totalPrice.toLocaleString('id-ID') }}</span>
          </div>
          <router-link to="/checkout" class="checkout-btn">PROCEED TO CHECKOUT</router-link>

          <div class="coupon-section">
            <p>🏷️ Coupon</p>
            <form @submit.prevent="applyCoupon">
              <input type="text" v-model="couponCode" placeholder="Coupon code">
              <button type="submit">Apply coupon</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import { ref } from 'vue';
import { useCartStore } from '@/stores/cart';

const cartStore = useCartStore();
const couponCode = ref('');

const increaseQuantity = (item) => {
  cartStore.updateItemQuantity(item.id, item.quantity + 1);
};

const decreaseQuantity = (item) => {
  if (item.quantity > 1) {
    cartStore.updateItemQuantity(item.id, item.quantity - 1);
  }
};

const updateQuantity = (item, event) => {
  const newQuantity = parseInt(event.target.value, 10);
  if (!isNaN(newQuantity) && newQuantity > 0) {
    cartStore.updateItemQuantity(item.id, newQuantity);
  }
};

const applyCoupon = () => {
  if(couponCode.value) {
    alert(`Coupon "${couponCode.value}" applied! (Fitur simulasi)`);
  } else {
    alert('Please enter a coupon code.');
  }
};
</script>

<style scoped>
.cart-view-page {
  padding: 6rem 1rem 4rem;
  background-color: #fff;
}
.page-header {
  text-align: center;
  margin-bottom: 2rem;
  font-size: 1.2rem;
  color: #aaa;
}
.step-active {
  color: #333;
  font-weight: 600;
}
.empty-cart {
  text-align: center;
  padding: 4rem;
}

.cart-content {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 2rem;
}

/* Tabel Item */
.cart-items-table table {
  width: 100%;
  border-collapse: collapse;
}
.cart-items-table th, .cart-items-table td {
  padding: 1rem;
  text-align: left;
  border-bottom: 1px solid #eee;
}
.cart-items-table th {
  text-transform: uppercase;
  font-size: 0.8rem;
  font-weight: 600;
  color: #777;
}
.product-thumbnail {
  display: flex;
  align-items: center;
}
.product-thumbnail img {
  width: 70px;
  height: 70px;
  object-fit: cover;
  margin-left: 1rem;
}
.remove-item-btn {
  border: 1px solid #ddd;
  background: white;
  color: #aaa;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  cursor: pointer;
  font-size: 1rem;
  line-height: 22px;
}
.product-name a {
  color: var(--primary-color, #5d4e75);
  text-decoration: none;
  font-weight: 500;
}
.product-price, .product-subtotal {
  font-weight: 500;
}
.quantity-control {
  display: flex;
  align-items: center;
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
.continue-shopping-btn {
  display: inline-block;
  margin-top: 1.5rem;
  padding: 0.8rem 1.5rem;
  border: 2px solid var(--secondary-color, #c49a9a);
  color: var(--secondary-color, #c49a9a);
  background: none;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s;
}
.continue-shopping-btn:hover {
  background: var(--secondary-color, #c49a9a);
  color: white;
}

/* Ringkasan Total */
.cart-summary {
  background-color: #f9f9f9;
  padding: 1.5rem;
  border: 1px solid #eee;
  align-self: flex-start;
}
.cart-summary h3 {
  font-size: 1.3rem;
  margin-bottom: 1.5rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid #eee;
}
.summary-row {
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
}
.summary-row span:first-child {
  font-weight: 500;
}
.summary-row span:last-child,
.shipping-details {
  text-align: right;
}
.shipping-details span {
  display: block;
}
.shipping-details a {
  color: var(--primary-color, #5d4e75);
  font-size: 0.9rem;
}
.total-row {
  font-size: 1.2rem;
  font-weight: bold;
}
.checkout-btn {
  display: block;
  width: 100%;
  padding: 1rem;
  background-color: var(--secondary-color, #c49a9a);
  color: white;
  text-align: center;
  text-decoration: none;
  font-size: 1.1rem;
  font-weight: 600;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s;
}
.checkout-btn:hover {
  background-color: var(--primary-color, #5d4e75);
}
.coupon-section {
  margin-top: 1.5rem;
  padding-top: 1.5rem;
  border-top: 1px solid #eee;
}
.coupon-section form {
  display: flex;
  margin-top: 0.5rem;
}
.coupon-section input {
  flex-grow: 1;
  border: 1px solid #ddd;
  padding: 0.75rem;
}
.coupon-section button {
  padding: 0.75rem 1rem;
  border: none;
  background: #aaa;
  color: white;
  cursor: pointer;
}

/* Responsive */
@media (max-width: 992px) {
  .cart-content {
    grid-template-columns: 1fr;
  }
}
@media (max-width: 768px) {
  .cart-items-table {
    overflow-x: auto; /* Membuat tabel bisa di-scroll horizontal jika terlalu lebar */
  }
  .product-price, .product-quantity {
    min-width: 120px;
  }
}

.page-header {
  text-align: center;
  margin-bottom: 2rem;
  /* Hapus padding-top dari .cart-view-page dan pindahkan ke sini jika perlu */
}

.breadcrumbs-text {
  font-size: 1.3rem;
  font-family: 'Georgia', serif; /* Font serif untuk tampilan klasik */
  letter-spacing: 0.5px;
}

.breadcrumbs-text .separator {
  margin: 0 1rem;
  color: #ccc;
}

.breadcrumbs-text .step-active {
  color: var(--primary-color, #5d4e75);
  font-weight: bold;
}

.breadcrumbs-text .step-inactive {
  color: #aaa;
}
</style>