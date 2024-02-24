const Order = require("../models/Order");
const OrderItem = require("../models/OrderItem");


const placeOrder = async( req, res ) => {
    try {
       
        // create order
        let new_order = await Order.create({
            userId: req.body.userId,
            totalPrice: req.body.totalPrice
        });

      
        // add items to the order
        for(let i=0; i < req.body.items.length; i++){
            await OrderItem.create({
                orderId: new_order._id,
                productId: req.body.items[i].productId,  
                price: req.body.items[i].price
            })
        }

        return res.json({
            status: "OK", 
            message: 'Order placed successfully',
        })


    } catch (error) {
        console.log(error.message);
    }
}


module.exports = {
    placeOrder
}