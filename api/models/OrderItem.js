const mongoose = require('mongoose');

// Define user schema
const Schema = new mongoose.Schema({
    orderId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Order',
        required: true
    },
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
        required: true
    },
    quantity: {
        type: String,
        default: 1
    },
    price: {
        type: String
    }
}, { timestamps: true });

// Create product model
const OrderItem = mongoose.model("OrderItem", Schema);
module.exports = OrderItem;