import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ActualizarParcialView from '@/views/ActualizarParcialView.vue'
import ActualizarView from '@/views/ActualizarView.vue'
import BorrarView from '@/views/BorrarView.vue'
import GuardarView from '@/views/GuardarView.vue'
import ConsultarPorIdView from '@/views/ConsultarPorIdView.vue'
import ConsultarTodosView from '@/views/ConsultarTodosView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
   {
    path: '/actulizarParcial',
    name: 'actulizarParcial',
    component: ActualizarParcialView
  },
   {
    path: '/Actualizar',
    name: 'Actualizar',
    component: ActualizarView
  },
   {
    path: '/borrar',
    name: 'borrar',
    component: BorrarView
  },
   {
    path: '/guardar',
    name: 'guardar',
    component: GuardarView
  },
   {
    path: '/consultarId',
    name: 'consultarId',
    component: ConsultarPorIdView
  },
   {
    path: '/consultarTodos',
    name: 'consultarTodos',
    component: ConsultarTodosView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
