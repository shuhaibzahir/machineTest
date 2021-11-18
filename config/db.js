const mongoose = require('mongoose')

module.exports={
    dbConnect:()=>{
        mongoose.connect('mongodb://localhost:27017/status').then(()=>{
            console.log("database connected")
        }).catch(err=>{
            console.log(err)
        })
    }
}