import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:3000',
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json'
  }
})

// Products
export const getProducts = () => api.get('/products')
export const getProductById = (id) => api.get(`/products/${id}`)

// Auth
export const login = (credentials) => api.get(`/users?email=${credentials.email}&password=${credentials.password}`)
export const registerUser = (userData) => api.post('/users', userData) // <-- TAMBAHAN

// Orders
export const createOrder = (orderData) => api.post('/orders', orderData)
export const getUserOrders = (userId) => api.get(`/orders?userId=${userId}`)

export default api