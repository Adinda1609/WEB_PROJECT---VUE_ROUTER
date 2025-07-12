<template>
  <main class="static-page">
    <div class="container">
      <h1>Pertanyaan Umum (FAQ)</h1>
      <p>Halaman ini sedang dalam pengembangan. Konten akan segera ditambahkan.</p>
      
      <div class="faq-item">
        <h4>Bagaimana cara memesan?</h4>
        <p>Anda dapat memilih produk yang Anda inginkan, menambahkannya ke keranjang, lalu melanjutkan ke proses checkout.</p>
      </div>

      <div class="faq-item">
        <h4>Apakah pengiriman bisa di hari yang sama?</h4>
        <p>Untuk pesanan sebelum jam 12 siang, kami menyediakan layanan pengiriman di hari yang sama untuk area Pekanbaru.</p>
      </div>

    </div>
  </main>
</template>

<style scoped>
.static-page {
  padding: 8rem 0 4rem; /* Padding atas agar tidak tertutup navbar */
  flex-grow: 1;
}
.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 0 1rem;
}
h1 {
  text-align: center;
  margin-bottom: 2rem;
  color: var(--primary-color);
}
.faq-item {
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  margin-bottom: 1rem;
  box-shadow: 0 2px 10px rgba(0,0,0,0.05);
}
.faq-item h4 {
  margin: 0 0 0.5rem 0;
}
</style>