<template>
  <main class="order-complete-page">
    <div class="container">
      <div class="page-header">
        <nav class="breadcrumbs-text">
          <span class="step-inactive">Keranjang Belanja</span>
          <span class="separator">&gt;</span>
          <span class="step-inactive">Detail Pemesanan</span>
          <span class="separator">&gt;</span>
          <span class="step-active">Pesanan Selesai</span>
        </nav>
      </div>

      <div class="confirmation-box">
        <div class="icon-wrapper">
          <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-check-circle"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
        </div>
        <h1>Terima Kasih!</h1>
        <p class="subtitle">Pesanan Anda telah kami terima dan sedang diproses.</p>

        <div class="order-details-summary" v-if="latestOrder">
          <h3>Ringkasan Pesanan</h3>
          <ul>
            <li><span>Nomor Pesanan:</span> <strong>{{ latestOrder.id }}</strong></li>
            <li><span>Tanggal:</span> <strong>{{ new Date(latestOrder.date).toLocaleDateString('id-ID') }}</strong></li>
            <li><span>Total:</span> <strong>Rp{{ latestOrder.total.toLocaleString('id-ID') }}</strong></li>
            <li><span>Metode Pembayaran:</span> <strong>Transfer Bank</strong></li>
          </ul>
        </div>
        
        <div class="payment-instructions">
          <h4>Langkah Selanjutnya</h4>
          <p>Silakan lakukan pembayaran ke salah satu rekening di bawah ini dan lakukan konfirmasi pembayaran agar pesanan Anda dapat segera kami kirim.</p>
          <div class="bank-details">
            <p><strong>BCA:</strong> 1234567890 (a/n Bucket Mart)</p>
            <p><strong>Bank Jago:</strong> 9876543210 (a/n Bucket Mart)</p>
          </div>
        </div>

        <div class="action-buttons">
          <router-link to="/order-history" class="action-btn secondary">Lihat Riwayat Pesanan</router-link>
          <router-link to="/products" class="action-btn primary">Lanjut Belanja</router-link>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useAuthStore } from '@/stores/auth'; // Asumsi data order ada di auth store

const authStore = useAuthStore();
const latestOrder = ref(null);

onMounted(async () => {
  // Ambil data order dari store
  await authStore.fetchOrders();
  // Tampilkan order terakhir yang dibuat
  if (authStore.orders.length > 0) {
    latestOrder.value = authStore.orders[authStore.orders.length - 1];
  }
});
</script>

<style scoped>
.order-complete-page {
  padding: 8rem 1rem 4rem;
  flex-grow: 1;
  background-color: #f9f9f9;
}
.container {
  max-width: 800px;
  margin: 0 auto;
}

/* Breadcrumbs Styling */
.page-header {
  text-align: center;
  margin-bottom: 2.5rem;
}
.breadcrumbs-text {
  font-size: 1.3rem;
  font-family: 'Georgia', serif;
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

/* Confirmation Box Styling */
.confirmation-box {
  background-color: white;
  padding: 2.5rem;
  border-radius: 12px;
  text-align: center;
  box-shadow: 0 5px 25px rgba(0,0,0,0.08);
  border: 1px solid #eee;
}
.icon-wrapper {
  color: #28a745; /* Warna hijau untuk ikon sukses */
  margin-bottom: 1rem;
}
.confirmation-box h1 {
  font-size: 2.2rem;
  color: var(--primary-color);
  margin-bottom: 0.5rem;
}
.subtitle {
  font-size: 1.1rem;
  color: var(--text-light);
  margin-bottom: 2.5rem;
}

/* Order Details Summary Styling */
.order-details-summary {
  text-align: left;
  margin-bottom: 2.5rem;
  border-top: 1px dashed #ddd;
  border-bottom: 1px dashed #ddd;
  padding: 1.5rem 0;
}
.order-details-summary h3 {
  margin-bottom: 1rem;
  text-align: center;
}
.order-details-summary ul {
  list-style: none;
  padding: 0;
  max-width: 400px;
  margin: 0 auto;
}
.order-details-summary li {
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 0;
  font-size: 0.95rem;
}
.order-details-summary span {
  color: var(--text-light);
}
.order-details-summary strong {
  color: var(--text-color);
}

/* Payment Instructions Styling */
.payment-instructions {
  margin-bottom: 2.5rem;
}
.payment-instructions h4 {
  font-size: 1.2rem;
  margin-bottom: 1rem;
}
.payment-instructions p {
  color: var(--text-light);
}
.bank-details {
  background-color: #f9f9f9;
  border: 1px dashed #ddd;
  padding: 1rem;
  margin-top: 1rem;
  border-radius: 8px;
}
.bank-details p {
  margin: 0.5rem 0;
}

/* Action Buttons Styling */
.action-buttons {
  display: flex;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
}
.action-btn {
  padding: 0.8rem 1.5rem;
  border: 2px solid var(--secondary-color);
  border-radius: 50px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
}
.action-btn.primary {
  background-color: var(--secondary-color);
  color: white;
}
.action-btn.primary:hover {
  background-color: var(--primary-color);
  border-color: var(--primary-color);
}
.action-btn.secondary {
  color: var(--secondary-color);
}
.action-btn.secondary:hover {
  background-color: var(--secondary-color);
  color: white;
}
</style>