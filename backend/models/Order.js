const mongoose = require('mongoose');

const orderSchema = new  mongoose.Schema({

    user: {type : mongoose.Schema.Types.ObjectId , ref : 'User'},
    orderItems : [
        {
            product : {type: mongoose.Types.ObjectId, ref : 'Product'},
            name : String,
            qty : Number , 
            price : Number,
        }
    ],

    shippingAddress : {

        address : String,
        city : String , 
        postalCode : String ,
        country : String
    },

    paymentMethod : {type: String},
    paymentResult : {
        id : String ,
        status : String,
        update_time : String,
        email_address : String
    },


    itemsPrice : Number ,
    shippingPrice : Number ,
    taxPrice : Number ,
    totalPrice : Number,
    isPaid : {type : Boolean , default: false},
    paidAt : Date,
    orderStatus : {
        type : String ,
        default : "Processing",
        enum : ["Processing" , "Shipped" , "Delivered" , "cancelled"]
    },

    createAt : {type : Date , default: Date.now}
})

module.exports = mongoose.model("Order" , orderSchema);