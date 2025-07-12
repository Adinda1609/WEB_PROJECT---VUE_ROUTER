<template>
  <main class="order-history-view">
    <div class="container">
      <div class="page-header">
        <h1>Your Order History</h1>
        <p v-if="authStore.user">Welcome back, {{ authStore.user.name }}!</p>
      </div>
      <div v-if="authStore.orders.length === 0" class="no-orders">
        <p>You haven't placed any orders yet.</p>
        <router-link to="/products" class="shop-now-btn">Shop Now</router-link>
      </div>
      <div v-else class="orders-list">
        <div v-for="order in authStore.orders" :key="order.id" class="order-card">
          <div class="order-header">
            <h3>Order #{{ order.id }}</h3>
            <span>Date: {{ new Date(order.date).toLocaleDateString() }}</span>
          </div>
          <ul class="order-items">
            <li v-for="item in order.items" :key="item.productId">
              {{ item.name }} (x{{ item.quantity }}) - ${{ item.price.toFixed(2) }}
            </li>
          </ul>
          <div class="order-total">
            <strong>Total: ${{ order.total.toFixed(2) }}</strong>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import { onMounted } from 'vue'
import { useAuthStore } from '@/stores/auth'

const authStore = useAuthStore()

onMounted(() => {
  authStore.fetchOrders()
})
</script>

<style scoped>
.order-history-view {
  padding: 2rem 0 4rem;
  flex-grow: 1;
}
.page-header {
  text-align: center;
  margin-bottom: 3rem;
}
.order-card {
  background: white;
  padding: 1.5rem;
  border-radius: var(--border-radius);
  box-shadow: var(--shadow-sm);
  margin-bottom: 1.5rem;
}
.order-header {
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #eee;
  padding-bottom: 1rem;
  margin-bottom: 1rem;
}
.order-items {
  list-style: none;
  margin-bottom: 1rem;
  padding-left: 0;
}
.order-items li {
  padding: 0.25rem 0;
}
.order-total {
  text-align: right;
  font-size: 1.2rem;
  color: var(--primary-color);
  margin-top: 1rem;
  padding-top: 1rem;
  border-top: 1px solid #eee;
}
.no-orders {
  text-align: center;
  padding: 3rem;
  background: #fff;
  border-radius: var(--border-radius);
}
.shop-now-btn {
  display: inline-block;
  margin-top: 1rem;
  padding: 0.8rem 1.5rem;
  background-color: var(--secondary-color);
  color: white;
  border-radius: 8px;
  font-weight: 600;
  text-decoration: none;
}
</style>