import { setActivePinia, createPinia } from 'pinia'
import { useCartStore } from '@/stores/cart'
import { describe, it, expect, beforeEach } from 'vitest'

describe('Cart Store', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('adds a new item to the cart', () => {
    const cart = useCartStore()
    const product = { id: 1, name: 'Test', price: 10 }
    
    expect(cart.items.length).toBe(0)
    cart.addItem(product)
    expect(cart.items.length).toBe(1)
    expect(cart.items[0]).toEqual({ ...product, quantity: 1 })
  })

  it('increments quantity when adding an existing item', () => {
    const cart = useCartStore()
    const product = { id: 1, name: 'Test', price: 10 }
    
    cart.addItem(product)
    cart.addItem(product)
    
    expect(cart.items.length).toBe(1)
    expect(cart.items[0].quantity).toBe(2)
  })

  it('calculates total items correctly', () => {
    const cart = useCartStore()
    cart.items = [
      { id: 1, quantity: 2, price: 10 },
      { id: 2, quantity: 3, price: 5 }
    ]
    
    expect(cart.totalItems).toBe(5)
  })

  it('calculates total price correctly', () => {
    const cart = useCartStore()
    cart.items = [
      { id: 1, price: 10, quantity: 2 },
      { id: 2, price: 15, quantity: 1 }
    ]
    
    expect(cart.totalPrice).toBe(35)
  })

  it('removes an item from the cart', () => {
    const cart = useCartStore()
    cart.items = [{ id: 1, price: 10, quantity: 1 }]
    
    cart.removeItem(1)
    expect(cart.items.length).toBe(0)
  })

  it('clears the cart', () => {
    const cart = useCartStore()
    cart.items = [
        { id: 1, price: 10, quantity: 2 },
        { id: 2, price: 15, quantity: 1 }
    ]
    cart.clearCart()
    expect(cart.items.length).toBe(0)
    expect(cart.totalItems).toBe(0)
    expect(cart.totalPrice).toBe(0)
  })
})