<template>
  <div class="rencana-container">
    <h1>Modul Latihan Percakapan Bahasa Asing</h1>
    <div class="info-header">
      <h2>Latihan Percakapan Sehari-hari - Tingkat Dasar</h2>
      <p class="subtitle">Bangun kemampuan berbicara melalui latihan percakapan kontekstual dan video interaktif</p>
    </div>

    <!-- Timeline -->
    <div class="timeline">
      <div v-for="(step, index) in learningSteps" :key="index" class="timeline-step">
        <div class="step-header">
          <div class="step-number">{{ index + 1 }}</div>
          <div class="step-duration">{{ step.week }}</div>
        </div>

        <div class="step-content">
          <div v-for="(module, modIndex) in step.modules" :key="module.id" class="module-card">
            <h3>{{ module.nama }}</h3>
            <p>{{ module.deskripsi }}</p>
            <div class="module-meta">
              <span><strong>Durasi:</strong> {{ module.durasi }}</span>
              <span><strong>Sumber:</strong> {{ module.sumber }}</span>
            </div>
            <div class="module-actions">
              <button @click="downloadModule(module)" class="download-btn">
                <i class="fas fa-download"></i> Download Modul
              </button>
              <a v-if="module.video_link" :href="module.video_link" target="_blank" class="video-link">
                <i class="fas fa-play-circle"></i> Video Pembelajaran
              </a>
            </div>
            <div class="progress-container">
              <label>Progress Belajar:</label>
              <input type="range" v-model="module.progress" min="0" max="100">
              <span>{{ module.progress }}%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PercakapanAsingModul',
  data() {
    return {
      learningSteps: [
        {
          week: 'Minggu 1',
          modules: [
            {
              id: 1,
              nama: 'Percakapan Dasar: Perkenalan Diri',
              deskripsi: 'Pelajari bagaimana cara menyapa dan memperkenalkan diri dalam bahasa asing.',
              durasi: '3 jam',
              sumber: 'Modul Percakapan 1.1',
              video_link: 'https://example.com/perkenalan-diri',
              progress: 0
            }
          ]
        },
        {
          week: 'Minggu 2',
          modules: [
            {
              id: 2,
              nama: 'Percakapan di Tempat Umum',
              deskripsi: 'Melatih berbicara saat berada di toko, halte, atau tempat umum lainnya.',
              durasi: '4 jam',
              sumber: 'Modul Percakapan 1.2',
              video_link: 'https://example.com/tempat-umum',
              progress: 0
            }
          ]
        },
        {
          week: 'Minggu 3',
          modules: [
            {
              id: 3,
              nama: 'Menanyakan Arah dan Lokasi',
              deskripsi: 'Gunakan ekspresi yang tepat untuk meminta petunjuk arah dalam bahasa asing.',
              durasi: '3.5 jam',
              sumber: 'Modul Percakapan 1.3',
              video_link: 'https://example.com/arah-lokasi',
              progress: 0
            }
          ]
        },
        {
          week: 'Minggu 4',
          modules: [
            {
              id: 4,
              nama: 'Memesan Makanan di Restoran',
              deskripsi: 'Simulasi percakapan saat memesan makanan dan minuman di restoran.',
              durasi: '4 jam',
              sumber: 'Modul Percakapan 1.4',
              video_link: 'https://example.com/restoran',
              progress: 0
            }
          ]
        },
        {
          week: 'Minggu 5',
          modules: [
            {
              id: 5,
              nama: 'Percakapan Telepon & Janji Temu',
              deskripsi: 'Latihan berbicara via telepon dan membuat janji temu dengan seseorang.',
              durasi: '4.5 jam',
              sumber: 'Modul Percakapan 1.5',
              video_link: 'https://example.com/telepon-janji',
              progress: 0
            }
          ]
        }
      ]
    };
  },
  methods: {
    downloadModule(module) {
      alert(`Mengunduh modul: "${module.nama}" dari ${module.sumber}`);
    }
  }
}
</script>

<style scoped>
.rencana-container {
  max-width: 1000px;
  margin: 0 auto;
  padding: 20px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.info-header {
  text-align: center;
  margin-bottom: 40px;
}

.info-header h2 {
  color: #2c3e50;
  margin-bottom: 10px;
}

.subtitle {
  color: #7f8c8d;
  font-size: 1.1em;
}

.timeline {
  position: relative;
  padding-left: 50px;
}

.timeline::before {
  content: '';
  position: absolute;
  left: 20px;
  top: 0;
  bottom: 0;
  width: 2px;
  background: #e0e0e0;
}

.timeline-step {
  position: relative;
  margin-bottom: 30px;
}

.step-header {
  display: flex;
  align-items: center;
  margin-bottom: 15px;
}

.step-number {
  background: #3498db;
  color: white;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  margin-right: 15px;
  font-size: 1.1em;
}

.step-duration {
  font-weight: bold;
  color: #555;
  font-size: 1.1em;
}

.step-content {
  background: #e0ffff;
  padding: 25px;
  border-radius: 8px;
  box-shadow: 0 3px 10px rgba(0,0,0,0.1);
  margin-left: 30px;
}

.module-card {
  border-bottom: 1px solid #eee;
  padding-bottom: 20px;
  margin-bottom: 20px;
}

.module-card:last-child {
  border-bottom: none;
  margin-bottom: 0;
  padding-bottom: 0;
}

.module-card h3 {
  margin-top: 0;
  color: #2c3e50;
  font-size: 1.3em;
}

.module-card p {
  color: #34495e;
  line-height: 1.6;
}

.module-meta {
  display: flex;
  justify-content: space-between;
  margin: 15px 0;
  color: #555;
  font-size: 0.95em;
}

.module-actions {
  display: flex;
  gap: 10px;
  margin: 15px 0;
}

.download-btn, .video-link {
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s;
  text-decoration: none;
  font-size: 0.9em;
}

.download-btn {
  background: #2ecc71;
  color: white;
  border: none;
}

.download-btn:hover {
  background: #27ae60;
}

.video-link {
  background: #e74c3c;
  color: white;
}

.video-link:hover {
  background: #c0392b;
}

.progress-container {
  margin-top: 20px;
  display: flex;
  align-items: center;
  gap: 10px;
}

.progress-container label {
  font-weight: 600;
  color: #555;
}

.progress-container input[type="range"] {
  flex-grow: 1;
  height: 6px;
  border-radius: 3px;
  background: #ddd;
  outline: none;
}

.progress-container span {
  font-weight: bold;
  color: #3498db;
  min-width: 40px;
  text-align: right;
}

.fas {
  margin-right: 5px;
}
</style>
