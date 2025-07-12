import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from '@/stores/auth'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  },

  routes: [
    // --- Rute Utama ---
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/products',
      name: 'products',
      component: () => import('../views/ProductsView.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/cart',
      name: 'cart',
      component: () => import('../views/CartView.vue')
    },

    // --- Rute Checkout ---
    {
      path: '/checkout',
      name: 'checkout',
      component: () => import('../views/CheckoutView.vue'),
    },
    {
      path: '/order-complete',
      name: 'order-complete',
      component: () => import('../views/OrderCompleteView.vue')
    },

    // --- Rute Autentikasi ---
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../views/RegisterView.vue')
    },
    {
      path: '/order-history',
      name: 'orders',
      component: () => import('../views/OrderHistoryView.vue'),
      meta: { requiresAuth: true }
    },

    // --- Rute dari Link Footer ---
    {
      path: '/payment-confirmation',
      name: 'payment-confirmation',
      component: () => import('../views/static/PaymentConfirmationView.vue')
    },
    {
      path: '/track-order',
      name: 'track-order',
      component: () => import('../views/static/TrackOrderView.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/static/ContactView.vue')
    },
    {
      path: '/faq',
      name: 'faq',
      component: () => import('../views/static/FaqView.vue')
    },
    {
      path: '/terms-of-service',
      name: 'terms-of-service',
      component: () => import('../views/static/TermsView.vue')
    },
    {
      path: '/privacy-policy',
      name: 'privacy-policy',
      component: () => import('../views/static/PrivacyPolicyView.vue')
    },
    {
      path: '/florist-partner',
      name: 'florist-partner',
      component: () => import('../views/static/FloristPartnerView.vue')
    },
    {
      path: '/corporate-customer',
      name: 'corporate-customer',
      component: () => import('../views/static/CorporateCustomerView.vue')
    },
    {
      path: '/career',
      name: 'career',
      component: () => import('../views/static/CareerView.vue')
    },
  ]
})

router.beforeEach((to, from, next) => {
  const authStore = useAuthStore()
  if (to.meta.requiresAuth && !authStore.isAuthenticated) {
    next({ name: 'login' })
  } else {
    next()
  }
})

export default router