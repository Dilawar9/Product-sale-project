const mongoose = require('mongoose');

// Define user schema
const orderSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    totalPrice: {
        type: String
    },
    status: {
        type: String,
        enum: ['pending', 'completed', 'rejected'],
        default: 'pending'
    }
}, { timestamps: true });

// Create product model
const Order = mongoose.model("Order", orderSchema);
module.exports = Order;