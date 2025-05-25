<template>
  <div class="bahasa-container">
    <h1>Pilih Bahasa & Level</h1>

    <div class="selection-card">
      <div class="form-group">
        <label for="kategori">Kategori Bahasa:</label>
        <select id="kategori" v-model="selectedKategori" @change="resetBahasa">
          <option value="">-- Pilih Kategori --</option>
          <option v-for="kategori in kategoriList" :key="kategori.id" :value="kategori">
            {{ kategori.nama }}
          </option>
        </select>
      </div>

      <div class="form-group">
        <label for="bahasa">Bahasa:</label>
        <select id="bahasa" v-model="selectedBahasa" :disabled="!selectedKategori">
          <option value="">-- Pilih Bahasa --</option>
          <option v-for="bahasa in bahasaList" :key="bahasa.id" :value="bahasa">
            {{ bahasa.nama }}
          </option>
        </select>
      </div>

      <div class="form-group">
        <label for="level">Level:</label>
        <select id="level" v-model="selectedLevel" :disabled="!selectedBahasa">
          <option value="">-- Pilih Level --</option>
          <option value="Beginner">Beginner</option>
          <option value="Intermediate">Intermediate</option>
          <option value="Advanced">Advanced</option>
        </select>
      </div>

      <button
        class="submit-btn"
        :disabled="!isFormComplete"
        @click="submitSelection"
      >
        Mulai Belajar
      </button>
    </div>

    <div v-if="selectedBahasa" class="bahasa-info">
      <h2>Informasi Bahasa</h2>
      <div class="info-card">
        <h3>{{ selectedBahasa.nama }}</h3>
        <p><strong>Asal:</strong> {{ selectedBahasa.asal }}</p>
        <p><strong>Karakteristik:</strong> {{ selectedBahasa.karakteristik }}</p>
        <p><strong>Contoh Materi:</strong> {{ selectedBahasa.contohMateri }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PilihBahasaPage',
  data() {
    return {
      selectedKategori: null,
      selectedBahasa: null,
      selectedLevel: null,
      kategoriList: [
        {
          id: 1,
          nama: 'Asia Timur',
          bahasa: [
            {
              id: 101,
              nama: 'Bahasa Jepang',
              asal: 'Jepang',
              karakteristik: 'Menggunakan tiga sistem tulisan: Hiragana, Katakana, dan Kanji',
              contohMateri: 'Perkenalan diri, angka, salam sehari-hari'
            },
            {
              id: 102,
              nama: 'Bahasa Korea',
              asal: 'Korea Selatan',
              karakteristik: 'Menggunakan huruf Hangul dengan struktur tata bahasa khas',
              contohMateri: 'Kalimat sederhana, kosakata makanan, percakapan dasar'
            }
          ]
        },
        {
          id: 2,
          nama: 'Eropa',
          bahasa: [
            {
              id: 201,
              nama: 'Bahasa Inggris',
              asal: 'Inggris/Amerika',
              karakteristik: 'Bahasa internasional dengan struktur yang fleksibel',
              contohMateri: 'Tenses dasar, percakapan sehari-hari, kosakata umum'
            },
            {
              id: 202,
              nama: 'Bahasa Jerman',
              asal: 'Jerman',
              karakteristik: 'Struktur kalimat kompleks dan penggunaan gender',
              contohMateri: 'Perkenalan, kata benda berjenis, struktur kalimat dasar'
            }
          ]
        }
      ]
    }
  },
  computed: {
    bahasaList() {
      return this.selectedKategori ? this.selectedKategori.bahasa : []
    },
    isFormComplete() {
      return this.selectedKategori && this.selectedBahasa && this.selectedLevel
    }
  },
  methods: {
    resetBahasa() {
      this.selectedBahasa = null
      this.selectedLevel = null
    },
    submitSelection() {
      const data = {
        kategori: this.selectedKategori.nama,
        bahasa: this.selectedBahasa.nama,
        level: this.selectedLevel
      }
      alert(`Selamat! Kamu memilih:\nKategori: ${data.kategori}\nBahasa: ${data.bahasa}\nLevel: ${data.level}`)
    }
  }
}
</script>

<style scoped>
.bahasa-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

h1 {
  color: #003049;
  text-align: center;
  margin-bottom: 30px;
}

.selection-card {
  background: white;
  border-radius: 10px;
  padding: 25px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin-bottom: 30px;
}

.form-group {
  margin-bottom: 20px;
}

label {
  display: block;
  margin-bottom: 8px;
  font-weight: 600;
  color: #5f9ea0;
}

select {
  width: 100%;
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-size: 16px;
  background-color: #f7f9fc;
}

.submit-btn {
  width: 100%;
  padding: 12px;
  background-color: #5f9ea0;
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 16px;
  cursor: pointer;
  transition: background 0.3s;
  margin-top: 15px;
}

.submit-btn:hover {
  background-color: #8dd7bf;
}

.submit-btn:disabled {
  background-color: #9db4c0;
  cursor: not-allowed;
}

.bahasa-info {
  background: white;
  border-radius: 10px;
  padding: 25px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.info-card {
  margin-top: 15px;
  padding: 15px;
  border-left: 4px solid #ffd60a;
  background-color: #f7f9fc;
}

h3 {
  color: #8dd7bf;
  margin-top: 0;
}

@media (max-width: 768px) {
  .bahasa-container {
    padding: 15px;
  }

  .selection-card, .bahasa-info {
    padding: 15px;
  }
}
</style>
