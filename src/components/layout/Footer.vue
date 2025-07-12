<template>
  <footer class="footer-map" id="contact">
    <div class="footer-container">
      <div class="footer-map-left">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.9015848529367!2d106.74503797441584!3d-6.14207916024976!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f72d42123f03%3A0xc3b2e77b0c3f5d1!2sRuko%20Cordoba%20Blok%20G%20No.3%2C%20Pantai%20Indah%20Kapuk%2C%20Jakarta%20Utara%2C%20DKI%20Jakarta!5e0!3m2!1sen!2sid!4v1700000000000!5m2!1sen!2sid"
          width="100%"
          height="100%"
          style="border:0;"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <div class="footer-map-right">
        <div class="contact-wrapper">
          <h3>LOKASI BUCKET MART</h3>

          <div class="location-group">
            <strong>Bucket Mart Dyndaa</strong>
            <p>
              Jl.Karya Bersama<br />
              Kota Pekanbaru, Marpoyan Damai
            </p>
            <ul class="contact-list">
              <li><i class="fas fa-envelope"></i> <a href="mailto:support@bucketmart.com">support@bucketmart.com</a></li>
              <li><i class="fas fa-phone"></i> P: (021) 569 45795</li>
              <li><i class="fab fa-whatsapp"></i> W: 0818-0608-8460</li>
              <li><i class="fab fa-whatsapp"></i> W: 0878-7903-8018</li>
            </ul>
          </div>

          <div class="location-group">
            <strong>Bucket Mart Dyloka</strong>
            <p>Jl.Rumah Jagan No.10, Indragiri  Hulu</p>
            <ul class="contact-list">
              <li><i class="fab fa-whatsapp"></i> W: 0813-7219-3813</li>
            </ul>
          </div>

          <div class="location-group">
            <strong>Jam Operasional</strong>
            <p>
              Senin - Sabtu, 08.00 - 22.00<br />
              Minggu, 10.00 - 17.00
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="footer-bottom">
      <p>© 2025 Bucket Mart created by Sri Adinda. All rights reserved.</p>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style scoped>
/* Import Font Awesome jika Anda belum memilikinya secara global */
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css');
/* Import Google Font - contoh: Poppins atau Open Sans */
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');


/* Gaya utama untuk footer */
.footer-map {
  background-color: #ffffff; /* Putih bersih */
  color: #333;
  margin-top: auto;
  font-family: 'Poppins', sans-serif; /* Font yang lebih modern dan mudah dibaca */
  border-top: 1px solid #e0e0e0;
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.05); /* Sedikit bayangan untuk mengangkat footer */
}

/* Kontainer untuk peta dan info */
.footer-container {
  display: flex;
  flex-wrap: wrap;
  max-width: 1400px;
  margin: 0 auto;
  padding: 2rem 1rem; /* Tambahkan padding agar tidak terlalu mepet tepi */
  gap: 2rem; /* Memberi jarak antar kolom */
}

/* Kolom kiri (peta) */
.footer-map-left {
  flex: 1;
  min-width: 320px;
  min-height: 450px; /* Menjamin tinggi minimum */
  border-radius: 8px; /* Sudut sedikit membulat */
  overflow: hidden; /* Penting untuk radius di iframe */
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1); /* Bayangan lebih jelas untuk peta */
}

.footer-map-left iframe {
  display: block;
  height: 100%;
  width: 100%;
}

/* Kolom kanan (info kontak) */
.footer-map-right {
  flex: 1;
  min-width: 320px;
  display: flex; /* Mengaktifkan flexbox */
  align-items: flex-start; /* Mengatur item di awal (atas) secara vertikal */
  justify-content: center; /* Horizontal tengah */
  padding: 1rem 0; /* Sesuaikan padding */
}

.contact-wrapper {
  max-width: 400px;
  width: 100%; /* Memastikan wrapper memenuhi lebar max-width */
  text-align: left; /* Default text alignment */
}

.footer-map-right h3 {
  margin-top: 0;
  margin-bottom: 2.5rem; /* Jarak lebih besar */
  font-size: 1.8rem; /* Ukuran font lebih besar */
  font-weight: 700; /* Lebih tebal */
  color: #1a1a1a;
  position: relative; /* Untuk underline efek */
  padding-bottom: 0.5rem;
}

/* Efek underline untuk judul */
.footer-map-right h3::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: 0;
  width: 60px; /* Lebar underline */
  height: 4px; /* Ketebalan underline */
  background-color: #007bff; /* Warna biru */
  border-radius: 2px;
}


.location-group {
  margin-bottom: 2rem; /* Jarak antar grup info */
  padding-bottom: 1rem; /* Padding di bawah setiap grup */
  border-bottom: 1px dashed #eee; /* Garis putus-putus samar */
}

.location-group:last-child {
  margin-bottom: 0;
  border-bottom: none; /* Tidak ada border di grup terakhir */
}

.location-group strong {
  font-size: 1.2rem; /* Ukuran font lebih besar */
  font-weight: 600;
  color: #222; /* Warna lebih gelap */
  display: block; /* Agar mengambil baris baru */
  margin-bottom: 0.75rem;
}

.location-group p {
  margin: 0.5rem 0;
  line-height: 1.8; /* Jarak baris lebih lega */
  color: #555;
}

.contact-list {
  list-style: none;
  padding: 0;
  margin: 1rem 0 0 0; /* Sesuaikan margin */
}

.contact-list li {
  margin-bottom: 0.8rem; /* Jarak antar item daftar */
  color: #555;
  display: flex; /* Untuk sejajarkan ikon dan teks */
  align-items: center; /* Tengah secara vertikal */
}

.contact-list a {
  color: #007bff;
  text-decoration: none;
  transition: color 0.3s ease-in-out; /* Transisi lebih halus */
}

.contact-list a:hover {
  color: #0056b3;
  text-decoration: underline; /* Tambahkan underline saat hover */
}

.contact-list i {
  margin-right: 12px; /* Jarak lebih besar */
  color: #888;
  width: 20px; /* Agar ikon sejajar */
  text-align: center;
  font-size: 1.1rem; /* Ukuran ikon sedikit lebih besar */
}

/* Baris copyright di bagian bawah */
.footer-bottom {
  background-color: #f8f9fa;
  text-align: center;
  padding: 1.5rem 2rem;
  font-size: 0.95rem; /* Ukuran font sedikit lebih besar */
  color: #6c757d;
  border-top: 1px solid #e0e0e0;
  letter-spacing: 0.5px; /* Sedikit spasi antar huruf */
}

.footer-bottom p {
  margin: 0;
}

/* Desain Responsif */
@media (max-width: 820px) {
  .footer-container {
    flex-direction: column;
    padding: 1.5rem 1rem; /* Sesuaikan padding untuk mobile */
  }

  .footer-map-left {
    min-height: 300px; /* Ketinggian peta lebih pendek di mobile */
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08); /* Bayangan lebih ringan */
  }

  .footer-map-right {
    padding: 1rem; /* Sesuaikan padding */
    align-items: center; /* Tengah secara vertikal untuk keseluruhan blok */
  }

  .contact-wrapper {
    margin: 0 auto;
    text-align: center; /* Tengah semua teks di mobile */
  }

  .footer-map-right h3 {
    text-align: center;
    margin-bottom: 2rem;
  }

  .footer-map-right h3::after {
    left: 50%; /* Tengah underline */
    transform: translateX(-50%); /* Tengah underline */
  }

  .location-group {
    text-align: center;
    padding-bottom: 1.5rem;
  }

  .location-group strong {
    text-align: center;
  }

  .contact-list {
    display: block; /* Kembalikan ke block untuk mobile */
    text-align: center; /* Tengah daftar kontak */
    margin-top: 1rem;
    padding-left: 0; /* Pastikan tidak ada padding tambahan */
  }

  .contact-list li {
    justify-content: center; /* Tengah ikon dan teks di list */
  }
}

@media (max-width: 480px) {
  .footer-map-right h3 {
    font-size: 1.6rem;
  }
  .location-group strong {
    font-size: 1.1rem;
  }
  .footer-map-left {
    min-height: 250px;
  }
}
</style>