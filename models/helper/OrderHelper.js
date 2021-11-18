const Order = require('../schemas/Order')

module.exports={

    getOrderData:(data)=>{
        return new Promise(async(resolve,reject)=>{
     
          Order.find({Location:data.Location, Customer:data.Customer,'Order#':data.Order}).then(result=>{
              console.log(result)
              resolve(result)
          }).catch(err=>{
              console.log(err)
          })
             
        })
    }


}