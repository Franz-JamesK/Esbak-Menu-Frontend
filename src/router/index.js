import { createRouter, createWebHistory } from 'vue-router'
import EsbakSplash2 from '@/views/EsbakSplash2.vue'
import EsbakSplash3 from '@/views/EsbakSplash3.vue'
import ClientView1 from '@/views/ClientView1.vue'
import EsbakSplash from '@/views/EsbakSplash.vue'
import ClientOrderView from '@/views/ClientOrderView.vue'
import WaiterReg from '@/views/WaiterReg.vue'
import WaiterLog from '@/views/WaiterLog.vue'
import ManagerDash from '@/views/ManagerDash.vue'
const routes = [
  {
    path: '/',
    name: 'esbaksplash2',
    component: EsbakSplash2
  },
  {
    path: '/esbaksplash',
    name: 'esbaksplash',
    component: EsbakSplash
  },
  {
    path: '/esbaksplash3',
    name: 'esbaksplash3',
    component: EsbakSplash3
  },
  {
    path: '/client1',
    name: 'client1',
    component: ClientView1
  },
  {
    path: '/clientorderview',
    name: 'clientorderview',
    component: ClientOrderView
  },
  {
    path: '/waiterreg',
    name: 'waiterreg',
    component: WaiterReg
  },
  {
    path: '/waiterlog',
    name: 'waiterlog',
    component: WaiterLog
  },
  {
    path: '/managerdash',
    name: 'ManagerDash',
    component: ManagerDash // Your Component for the Manager's dashboard
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
