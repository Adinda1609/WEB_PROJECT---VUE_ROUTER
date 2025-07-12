<template>
  <main class="static-page">
    <div class="container">
      <h1>Ketentuan Layanan</h1>
      
      <div class="content-box text-content">
        <h2>1. Penerimaan Pesanan</h2>
        <p>Semua pesanan yang masuk akan diproses pada jam operasional kami. Pesanan dianggap sah setelah pelanggan melakukan pembayaran dan konfirmasi.</p>
        
        <h2>2. Pembayaran</h2>
        <p>Pembayaran harus dilunasi sebelum pesanan diproses dan dikirim. Kami menerima pembayaran melalui transfer bank ke rekening yang tertera.</p>
        
        <h2>3. Pengiriman</h2>
        <p>Kami akan melakukan pengiriman sesuai dengan alamat dan estimasi waktu yang diberikan. Keterlambatan yang disebabkan oleh kurir atau kondisi di luar kendali kami bukan merupakan tanggung jawab Bucket Mart.</p>

        <h2>4. Pembatalan</h2>
        <p>Pembatalan pesanan hanya dapat dilakukan maksimal 24 jam sebelum waktu pengiriman yang dijadwalkan.</p>
      </div>
    </div>
  </main>
</template>

<style scoped>
.static-page { padding: 8rem 1rem 4rem; flex-grow: 1; background-color: #fdf7f7; }
.container { max-width: 800px; margin: 0 auto; }
h1 { text-align: center; margin-bottom: 2rem; color: var(--primary-color); }
.content-box { background: white; padding: 2rem; border-radius: 12px; box-shadow: 0 4px 15px rgba(0,0,0,0.07); }
.text-content h2 { margin-top: 1.5rem; margin-bottom: 0.5rem; color: var(--primary-color); }
.text-content h2:first-child { margin-top: 0; }
.text-content p { line-height: 1.7; color: var(--text-light); text-align: justify; }
</style>