<template>
  <main class="static-page">
    <div class="container">
      <h1>Lacak Pesanan Anda</h1>
      <p>Masukkan nomor pesanan Anda untuk melihat status pengiriman terkini.</p>
      
      <form @submit.prevent="trackOrder" class="content-box form-layout">
        <div class="form-group">
          <label for="trackOrderId">Nomor Pesanan (Order ID)</label>
          <input type="text" id="trackOrderId" placeholder="Contoh: BM-12345" required>
        </div>
        <button type="submit" class="submit-btn">Lacak Sekarang</button>
      </form>
    </div>
  </main>
</template>

<script setup>
const trackOrder = () => {
  alert('Fitur pelacakan sedang dalam pengembangan. Silakan hubungi kami untuk informasi lebih lanjut.');
}
</script>

<style scoped>
/* Styles are similar to PaymentConfirmationView, copy-paste or use a shared CSS file */
.static-page { padding: 8rem 1rem 4rem; flex-grow: 1; background-color: #fdf7f7; }
.container { max-width: 800px; margin: 0 auto; }
h1 { text-align: center; margin-bottom: 2rem; color: var(--primary-color); }
p { text-align: center; margin-bottom: 2rem; color: var(--text-light); }
.content-box { background: white; padding: 2rem; border-radius: 12px; box-shadow: 0 4px 15px rgba(0,0,0,0.07); }
.form-layout { max-width: 600px; margin: 0 auto; }
.form-group { margin-bottom: 1.5rem; }
.form-group label { display: block; margin-bottom: 0.5rem; font-weight: 500; color: var(--text-color); }
.form-group input { width: 100%; padding: 0.75rem; border: 1px solid #ddd; border-radius: 8px; font-size: 1rem; }
.submit-btn { width: 100%; padding: 0.8rem; border: none; background-color: var(--secondary-color); color: white; font-size: 1.1rem; font-weight: 600; border-radius: 8px; cursor: pointer; transition: background-color 0.3s; }
.submit-btn:hover { background-color: var(--primary-color); }
</style>