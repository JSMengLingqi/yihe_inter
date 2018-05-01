import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)


const header = r => require.ensure([], () => r(require('@/page/header')), 'header');

const routes = [
	{
		path: '/',
		component: header
	}
]
export default new Router({
  routes,
  strict: process.env.NODE_ENV !== 'production'
})
