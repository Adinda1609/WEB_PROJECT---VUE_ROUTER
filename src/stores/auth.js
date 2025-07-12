import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { login as performLogin, getUserOrders, registerUser } from '@/services/api' // <-- Tambahkan registerUser

export const useAuthStore = defineStore('auth', () => {
  const user = ref(JSON.parse(localStorage.getItem('user')) || null)
  const token = ref(localStorage.getItem('token') || null)
  const orders = ref([])
  
  const isAuthenticated = computed(() => !!user.value && !!token.value)

  async function login(credentials) {
    try {
      const response = await performLogin(credentials)
      const userData = response.data[0]

      if (userData) {
        const fakeToken = btoa(JSON.stringify(credentials))
        
        user.value = { id: userData.id, name: userData.name, email: userData.email }
        token.value = fakeToken
        
        localStorage.setItem('user', JSON.stringify(user.value))
        localStorage.setItem('token', fakeToken)
        
        return true
      }
      throw new Error('Invalid credentials')
    } catch (error) {
      console.error('Login failed:', error)
      return false
    }
  }

  function logout() {
    user.value = null
    token.value = null
    orders.value = []
    localStorage.removeItem('user')
    localStorage.removeItem('token')
  }

  async function fetchOrders() {
    if (!isAuthenticated.value) return
    try {
      const response = await getUserOrders(user.value.id)
      orders.value = response.data
    } catch (error) {
      console.error("Failed to fetch orders:", error)
    }
  }

  // TAMBAHKAN FUNGSI REGISTER INI
  async function register(userData) {
    try {
      await registerUser(userData)
      // Setelah registrasi berhasil, langsung panggil fungsi login
      return await login({ email: userData.email, password: userData.password })
    } catch (error) {
      console.error('Registration failed:', error)
      return false
    }
  }

  return { 
    user, 
    token, 
    isAuthenticated, 
    orders, 
    login, 
    logout, 
    fetchOrders, 
    register // <-- Ekspor fungsi register
  }
})