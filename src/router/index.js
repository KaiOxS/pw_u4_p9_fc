import {createRouter, createWebHashHistory} from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ActualizarParcialView from '@/views/ActualizarParcialView.vue'
import ActualizarView from '@/views/ActualizarView.vue'
import BorrarView from '@/views/BorrarView.vue'
import GuardarView from '@/views/GuardarView.vue'
import ConsultarPorIdView from '@/views/ConsultarPorIdView.vue'
import ConsultarTodosView from '@/views/ConsultarTodosView.vue'
import LoginView from '@/views/LoginView.vue'

const routes = [
	{
		path: '/',
		name: 'home',
		component: HomeView,
		meta: {
			requiereAutorizacion: true,
			esPublica: false
		}
	},
	{
		path: '/login',
		name: 'login',
		component: LoginView
	},
	{
		path: '/actulizarParcial',
		name: 'actulizarParcial',
		component: ActualizarParcialView,
		meta: {
			requiereAutorizacion: true,
			esPublica: false
		}

	},
	{
		path: '/actualizar',
		name: 'actualizar',
		component: ActualizarView,
		meta: {
			requiereAutorizacion: true,
			esPublica: false
		}
	}, {
		path: '/borrar',
		name: 'borrar',
		component: BorrarView,
		meta: {
			requiereAutorizacion: true,
			esPublica: false
		}
	}, {
		path: '/guardar',
		name: 'guardar',
		component: GuardarView,
		meta: {
			requiereAutorizacion: true,
			esPublica: false
		}
	}, {
		path: '/consultarId',
		name: 'consultarId',
		component: ConsultarPorIdView,
		meta: {
			requiereAutorizacion: false,
			esPublica: false
		}
	}, {
		path: '/consultarTodos',
		name: 'consultarTodos',
		component: ConsultarTodosView,
		meta: {
			requiereAutorizacion: false,
			esPublica: false
		}
	}, {
		path: '/about',
		name: 'about',
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () => import ( /* webpackChunkName: "about" */
				'../views/AboutView.vue')
	}
]


const router = createRouter({history: createWebHashHistory(), routes})

/*Configuracion del guardian de rutas*/
router.beforeEach((to, from, next) => {
	if (to.meta.requiereAutorizacion) {
		const estaAutenticado = localStorage.getItem("estaAutenticado");
		const token = localStorage.getItem("token");

		if (! estaAutenticado) {
			console.log("Redirigiendo al Login");
			next({name: 'login'})
		} else {
			next();
		}

		/*Le envio a una página de login*/
	} else {
		console.log("Pase Libre")
		next();
		/*Le dejo que pase sin autenticación*/
	}
})
export default router
