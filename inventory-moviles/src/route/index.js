import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../components/Home.vue'
import AppProduct from '../components/AppProduct.vue'
import AppMovement from '../components/AppMovement.vue'
import QueryMovement from  '../components/QueryMovement.vue'
import QueryProduct from '../components/QueryProduct.vue'
import Login from '../components/Login.vue'
import RegisterUser from '../components/RegisterUser.vue'
import EditMovement from '../components/EditMovement.vue'
import EditProduct from '../components/EditProduct.vue'

const routes = [
    {
        path: '/',
        component: Home

    },
    {
        path: '/home',
        component: Home
    },
    {
        path: '/login',
        component: Login
    },
    {
            path: '/register-user',
            component: RegisterUser
    },
    {
        path: '/product',
        component: AppProduct
    },
    {
        path: '/movement',
        component: AppMovement
    },
    {
        path: '/query-movement',
        component: QueryMovement
    },
    {
        path: '/query-product',
        component: QueryProduct
    },
    {
        path: '/edit-movement/:id',
        name: 'EditMovement',
        component: EditMovement,
        props: true
    },
    {
        path:'/edit-movement/:id',
        name:'EditProduct',
        component: EditProduct,
        props: true
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router