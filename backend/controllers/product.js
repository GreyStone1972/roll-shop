// Import function from Product Model
import { getProducts, getProductById, getOrders, getOrderById, getCategories, insertProduct, updateProductById, updateOrderById, deleteProductById, insertOrder, deleteOrderById } from "../models/productModel.js"

// Get All Products
export const showProducts = (req, res) => {
    getProducts((err, results) => {
        if (err){
            res.send(err)
        }else{
            res.json(results)
        }
    })
}

export const showOrders = (req, res) => {
    getOrders((err, results) => {
        if (err){
            res.send(err)
        }else{
            res.json(results)
        }
    })
}

export const showCategories = (req, res) => {
    getCategories((err, results) => {
        if (err){
            res.send(err)
        }else{
            res.json(results)
        }
    })
}

// Get Single Product 
export const showProductById = (req, res) => {
    getProductById(req.params.id, (err, results) => {
        if (err){
            res.send(err)
        }else{
            res.json(results)
        }
    })
}


export const showProductByCategory = (req, res) => {
    getProductsByCategory(req.params.id, (err, results) => {
        if (err){
            res.send(err)
        }else{
            res.json(results)
        }
    })
}

export const showOrderById = (req, res) => {
    getOrderById(req.params.id, (err, results) => {
        if (err){
            res.send(err)
        }else{
            res.json(results)
        }
    })
}

// Create New Product
export const createProduct = (req, res) => {
    const data = req.body
    insertProduct(data, (err, results) => {
        if (err){
            res.send(err)
        }else{
            res.json(results)
        }
    })
}

//Create New Category
export const createCategory = (req, res) => {
    const data = req.body
    insertCategory(data, (err, results) => {
        if (err){
            res.send(err)
        }else{
            res.json(results)
        }
    })
}

// Update Product
export const updateProduct = (req, res) => {
    const data  = req.body
    const id    = req.params.id
    updateProductById(data, id, (err, results) => {
        if (err){
            res.send(err)
        }else{
            res.json(results)
        }
    })
}

export const updateOrder = (req, res) => {
    const data  = req.body
    const id    = req.params.id
    updateOrderById(data, id, (err, results) => {
        if (err){
            res.send(err)
        }else{
            res.json(results)
        }
    })
}

// Delete Product
export const deleteProduct = (req, res) => {
    const id = req.params.id
    deleteProductById(id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    })
}

export const deleteOrder = (req, res) => {
    const id = req.params.id
    deleteOrderById(id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    })
}

export const createOrder = (req, res) => {
    const data = req.body
    insertOrder(data, (err, results) => {
        if (err){
            res.send(err)
        }else{
            res.json(results)
        }
    })
}