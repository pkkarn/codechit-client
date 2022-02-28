import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/pages/HomePage.vue'


const routes = [
    {
        path: '/',
        name: 'home',
        component: HomePage
    },
    {
        path: '/about',
        name: 'about',
        component: () => import(/* webpackChunkName: "about" */ '../pages/AboutPage.vue')
    },
    {
        path: '/contact',
        name: 'contact',
        component: () => import(/* webpackChunkName: "about" */ '../pages/ContactPage.vue')
    },
    {
        path: '/videos',
        name: 'videos',
        component: () => import(/* webpackChunkName: "videos" */ '../pages/VideoPage.vue')
    },
]

const router = createRouter({
    mode: 'history',
    history: createWebHistory(),
    routes
})

export default router;