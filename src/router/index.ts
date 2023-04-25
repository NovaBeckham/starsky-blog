import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
	{
		path: '/',
		component: () => import('@/views/home'),
		meta: {
			title: '首页',
		},
	},
	{
		path: '/404',
		component: () => import('@/views/404'),
		meta: {
			title: '404',
		},
	},
]

const router = createRouter({
	history: createWebHistory(),
	routes,
})

export default router
