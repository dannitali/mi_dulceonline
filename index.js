'use strict'
const express = require( 'express')
const bodyParser = require ('body-parser')

const app = express( )
const port = process.env. PORT || 5000

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser. json())

app.get('/productos/cantidad/:4', (req, res)=>{

})

app.get('/productos/:cantidad',(req,res)=>{
 
})

app.listen(port, () => {
console. log('API REST corriendo en http://localhost:${port}')
})