const express = require('express')
// console.log(e)
const app = express()
const port=3000
const web = require('./routes/web')
const connect = require('./db/connectDb')

//dbconnect
connect()
//html css template engines
app.set('view engine', 'ejs')
//link css image
app.use(express.static('public'))



//route load
app.use('/',web)
  




//server create
app.listen(port,()=>console.log("server start localhost:3000"))