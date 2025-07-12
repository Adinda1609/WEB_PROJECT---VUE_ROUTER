# 💐 Bucket Mart!

**Bucket Mart** adalah aplikasi E-Commerce (toko online) yang fungsional dan kaya fitur, dibangun dengan teknologi modern seperti Vue.js 3, Vite, dan Pinia. Aplikasi ini dirancang dengan estetika yang elegan dan menawan, terinspirasi dari toko bunga, serta menyediakan pengalaman berbelanja online yang lengkap dan mulus.

Aplikasi ini terhubung ke backend palsu menggunakan JSON Server dan berkomunikasi melalui Axios, memungkinkan simulasi proses belanja dari melihat produk, menambah ke keranjang, hingga autentikasi pengguna secara penuh.

---

## 📌 Tentang Project

Repository ini dibuat untuk memenuhi tugas pada mata kuliah Praktikum Pemrograman Berbasis Komponen (PBK). Aplikasi ini merupakan implementasi nyata dari sebuah situs e-commerce modern yang menerapkan berbagai konsep inti dan lanjutan dari ekosistem Vue.js, termasuk:

**Konsep Dasar Vue:**
1. **Declarative Rendering:** Menampilkan data produk dan keranjang secara dinamis.
2. **Attribute Bindings:** Mengikat atribut HTML seperti src pada gambar produk atau class untuk gaya responsif.
3. **Event Listeners:** Merespons interaksi pengguna seperti @click pada tombol "Tambah ke Keranjang" atau @submit pada form login.
4. **Form Bindings:** Menggunakan v-model untuk sinkronisasi data pada form login, register, dan pencarian produk.
5. **Conditional Rendering:** Menggunakan v-if dan v-else untuk menampilkan status login, isi keranjang, atau pesan saat keranjang kosong.
6. **List Rendering:** Menggunakan v-for untuk menampilkan daftar produk dan item di keranjang.

---

**Konsep Lanjutan & Ekosistem:**
1. State Management dengan Pinia: Mengelola data global secara terpusat untuk keranjang belanja (cart), produk (products), dan status autentikasi (auth).
2. Navigasi SPA dengan Vue Router: Membuat aplikasi single-page dengan rute yang dinamis untuk halaman Home, Products, About, Login, dll.
3. Komunikasi API: Menggunakan Axios untuk melakukan operasi CRUD (Create, Read, Update, Delete) ke JSON Server.
4. Arsitektur Berbasis Komponen: Memecah UI menjadi komponen-komponen kecil yang dapat digunakan kembali seperti Navbar, ProductCard, CartItem, dll.

---

## 👩‍🎓 Informasi Mahasiswa
Nama: Sri Adinda
NPM: 233510515
Kelas: 4F
Program Studi: Teknik Informatika

---

## ✨ Fitur Utama 
1. **Manajemen Keranjang Belanja:**
Tambah, perbarui kuantitas, dan hapus item dari keranjang.
Data keranjang tersimpan di Local Storage, sehingga tidak hilang saat halaman di-refresh.
Tampilan modal keranjang yang interaktif tanpa perlu pindah halaman.

2. **Katalog Produk Dinamis:**
Menampilkan produk yang diambil dari API.
Fitur pencarian produk secara real-time.
Fitur filter produk berdasarkan kategori.

3. **Autentikasi Pengguna:**
Sistem registrasi dan login pengguna yang fungsional.
Status login yang persisten di seluruh aplikasi menggunakan Pinia.
Navigasi yang berubah secara dinamis berdasarkan status autentikasi (misalnya, menampilkan "Logout" dan "Orders").

4. **Riwayat Pesanan (Order History):** Halaman khusus bagi pengguna yang sudah login untuk melihat riwayat pesanan mereka.

5. **State Management Terpusat:** Menggunakan Pinia dengan tiga store utama: cartStore, productsStore, dan authStore.

6. **Desain Responsif:** Tampilan yang dioptimalkan dan berfungsi dengan baik di berbagai ukuran perangkat, dari desktop hingga mobile.

7. **Backend Persisten:** Menggunakan JSON Server untuk menyimulasikan REST API, memastikan data produk dan pengguna tersimpan secara konsisten.


```bash
# 1. Clone Repository
git clone https://github.com/Adinda1609/WEB_PROJECT---VUE_ROUTER.git
cd nama-repo

# 2. Install Dependencies
npm install 

# 3. Jalankan Backend JSON Server
npm run api

# 4. Jalankan Frontend Vite Dev Server
npm run dev
