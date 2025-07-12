<template>
  <main class="static-page">
    <div class="container">
      <h1>Konfirmasi Pembayaran</h1>
      <p>Sudah melakukan pembayaran? Silakan isi form di bawah ini untuk mempercepat proses verifikasi pesanan Anda.</p>
      
      <form @submit.prevent="submitConfirmation" class="content-box form-layout">
        <div class="form-group">
          <label for="orderId">Nomor Pesanan (Order ID)</label>
          <input type="text" id="orderId" placeholder="Contoh: BM-12345" required>
        </div>
        <div class="form-group">
          <label for="bankName">Transfer ke Bank</label>
          <select id="bankName" required>
            <option value="BCA">BCA - a/n Bucket Mart</option>
            <option value="Mandiri">Mandiri - a/n Bucket Mart</option>
          </select>
        </div>
        <div class="form-group">
          <label for="accountName">Nama Pemilik Rekening</label>
          <input type="text" id="accountName" placeholder="Nama sesuai di rekening" required>
        </div>
        <div class="form-group">
          <label for="paymentProof">Unggah Bukti Transfer</label>
          <input type="file" id="paymentProof" required>
        </div>
        <button type="submit" class="submit-btn">Kirim Konfirmasi</button>
      </form>
    </div>
  </main>
</template>

<script setup>
const submitConfirmation = () => {
  alert('Terima kasih! Konfirmasi Anda akan segera kami proses.');
}
</script>

<style scoped>
/* Common styles for static pages */
.static-page {
  padding: 8rem 1rem 4rem;
  flex-grow: 1;
  background-color: #fdf7f7;
}
.container {
  max-width: 800px;
  margin: 0 auto;
}
h1 {
  text-align: center;
  margin-bottom: 2rem;
  color: var(--primary-color);
}
p {
  text-align: center;
  margin-bottom: 2rem;
  color: var(--text-light);
}
.content-box {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.07);
}

/* Form specific styles */
.form-layout {
  max-width: 600px;
  margin: 0 auto;
}
.form-group {
  margin-bottom: 1.5rem;
}
.form-group label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
  color: var(--text-color);
}
.form-group input,
.form-group select {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 1rem;
}
.submit-btn {
  width: 100%;
  padding: 0.8rem;
  border: none;
  background-color: var(--secondary-color);
  color: white;
  font-size: 1.1rem;
  font-weight: 600;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s;
}
.submit-btn:hover {
  background-color: var(--primary-color);
}
</style>