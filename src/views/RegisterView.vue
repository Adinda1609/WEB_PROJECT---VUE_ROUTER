<template>
  <main class="register-view">
    <div class="register-container">
      <h2>Create Your Account</h2>
      <form @submit.prevent="handleRegister" class="register-form">
        <div class="form-group">
          <label for="name">Full Name</label>
          <input type="text" id="name" v-model="name" required>
        </div>
        <div class="form-group">
          <label for="email">Email</label>
          <input type="email" id="email" v-model="email" required>
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <input type="password" id="password" v-model="password" required>
        </div>
        <p v-if="error" class="error-message">{{ error }}</p>
        <button type="submit" class="register-btn" :disabled="loading">
          {{ loading ? 'Creating account...' : 'Register' }}
        </button>
      </form>
      <p class="login-link">
        Already have an account? <router-link to="/login">Login here</router-link>
      </p>
    </div>
  </main>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/auth'

const router = useRouter()
const authStore = useAuthStore()

const name = ref('')
const email = ref('')
const password = ref('')
const error = ref('')
const loading = ref(false)

const handleRegister = async () => {
  if (!name.value || !email.value || !password.value) {
    error.value = 'All fields are required.'
    return
  }
  loading.value = true
  error.value = ''
  
  const success = await authStore.register({ 
    name: name.value, 
    email: email.value, 
    password: password.value 
  })

  if (success) {
    router.push({ name: 'orders' })
  } else {
    error.value = 'Registration failed. The email might already be in use.'
  }
  loading.value = false
}
</script>

<style scoped>
.register-view {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  padding: 2rem;
}
.register-container {
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
.register-btn {
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
.register-btn:hover {
  background: #b8888a;
}
.error-message {
  color: #d9534f;
  margin-bottom: 1rem;
}
.login-link {
  margin-top: 1.5rem;
  color: var(--text-light);
}
.login-link a {
  color: var(--primary-color);
  font-weight: bold;
}
</style>