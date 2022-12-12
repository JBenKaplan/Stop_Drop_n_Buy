import { createWebHistory, createRouter } from 'vue-router'
import HomePage from './pages/HomePage'
import ProductsPage from './pages/ProductsPage'
import ProductInfo from './pages/ProductInfo'
import CartPage from './pages/CartPage'

const routes = [
  { path: '/', component: HomePage, name: 'Homepage' },
  { path: '/products', component: ProductsPage, name: 'ProductsPage' },
  {
    path: '/products/:product_id',
    component: ProductInfo,
    name: 'ProductInfo'
  },
  { path: '/cart', component: CartPage, name: 'CartPage' }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
