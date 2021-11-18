const mongoose = require('mongoose')

const schema = new mongoose.Schema({ Location: String, Customer: String,"Order#":String}, 
    { collection : 'orders' });

module.exports= mongoose.model('orders',schema)