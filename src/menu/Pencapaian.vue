<template>
  <div class="stats-container">
    <h2 class="title">Statistik Belajar Kamu</h2>

    <div class="summary-cards">
      <div class="card">
        <h3>{{ totalHours }} jam</h3>
        <p>Total Waktu Belajar</p>
      </div>
      <div class="card">
        <h3>{{ completedModules }}/{{ totalModules }}</h3>
        <p>Modul Diselesaikan</p>
      </div>
      <div class="card">
        <h3>{{ averageProgress }}%</h3>
        <p>Rata-rata Progress</p>
      </div>
    </div>

    <!-- Grafik Mingguan -->
    <div class="chart-section">
      <h4>Progress Mingguan</h4>
      <canvas id="weeklyChart"></canvas>
    </div>
  </div>
</template>

<script>
import Chart from 'chart.js/auto';

export default {
  name: 'LearningStats',
  data() {
    return {
      totalHours: 9,
      completedModules: 1,
      totalModules: 4,
      weeklyProgress: [
        { week: 'M1', progress: 100 },
        { week: 'M2', progress: 70 },
        { week: 'M3', progress: 40 },
        { week: 'M4', progress: 0 }
      ]
    };
  },
  computed: {
    averageProgress() {
      const total = this.weeklyProgress.reduce((sum, w) => sum + w.progress, 0);
      return Math.round(total / this.weeklyProgress.length);
    }
  },
  mounted() {
    const ctx = document.getElementById('weeklyChart');
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: this.weeklyProgress.map(item => item.week),
        datasets: [{
          label: 'Progress (%)',
          data: this.weeklyProgress.map(item => item.progress),
          backgroundColor: '#4e79a7',
          borderRadius: 8,
        }]
      },
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true,
            max: 100
          }
        }
      }
    });
  }
};
</script>

<style scoped>
.stats-container {
  padding: 2rem;
  background: #f9fbfd;
  border-radius: 16px;
}

.title {
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
  color: #2c3e50;
}

.summary-cards {
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
}

.card {
  flex: 1;
  background: #eaf1ff;
  padding: 1rem;
  border-radius: 10px;
  text-align: center;
}

.card h3 {
  font-size: 1.8rem;
  color: #3366cc;
}

.card p {
  color: #555;
}

.chart-section {
  background: #fff;
  padding: 1rem;
  border-radius: 10px;
}
</style>
