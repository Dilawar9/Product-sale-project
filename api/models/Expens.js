const mongoose = require('mongoose');

// Define user schema
const expenschema = new mongoose.Schema({
    amount: {
        type: String,
        required: true,
    },

}, { timestamps: true });

// Create product model
const Expens = mongoose.model("expense", expenschema);
module.exports = Expens;