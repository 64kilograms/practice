import Vue from "vue"
import VueRouter from "vue-router"

const Home = () => import('../views/home/index.vue')
const category = () => import('../views/category/index.vue')
const shoppingCar = () => import('../views/shoppingCar/index.vue')
const user = () => import('../views/user/index.vue')
// 1 安装插件
Vue.use(VueRouter)
// 2 创建路由对象
const routes = [
	{
		path: '',
		redirect: '/home', //默认显示哪一页
	},
	{
		path: '/home',
		component: Home
	},
	{
		path: '/category',
		component: category
	},
	{
		path: '/shoppingCar',
		component: shoppingCar
	},
	{
		path: '/user',
		component: user
	}
]
const router = new VueRouter({
	routes,
	mode: 'history'
})

export default router