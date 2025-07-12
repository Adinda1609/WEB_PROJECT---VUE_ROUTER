<template>
  <main class="login-view">
    <div class="login-container">
      <h2>Login to Your Account</h2>
      <form @submit.prevent="handleLogin" class="login-form">
        <div class="form-group">
          <label for="email">Email</label>
          <input type="email" id="email" v-model="email" required>
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <input type="password" id="password" v-model="password" required>
        </div>
        <p v-if="error" class="error-message">{{ error }}</p>
        <button type="submit" class="login-btn" :disabled="loading">
          {{ loading ? 'Logging in...' : 'Login' }}
        </button>
      </form>
      <p class="register-link">
        Don't have an account? <router-link to="/register">Register here</router-link>
      </p>
    </div>
  </main>
</template>

<script setup>
// ... (script tidak berubah)
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/auth'

const router = useRouter()
const authStore = useAuthStore()

const email = ref('user@example.com')
const password = ref('password123')
const error = ref('')
const loading = ref(false)

const handleLogin = async () => {
  loading.value = true
  error.value = ''
  const success = await authStore.login({ email: email.value, password: password.value })
  if (success) {
    router.push({ name: 'orders' })
  } else {
    error.value = 'Invalid email or password. Please try again.'
  }
  loading.value = false
}
</script>

<style scoped>
/* ... (style yang ada tidak berubah) */
.login-view {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  padding: 2rem;
}
.login-container {
  width: 100%;
  max-width: 400px;
  padding: 2rem;
  background: white;
  border-radius: var(--border-radius);
  box-shadow: var(--shadow-md);
  text-align: center;
}
h2 {
  margin-bottom: 1.5rem;
  color: var(--primary-color);
}
.form-group {
  margin-bottom: 1.5rem;
  text-align: left;
}
label {
  display: block;
  margin-bottom: 0.5rem;
  color: var(--text-light);
}
input {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #dab4b4;
  border-radius: 8px;
  font-size: 1rem;
}
.login-btn {
  width: 100%;
  padding: 0.8rem;
  border: none;
  border-radius: 8px;
  background: var(--secondary-color);
  color: white;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.3s;
}
.login-btn:hover {
  background: #b8888a;
}
.error-message {
  color: #d9534f;
  margin-bottom: 1rem;
}

/* TAMBAHAN STYLE UNTUK LINK */
.register-link {
  margin-top: 1.5rem;
  color: var(--text-light);
}
.register-link a {
  color: var(--primary-color);
  font-weight: bold;
  text-decoration: none;
}
.register-link a:hover {
  text-decoration: underline;
}
</style>