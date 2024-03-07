const mongoose = require('mongoose');

// Define user schema
const productSchema = new mongoose.Schema({
    productname: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true,
    },
    image: {
        type: String
    },
    description: {
        type: String,
        required: true
    },
    quantity: String,
    price: String,
}, { timestamps: true });

// Create product model
const Product = mongoose.model("product", productSchema);
module.exports = Product;