// import express
import express from "express"

// import function from controller
import { showProducts, showProductById, createProduct, updateProduct, deleteProduct, createOrder, showOrders, showOrderById, updateOrder, deleteOrder, showCategories, showProductByCategory } from "../controllers/product.js"

// init express router
const router = express.Router()

// Get All Product
router.get('/products', showProducts)

// Get All Categories
router.get('/categories', showCategories)

// Get Single Product
router.get('/products/:id', showProductById)

// Get Product By Category
router.get('/products/:category_id', showProductByCategory)

// Create New Product
router.post('/products', createProduct)

// Update Product
router.put('/products/:id', updateProduct)

// Delete Product
router.delete('/products/:id', deleteProduct)

// Create New Order
router.post('/orders', createOrder)

// Get All Orders
router.get('/orders', showOrders)

// Get Single Order
router.get('/orders/:id', showOrderById)

// Update Order
router.put('/orders/:id', updateOrder)

// Delete Order 
router.delete('/orders/:id', deleteOrder)

// export default router
export default router