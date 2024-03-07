const Product = require("../models/Product")
const fs = require("fs");
// const path = require("path");


// const cloudinary = require("cloudinary");

// const dotenv = require('dotenv');
// dotenv.config();

// setup cloudinary

// cloudinary.v2.config({
//     cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
//     api_key: process.env.CLOUDINARY_API_KEY,
//     api_secret: process.env.CLOUDINARY_API_SECRET,
// });


const createProduct = async (req, res) => {
console.log('22222')
// console.log(req.body);

    try {
        // converting buffer into base64
        // const b64 = Buffer.from(req.file.buffer).toString("base64");
        // let dataURI = "data:" + req.file.mimetype + ";base64," + b64;
        // const photoObject = await cloudinary.v2.uploader.upload(dataURI);
        // create post

        console.log("before",req.body)

        const extension = req.file.mimetype.split("/")[1];
        if (extension == "png" || extension == "jpg" || extension == "jpeg") {
            const fileNmae = req.file.filename + "." + extension;
          
            // new key in body object
            req.body.image = fileNmae;

            fs.rename(req.file.path, `uploads/${fileNmae}`, () => {
                console.log("\nFile Renamed!\n");
            });
        } else {
            fs.unlink(req.file.path, () => console.log("file deleted"))
            return res.json({
                message: "only images are accepted"
            })
        }

        const newproduct = await Product.create({
            productname: req.body.productname,
            description: req.body.description,
            price: req.body.price,
            category: req.body.category,
            image:req.body.image, 
            quantity: req.body.quantity
        
        });
        return res.status(200).json({
            status: 'success',
            message: "successfully created",
            newproduct: newproduct
        })
    } catch (error) {
        console.log(error.message);
    }
}

const getall = async (req, res) => {
    try {
        const product = await Product.find({})
            // path: "authorId",
            //select: "name", // Only include 'name' field from User collection
            //match: { $exists: true }
        .sort({createdAt: -1})
          
        return res.status(200).json({
            status: "success",
            product: product
        });
    } catch (error) {
        console.log(error.message);
    }
}

module.exports = { createProduct, getall }