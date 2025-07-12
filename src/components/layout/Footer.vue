<template>
  <footer class="site-footer">
    <div class="container footer-main-content">
      <div class="footer-column map-container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.658399581729!2d101.44199967591822!3d0.4965825633939626!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31d5a9a5435af757%3A0x4505a7644917a802!2sUniversitas%20Islam%20Riau!5e0!3m2!1sen!2sid!4v1720812739556!5m2!1sen!2sid"
          width="100%"
          height="100%"
          style="border:0;"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <div class="footer-column info-grid-container">
        <div class="info-block">
          <h4>💐 Bucket Mart</h4>
          <p class="about-text">
            Bucket Mart membantu kebutuhan Anda untuk memperoleh dan mengirimkan bunga secara cepat dan mudah.
          </p>
          <div class="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><i class="fab fa-facebook-f"></i></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
            <a href="mailto:support@bucketmart.com" aria-label="Email"><i class="fas fa-envelope"></i></a>
          </div>
        </div>

        <div class="info-block">
          <h4>Layanan Online</h4>
          <div class="service-hours">
            <p><strong>Senin - Jumat:</strong> 08.00 - 21.00 WIB</p>
            <p><strong>Sabtu:</strong> 09.00 - 17.00 WIB</p>
          </div>
        </div>
        
        <div class="info-block">
          <h4>Pelanggan</h4>
          <ul class="footer-links">
            <li><router-link to="/payment-confirmation">Konfirmasi Pembayaran</router-link></li>
            <li><router-link to="/track-order">Lacak Pesanan</router-link></li>
            <li><router-link to="/contact">Hubungi Kami</router-link></li>
          </ul>
        </div>

        <div class="info-block">
          <h4>Bantuan</h4>
          <ul class="footer-links">
            <li><router-link to="/faq">Pertanyaan Umum</router-link></li>
            <li><router-link to="/terms-of-service">Ketentuan Layanan</router-link></li>
            <li><router-link to="/privacy-policy">Kebijakan Privasi</router-link></li>
          </ul>
        </div>
      </div>
    </div>

    <div class="footer-bottom">
      <div class="container bottom-container">
        <p class="copyright">© 2025 Bucket Mart Created By Sri Adinda All rights reserved</p>
        <div class="extra-links">
          <router-link to="/florist-partner">Florist Partner</router-link>
          <router-link to="/corporate-customer">Corporate Customer</router-link>
          <router-link to="/career">Karir</router-link>
        </div>
      </div>
    </div>

    <a href="https://wa.me/6281806088460" target="_blank" rel="noopener noreferrer" class="whatsapp-fab" aria-label="Chat on WhatsApp">
      <i class="fab fa-whatsapp"></i>
    </a>
  </footer>
</template>

<script setup>
// Tidak ada script yang dibutuhkan untuk komponen ini
</script>

<style scoped>
.site-footer {
  background-color: var(--secondary-color, #c49a9a);
  color: white;
  padding-top: 4rem;
  margin-top: auto;
  font-family: 'Poppins', sans-serif;
}
.footer-main-content {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  padding-bottom: 3rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
}
.footer-column {
  flex: 1;
  min-width: 320px;
}
.map-container {
  min-height: 400px;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 5px 20px rgba(0,0,0,0.2);
}
.info-grid-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  align-content: flex-start;
}
.info-block h4 {
  font-size: 1rem;
  font-weight: 600;
  text-transform: uppercase;
  margin-bottom: 1.25rem;
  position: relative;
  letter-spacing: 0.5px;
}
.info-block h4::after {
  content: '';
  display: block;
  width: 30px;
  height: 2px;
  background-color: rgba(255, 255, 255, 0.7);
  margin-top: 0.5rem;
}
.info-block p, .info-block li {
  font-size: 0.9rem;
  line-height: 1.8;
  opacity: 0.9;
}
.about-text {
  margin-bottom: 1.5rem;
}
.social-icons {
  display: flex;
  gap: 1rem;
}
.social-icons a {
  color: white;
  border: 1px solid rgba(255, 255, 255, 0.5);
  width: 38px;
  height: 38px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  text-decoration: none;
  transition: all 0.3s ease;
}
.social-icons a:hover {
  background-color: white;
  color: var(--secondary-color, #c49a9a);
  transform: translateY(-2px);
}
.footer-links {
  list-style: none;
  padding: 0;
  margin: 0;
}
.footer-links li {
  margin-bottom: 0.75rem;
}
.footer-links a {
  color: white;
  text-decoration: none;
  transition: opacity 0.3s ease;
}
.footer-links a:hover {
  opacity: 1;
  text-decoration: underline;
}
.footer-bottom {
  padding: 1.5rem 0;
  background-color: rgba(0, 0, 0, 0.1);
}
.bottom-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
}
.extra-links a {
  color: white;
  text-decoration: none;
  margin-left: 1.5rem;
  opacity: 0.8;
}
.whatsapp-fab {
  position: fixed;
  bottom: 25px;
  right: 25px;
  background-color: #25D366;
  color: white;
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  font-size: 2.2rem;
  box-shadow: 0 4px 12px rgba(0,0,0,0.2);
  z-index: 999;
  transition: transform 0.3s ease;
}
.whatsapp-fab:hover {
  transform: scale(1.1);
}
@media (max-width: 992px) {
  .footer-main-content {
    flex-direction: column;
  }
}
@media (max-width: 576px) {
  .info-grid-container {
    grid-template-columns: 1fr;
  }
  .bottom-container {
    flex-direction: column;
    text-align: center;
  }
  .extra-links a {
    margin: 0 0.5rem;
  }
}
</style>