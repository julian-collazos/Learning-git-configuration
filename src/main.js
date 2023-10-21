import '@/assets/css/bootstrap.min.css'
import '@/assets/js/bootstrap.bundle.min.js'
import { createApp } from 'vue'
import {createRouter, createWebHashHistory} from 'vue-router'

//importar componentes
import Examples from './Views/Examples.vue'
import Admin from './Views/Admin.vue'
import Home from './App.vue'
import Register from './Views/Registro.vue'

//Crear rutas
const routes = [
  {path:'/Examples', component: Examples},
  {path:'/', component: Home,},
  {path:'/Admin', component: Admin,},
  {path: '/Register', component: Register},
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router;

const app = createApp(Home)

app.use(router)

app.mount('#app')