import { defineStore } from 'pinia'
import { ref } from 'vue'
import { getProducts } from '@/services/api'

export const useProductsStore = defineStore('products', () => {
  const products = ref([])
  const loading = ref(false)
  const error = ref(null)

  async function fetchProducts() {
    try {
      loading.value = true
      const response = await getProducts()
      products.value = response.data
    } catch (err) {
      error.value = err.message
    } finally {
      loading.value = false
    }
  }

  return { products, loading, error, fetchProducts }
})