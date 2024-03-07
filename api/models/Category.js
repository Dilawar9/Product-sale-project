const mongoose = require('mongoose');

// Define user schema
const categoryschema = new mongoose.Schema({
    maincategory: {
        type: String,
        required: true,
        unique:true
    },
    subcategory:[{
        type:String
    }]
},
{ timestamps: true });

// Create product model
const Category = mongoose.model("category", categoryschema);
module.exports = Category;