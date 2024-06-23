const mongoose = require('mongoose')

const localURl= "mongodb://127.0.0.1:27017/blogProject"

const connect=()=>{
    return mongoose.connect(localURl)
    .then(()=>{
        console.log('connect success')
    }).catch((err)=>{
        console.log(err)
    })

}
module.exports =connect