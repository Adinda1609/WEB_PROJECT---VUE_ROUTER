<template>
  <main class="static-page">
    <div class="container">
      <h1>Hubungi Kami</h1>
      <p>Kami siap membantu Anda. Silakan hubungi kami melalui informasi di bawah ini.</p>
      
      <div class="content-box">
        <div class="contact-details">
          <div class="contact-item">
            <h4><i class="fas fa-map-marker-alt"></i> Alamat</h4>
            <p>Jl. Karya Bersama, Kota Pekanbaru, Riau</p>
          </div>
          <div class="contact-item">
            <h4><i class="fas fa-phone"></i> Telepon</h4>
            <p>(021) 569-45795</p>
          </div>
          <div class="contact-item">
            <h4><i class="fab fa-whatsapp"></i> WhatsApp</h4>
            <p>0818-0608-8460</p>
          </div>
          <div class="contact-item">
            <h4><i class="fas fa-envelope"></i> Email</h4>
            <p>support@bucketmart.com</p>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
.static-page { padding: 8rem 1rem 4rem; flex-grow: 1; background-color: #fdf7f7; }
.container { max-width: 800px; margin: 0 auto; }
h1 { text-align: center; margin-bottom: 1rem; color: var(--primary-color); }
p { text-align: center; margin-bottom: 2rem; color: var(--text-light); }
.content-box { background: white; padding: 2rem; border-radius: 12px; box-shadow: 0 4px 15px rgba(0,0,0,0.07); }
.contact-details { display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; }
.contact-item { text-align: center; }
.contact-item h4 { margin-bottom: 0.5rem; color: var(--primary-color); }
.contact-item i { margin-right: 0.5rem; }
.contact-item p { margin: 0; color: var(--text-color); }

@media (max-width: 600px) {
  .contact-details { grid-template-columns: 1fr; }
}
</style>