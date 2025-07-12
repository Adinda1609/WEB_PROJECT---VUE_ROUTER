<template>
  <main class="checkout-page">
    <div class="container">
      <div class="page-header">
        <nav class="breadcrumbs-text">
          <span class="step-inactive">Keranjang Belanja</span>
          <span class="separator">&gt;</span>
          <span class="step-active">Detail Pemesanan</span>
          <span class="separator">&gt;</span>
          <span class="step-inactive">Pesanan Selesai</span>
        </nav>
      </div>

      <div class="checkout-notifications">
        <p>Returning customer? <a href="#" @click.prevent="goToLogin">Click here to login</a></p>
        <p>Have a coupon? <a href="#">Click here to enter your code</a></p>
      </div>

      <form @submit.prevent="placeOrder" class="checkout-content">
        <div class="checkout-form">
          <div class="form-section">
            <h3>BILLING DETAILS</h3>
            <div class="form-row">
              <div class="form-group">
                <label for="firstName">Nama Depan *</label>
                <input type="text" id="firstName" v-model="form.billing.firstName" required>
              </div>
              <div class="form-group">
                <label for="lastName">Nama Belakang *</label>
                <input type="text" id="lastName" v-model="form.billing.lastName" required>
              </div>
            </div>
            <div class="form-row">
              <div class="form-group">
                <label for="phone">Telepon *</label>
                <input type="tel" id="phone" v-model="form.billing.phone" required>
              </div>
              <div class="form-group">
                <label for="email">Alamat Email *</label>
                <input type="email" id="email" v-model="form.billing.email" required>
              </div>
            </div>
             <div class="form-group checkbox-group">
              <input type="checkbox" id="newsletter" v-model="form.subscribeNewsletter">
              <label for="newsletter">Berlangganan newsletter</label>
            </div>
          </div>

          <div class="form-section">
            <h3>DETAIL PENERIMA</h3>
             <div class="form-row">
              <div class="form-group">
                <label for="shippingFirstName">Nama Depan *</label>
                <input type="text" id="shippingFirstName" v-model="form.shipping.firstName" required>
              </div>
              <div class="form-group">
                <label for="shippingLastName">Nama Belakang *</label>
                <input type="text" id="shippingLastName" v-model="form.shipping.lastName" required>
              </div>
            </div>
            <div class="form-group">
              <label for="address">Alamat Jalan *</label>
              <input type="text" id="address" v-model="form.shipping.address" required>
            </div>
            <div class="form-row">
              <div class="form-group">
                <label for="city">Kota *</label>
                <input type="text" id="city" v-model="form.shipping.city" required>
              </div>
              <div class="form-group">
                <label for="province">Provinsi *</label>
                <select id="province" v-model="form.shipping.province" required>
                  <option disabled value="">Pilih Provinsi</option>
                  <option v-for="prov in provinces" :key="prov" :value="prov">{{ prov }}</option>
                </select>
              </div>
            </div>
            <div class="form-row">
              <div class="form-group">
                <label for="postcode">Kode Pos *</label>
                <input type="text" id="postcode" v-model="form.shipping.postcode" required>
              </div>
              <div class="form-group">
                <label for="shippingPhone">Telepon Penerima *</label>
                <input type="tel" id="shippingPhone" v-model="form.shipping.phone" required>
              </div>
            </div>
          </div>

           <div class="form-section">
            <div class="form-group">
              <label for="orderNotes">Tuliskan kartu ucapan atau catatan pesanan.</label>
              <textarea id="orderNotes" v-model="form.orderNotes" rows="5"></textarea>
            </div>
          </div>
        </div>

        <div class="order-summary">
          <h3>YOUR ORDER</h3>
          <table class="order-table">
            <thead>
              <tr>
                <th>PRODUCT</th>
                <th>SUBTOTAL</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in cartStore.items" :key="item.id">
                <td>{{ item.name }} × <strong>{{ item.quantity }}</strong></td>
                <td>Rp{{ (item.price * item.quantity).toLocaleString('id-ID') }}</td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <th>Subtotal</th>
                <td>Rp{{ cartStore.totalPrice.toLocaleString('id-ID') }}</td>
              </tr>
              <tr>
                <th>Shipping</th>
                <td>Free shipping</td>
              </tr>
              <tr class="order-total">
                <th>Total</th>
                <td><strong>Rp{{ cartStore.totalPrice.toLocaleString('id-ID') }}</strong></td>
              </tr>
            </tfoot>
          </table>
          <div class="payment-method">
            <h4>Transfer Bank</h4>
            <p>Transfer ke rekening BCA atau Bank Jago kami.</p>
          </div>
          <button type="submit" class="place-order-btn">PLACE ORDER</button>
          <p class="privacy-policy">
            Dengan melakukan pemesanan, berarti kamu telah membaca dan menyetujui <router-link to="/privacy-policy">privacy policy</router-link>.
          </p>
        </div>
      </form>
    </div>
  </main>
</template>

<script setup>
import { reactive, ref, onMounted } from 'vue';
import { useCartStore } from '@/stores/cart';
import { useAuthStore } from '@/stores/auth';
import { useRouter } from 'vue-router';

const cartStore = useCartStore();
const authStore = useAuthStore();
const router = useRouter();

const form = reactive({
  billing: {
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
  },
  shipping: {
    firstName: '',
    lastName: '',
    address: '',
    city: 'Pekanbaru',
    province: 'Riau',
    postcode: '',
    phone: '',
  },
  subscribeNewsletter: true,
  orderNotes: '',
});

const provinces = ref(['Riau', 'DKI Jakarta', 'Jawa Barat', 'Jawa Tengah', 'Jawa Timur', 'Banten', 'Yogyakarta']);

onMounted(() => {
  if (authStore.isAuthenticated && authStore.user) {
    const nameParts = authStore.user.name.split(' ');
    form.billing.firstName = nameParts[0] || '';
    form.billing.lastName = nameParts.slice(1).join(' ') || '';
    form.billing.email = authStore.user.email || '';
  }
});

const goToLogin = () => {
  router.push('/login');
};

const placeOrder = () => {
  console.log('Order Details:', {
    customer: form,
    items: cartStore.items,
    total: cartStore.totalPrice,
  });

  alert('Pesanan Anda telah diterima! Terima kasih telah berbelanja.');
  cartStore.clearCart();
  router.push('/order-complete');
};
</script>

<style scoped>
.checkout-page {
  padding: 8rem 1rem 4rem;
  background-color: #fdf7f7;
}
.page-header {
  text-align: center;
  margin-bottom: 2rem;
}
.breadcrumbs-text { font-size: 1.3rem; font-family: 'Georgia', serif; }
.breadcrumbs-text .separator { margin: 0 1rem; color: #ccc; }
.breadcrumbs-text .step-active { color: var(--primary-color, #5d4e75); font-weight: bold; }
.breadcrumbs-text .step-inactive { color: #aaa; }

.checkout-notifications {
  background-color: #f1f1f1;
  border-top: 2px solid var(--secondary-color, #c49a9a);
  padding: 1rem;
  margin-bottom: 2rem;
  font-size: 0.9rem;
}
.checkout-notifications a {
  color: var(--primary-color, #5d4e75);
  font-weight: 500;
  text-decoration: none;
}
.checkout-content {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 2.5rem;
}
.form-section {
  margin-bottom: 2.5rem;
}
.form-section h3 {
  font-size: 1.3rem;
  margin-bottom: 1.5rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid #eee;
}
.form-row {
  display: flex;
  gap: 1.5rem;
}
.form-group {
  flex: 1;
  margin-bottom: 1rem;
}
.form-group label {
  display: block;
  margin-bottom: 0.5rem;
  font-size: 0.9rem;
  color: #555;
}
.form-group input,
.form-group select,
.form-group textarea {
  width: 100%;
  padding: 0.8rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
}
.checkbox-group {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}
.checkbox-group input {
  width: auto;
}

.order-summary {
  background-color: white;
  padding: 2rem;
  border: 1px solid #eee;
  border-top: 3px solid var(--primary-color);
  border-radius: 8px;
  align-self: flex-start;
  position: sticky;
  top: 120px;
}
.order-summary h3 {
  font-size: 1.3rem;
  margin-bottom: 1rem;
}
.order-table {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 1.5rem;
}
.order-table th, .order-table td {
  padding: 0.8rem 0;
  text-align: left;
  border-bottom: 1px solid #eee;
  font-size: 0.95rem;
}
.order-table td:last-child, .order-table th:last-child {
  text-align: right;
}
.order-total th, .order-total td {
  font-size: 1.2rem;
  border-bottom: none;
}
.payment-method {
  background-color: #f7f7f7;
  padding: 1rem;
  border-radius: 4px;
  margin-bottom: 1.5rem;
  border-left: 3px solid var(--secondary-color);
}
.payment-method p {
  font-size: 0.9rem;
  color: #666;
}
.place-order-btn {
  width: 100%;
  padding: 1rem;
  background-color: var(--secondary-color, #c49a9a);
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s;
}
.place-order-btn:hover {
  background-color: var(--primary-color, #5d4e75);
}
.privacy-policy {
  font-size: 0.8rem;
  text-align: center;
  margin-top: 1rem;
  color: #777;
}

@media (max-width: 992px) {
  .checkout-content {
    grid-template-columns: 1fr;
  }
  .order-summary {
    position: static;
  }
}
@media (max-width: 600px) {
  .form-row {
    flex-direction: column;
    gap: 1rem;
  }
}
</style>