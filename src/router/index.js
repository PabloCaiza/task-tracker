import {createRouter,createWebHistory} from 'vue-router'
import About from '../views/About.vue'
import Home from '../views/Home.vue'


const routes=[
    {path:'/about',component:About},
    {path:'/',component:Home}
]

const router=createRouter({
    history: createWebHistory(),
    routes
})

export default router;