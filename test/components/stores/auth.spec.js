import { setActivePinia, createPinia } from 'pinia'
import { useAuthStore } from '@/stores/auth'
import { describe, it, expect, beforeEach, vi } from 'vitest'

// Mock API service
vi.mock('@/services/api', () => ({
  performLogin: async (credentials) => {
    if (credentials.email === 'user@example.com' && credentials.password === 'password123') {
      return Promise.resolve({ data: [{ id: 1, name: 'John Doe', email: 'user@example.com' }] })
    }
    return Promise.resolve({ data: [] })
  },
  getUserOrders: vi.fn().mockResolvedValue({ data: [] })
}))

describe('Auth Store', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
    localStorage.clear()
    vi.clearAllMocks()
  })

  it('initial state is not authenticated', () => {
    const auth = useAuthStore()
    expect(auth.isAuthenticated).toBe(false)
    expect(auth.user).toBe(null)
  })

  it('login action authenticates user on success', async () => {
    const auth = useAuthStore()
    const credentials = { email: 'user@example.com', password: 'password123' }
    
    const result = await auth.login(credentials)
    
    expect(result).toBe(true)
    expect(auth.isAuthenticated).toBe(true)
    expect(auth.user).not.toBe(null)
    expect(auth.user.email).toBe(credentials.email)
    expect(localStorage.getItem('user')).not.toBe(null)
  })

  it('login action fails with wrong credentials', async () => {
    const auth = useAuthStore()
    const credentials = { email: 'wrong@example.com', password: 'wrong' }
    
    const result = await auth.login(credentials)

    expect(result).toBe(false)
    expect(auth.isAuthenticated).toBe(false)
    expect(auth.user).toBe(null)
    expect(localStorage.getItem('user')).toBe(null)
  })

  it('logout action clears authentication state', async () => {
    const auth = useAuthStore()
    // Login dulu
    await auth.login({ email: 'user@example.com', password: 'password123' })
    expect(auth.isAuthenticated).toBe(true)
    
    // Kemudian logout
    auth.logout()
    
    expect(auth.isAuthenticated).toBe(false)
    expect(auth.user).toBe(null)
    expect(localStorage.getItem('user')).toBe(null)
  })
})