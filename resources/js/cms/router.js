import Vue from 'vue'
import VueRouter from 'vue-router'

import Dashboard from './views/Dashboard/Dashboard'
import Signin from './views/Auth/Signin'
import Posts from "./views/Posts/Posts"
import Emballage from "./views/Emballage/Emballage"
import Team from "./views/Team/Team"
import Faq from "./views/Faq/Faq";

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Dashboard',
        component: Dashboard,
        meta: { requiresAdmin: true }
    },
    {
        path: '/signin',
        name: 'Signin',
        component: Signin
    },
    {
        path: '/posts',
        name: 'Posts',
        component: Posts,
        meta: { requiresAdmin: true }
    },
    {
        path: '/emballage',
        name: 'Emballage',
        component: Emballage,
        meta: { requiresAdmin: true }
    },
    {
        path: '/team',
        name: 'Team',
        component: Team,
        meta: { requiresAdmin: true }
    },
    {
        path: '/faq',
        name: 'Faq',
        component: Faq,
        meta: { requiresAdmin: true }
    },
]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router
