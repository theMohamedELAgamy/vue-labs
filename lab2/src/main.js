import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {createRouter,createWebHistory} from 'vue-router'
import allemployess from './components/employees.vue'
import empdetailsApp from './components/empdetailsApp.vue'
import createemp from './components/createempApp.vue'

const routes = [
    {
        path:'/emps',
        component:allemployess,
        
    },
    {
        path:'/emps/:id',
        component:empdetailsApp
    },
    {
        path:'/createemp',
        component:createemp
    },
]

const router = createRouter({
    history:createWebHistory(),
    routes,
})

createApp(App).use(router).mount('#app')
