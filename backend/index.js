// import express
import express from "express"
//const express = require('express')
// import cors
import cors from "cors"
//const cors = require('cors')
// import routes
import Router from "./routes/routes.js"

// init express
const app = express()

// use express json
app.use(express.json())

// use cors
app.use(cors())

// app.use((_req, res, next) => {
//     res.header('Access-Control-Allow-Origin', '*')
//     res.header('Access-Control-Allow-Headers', '*')
  
//     next()
//   })

// const corsOptions = {
//     origin: 'http://localhost:8080',
//     optionsSuccessStatus: 200,
//     methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
//     credentials: true,
// }

// app.get('/products',
//     cors(corsOptions), function(req, res, next) {
//         res.json({ msg: 'This is CORS-enabled for only localhost:8080'
//         })
//     })

// app.get('/products', function (req, res, next) {
//     res.json({msg: 'This is Cors-enabled for all origins'})
// })

// app.enableCors({
//     origin: true,
//     methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
//     credentials: true,
//   })
// res.header( "Access-Control-Allow-Origin" )

// use router
app.use(Router)

app.listen(5000, () => console.log('Server running at http://localhost:5000'))