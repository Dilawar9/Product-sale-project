const Sales = require("../models/Sales")



const salecreate = async (req, res) => {
    console.log('22222')

    try {

        const newsale = await Sales.create({
            customer: req.body.customer,
            product: req.body.product,
            quantity: req.body.quantity,
            price: req.body.price,
            category: req.body.category,
            discount: req.body.discount,
            total: req.body.total,
            order: req.body.order
        });

        return res.status(200).json({
            status: 'success',
            message: "successfully created",
            newsale: newsale
        })
    } catch (error) {
        console.log(error.message);
    }
}
//get all sales

const getall = async (req, res) => {
    try {
        const sale = await Sales.find({})

            .sort({ createdAt: -1 })


        return res.status(200).json({
            status: "success",
            sale: sale
        });
    } catch (error) {
        console.log(error.message);
    }
}

module.exports = { salecreate, getall }