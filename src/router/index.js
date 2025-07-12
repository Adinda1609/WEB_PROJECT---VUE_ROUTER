import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from '@/stores/auth'

const routes = [
  
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/HomeView.vue'),
    meta: { title: 'Home | Bucket Mart' }
  },
  {
    path: '/products',
    name: 'products',
    component: () => import('@/views/ProductsView.vue'),
    meta: { title: 'Products | Bucket Mart' }
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('@/views/AboutView.vue'),
    meta: { title: 'About Us | Bucket Mart' }
  },
  {
    path: '/cart',
    name: 'cart',
    component: () => import('@/views/CartView.vue'),
    meta: { 
      title: 'Your Cart | Bucket Mart'
    }
  },
  // AKHIR BAGIAN YANG HILANG

  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/LoginView.vue'),
    meta: { title: 'Login | Bucket Mart' }
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('@/views/RegisterView.vue'),
    meta: { title: 'Register | Bucket Mart' }
  },
  {
    path: '/order-history',
    name: 'orders',
    component: () => import('@/views/OrderHistoryView.vue'),
    meta: { 
      title: 'Order History | Bucket Mart',
      requiresAuth: true
    }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes, // Pastikan variabel ini berisi semua rute di atas
  scrollBehavior(to, from, savedPosition) {
    return savedPosition || { top: 0 }
  }
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title || 'Bucket Mart'
  
  if (to.meta.requiresAuth) {
    // Pastikan Pinia sudah siap sebelum memanggil store
    const authStore = useAuthStore()
    if (!authStore.isAuthenticated) {
      next({ name: 'login' })
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router