import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useCartStore = defineStore('cart', () => {
  const items = ref([])
  const isOpen = ref(false)
  
  const totalItems = computed(() => 
    items.value.reduce((total, item) => total + item.quantity, 0)
  )
  
  const totalPrice = computed(() =>
    items.value.reduce((total, item) => total + (item.price * item.quantity), 0)
  )

  function addItem(product) {
    const existingItem = items.value.find(item => item.id === product.id)
    if (existingItem) {
      existingItem.quantity++
    } else {
      items.value.push({ ...product, quantity: 1 })
    }
  }

  function removeItem(itemId) {
    items.value = items.value.filter(item => item.id !== itemId)
  }

  function toggleCart() {
    isOpen.value = !isOpen.value
  }

  function clearCart() {
    items.value = []
  }

  return { 
    items, 
    isOpen, 
    totalItems, 
    totalPrice, 
    addItem, 
    removeItem, 
    toggleCart,
    clearCart
  }
})