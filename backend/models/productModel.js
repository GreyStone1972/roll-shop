// import connection
import db from "../config/database.js"

// Get All Products
export const getProducts = (result) => {
    db.query("SELECT * FROM product INNER JOIN categories ON product.category_id = categories.category_id", (err, results) => {             
        if(err) {
            console.log(err)
            result(err, null)
        } else {
            result(null, results)
        }
    })   
}

export const getCategories = (result) => {
    db.query("SELECT * FROM categories", (err, results) => {             
        if(err) {
            console.log(err)
            result(err, null)
        } else {
            result(null, results)
        }
    })   
}


// Get Single Product
export const getProductById = (id, result) => {
    db.query("SELECT * FROM product WHERE product_id = ?", [id], (err, results) => {             
        if(err) {
            console.log(err)
            result(err, null)
        } else {
            result(null, results[0])
        }
    })   
}

export const getOrders = (result) => {
    db.query("SELECT * FROM orders", (err, results) => {             
        if(err) {
            console.log(err)
            result(err, null)
        } else {
            result(null, results)
        }
    })   
}

export const getOrderById = (id, result) => {
    db.query("SELECT * FROM orders WHERE order_id = ?", [id], (err, results) => {             
        if(err) {
            console.log(err)
            result(err, null)
        } else {
            result(null, results[0])
        }
    })   
}


// Insert Product to Database
export const insertProduct = (data, result) => {
    db.query("INSERT INTO product SET ?", [data], (err, results) => {             
        if(err) {
            console.log(err)
            result(err, null)
        } else {
            result(null, results)
        }
    })   
}


//Create Order
export const insertOrder = (data, result) => {
    db.query("INSERT INTO orders SET ?", [data], (err, results) => {             
        if(err) {
            console.log(err)
            result(err, null)
        } else {
            result(null, results)
        }
    })   
}

//Create Category
export const insertCategory = (data, result) => {
    db.query("INSERT INTO categories SET ?", [data], (err, results) => {             
        if(err) {
            console.log(err)
            result(err, null)
        } else {
            result(null, results)
        }
    })   
}

// Update Product to Database
export const updateProductById = (data, id, result) => {
    db.query("UPDATE product SET product_name = ?, product_price = ?, product_description = ?  WHERE product_id = ?", [data.product_name, data.product_price, data.product_description, id], (err, results) => {             
        if(err) {
            console.log(err)
            result(err, null)
        } else {
            result(null, results)
        }
    })  
}

export const updateOrderById = (data, id, result) => {
    db.query("UPDATE orders SET new = ?, done = ?  WHERE order_id = ?", [data.new, data.done, id], (err, results) => {             
        if(err) {
            console.log(err)
            result(err, null)
        } else {
            result(null, results)
        }
    })  
}

// Delete Product to Database
export const deleteProductById = (id, result) => {
    db.query("DELETE FROM product WHERE product_id = ?", [id], (err, results) => {             
        if(err) {
            console.log(err)
            result(err, null)
        } else {
            result(null, results)
        }
    })  
}

//Delete Category to Database
export const deleteCategoryById = (id, result) => {
    db.query("DELETE FROM category WHERE category_id = ?", [id], (err, results) => {             
        if(err) {
            console.log(err)
            result(err, null)
        } else {
            result(null, results)
        }
    })  
}

export const deleteOrderById = (id, result) => {
    db.query("DELETE FROM orders WHERE order_id = ?", [id], (err, results) => {             
        if(err) {
            console.log(err)
            result(err, null)
        } else {
            result(null, results)
        }
    })  
}