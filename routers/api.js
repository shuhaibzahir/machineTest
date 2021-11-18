const express = require('express')
const router = express.Router();

const orderHelper = require('../models/helper/OrderHelper')


/* -------------------------- get the user details -------------------------- */
router.get('/check-status',(req,res)=>{
     let data = req.query   
     orderHelper.getOrderData(data).then(result=>{
         res.status(200).json({data:result})
     }).catch((err)=>{
          res.status(400).json({error:err})
     })
})


module.exports= router