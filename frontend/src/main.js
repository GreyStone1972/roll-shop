import { createApp } from 'vue'
//import Vue from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
//import { NestFactory } from "@nestjs/core";
//import { AppModule } from "./app.module";

import App from './App.vue'
import Create from './components/AddProduct.vue'
import Edit from './components/EditProduct.vue'
import Index from './components/ProductList.vue'
import Cart from './components/Cart.vue'
import ProductsOnPage from './components/ProductsOnPage.vue'
import Orders from './components/Orders.vue'
import EditOrder from './components/EditOrder.vue'
import store from './store'



const app = createApp(App)


//Vue.use(createRouter)

//Vue.config.productionTip = false

const routes = [
  {
    name: 'Create',
    path: '/create',
    component: Create
  },
  {
    name: 'Edit',
    path: '/edit/:id',
    component: Edit
  },
  {
    name: 'Index',
    path: '/ProductList',
    component: Index
  },
  {
    name: 'Cart',
    path: '/Cart',
    component: Cart
  },
  {
    name: 'ProductsOnPage',
    path: '/',
    component: ProductsOnPage
  },
  {
    name: 'Orders',
    path: '/Orders',
    component: Orders
  },
  {
    name: 'EditOrder',
    path: '/EditOrder/:id',
    component: EditOrder
  }
]

const router = createRouter({  
    history: createWebHistory(), 
    routes: routes 
})

app.use(router)
app.use(store)

app.mount('#app')

//export default router

// new Vue({
//   // init router
//   router,
//   render: h => h(App),
// }).$mount('#app')