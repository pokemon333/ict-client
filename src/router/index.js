import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AdminDashboard from '../views/admin/AdminDashboard.vue'
import Sliders from '../views/admin/Sliders.vue'
import Categories from '../views/admin/Categories.vue'
import Contents from '../views/admin/Contents.vue'
import Customers from '../views/admin/Customers.vue'
import Roles from '../views/admin/Roles.vue'
import Messages from '../views/admin/Messages.vue'
import Comments from '../views/admin/Messages.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path:'/admin',
      name:'admin',
      component: AdminDashboard,
      children:[
        {
          path:'sliders',
          component:Sliders
        },
        {
          path:'categories',
          component:Categories
        },
        {
          path:'contents',
          component:Contents
        },
        {
          path:'customers',
          component:Customers
        },
        {
          path:'roles',
          component:Roles
        },
        {
          path:'messages',
          component:Messages
        },
        {
          path:'comments',
          component:Comments
        },
      ]
    }

  ]
})

export default router
