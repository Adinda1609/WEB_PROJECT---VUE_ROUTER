import { defineStore } from 'pinia'
import { ref, computed, watch } from 'vue'

export const useCartStore = defineStore('cart', () => {
  const items = ref(JSON.parse(localStorage.getItem('bucketMartCart')) || []);
  const isOpen = ref(false);

  const totalPrice = computed(() => {
    return items.value.reduce((total, item) => total + (item.price * item.quantity), 0);
  });

  const totalItems = computed(() => {
    return items.value.reduce((total, item) => total + item.quantity, 0);
  });

  const toggleCart = () => {
    isOpen.value = !isOpen.value;
  };

  const addItem = (product) => {
    const existingItem = items.value.find(item => item.id === product.id);
    if (existingItem) {
      existingItem.quantity++;
    } else {
      items.value.push({ ...product, quantity: 1 });
    }
    isOpen.value = true;
  };

  const removeItem = (itemId) => {
    items.value = items.value.filter(item => item.id !== itemId);
  };

  const updateItemQuantity = (itemId, quantity) => {
    const item = items.value.find(item => item.id === itemId);
    if (item) {
      if (quantity > 0) {
        item.quantity = quantity;
      } else {
        removeItem(itemId);
      }
    }
  };

  const clearCart = () => {
    items.value = [];
  };

  watch(items, (newItems) => {
    localStorage.setItem('bucketMartCart', JSON.stringify(newItems));
  }, { deep: true });

  return {
    items,
    isOpen,
    totalPrice,
    totalItems,
    toggleCart,
    addItem,
    removeItem,
    updateItemQuantity,
    clearCart,
  };
});