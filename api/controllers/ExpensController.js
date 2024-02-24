const Expens = require("../models/Expens")


// create expense

const expenscreate = async (req, res) => {
    console.log('22222')

    try {

        const newexpens = await Expens.create({
            amount: req.body.amount
        });

        return res.status(200).json({
            status: 'success',
            message: "successfully created",
            newexpens: newexpens
        })
    } catch (error) {
        console.log(error.message);
    }
}
//get all expense

const getall = async (req, res) => {
    try {
        const expens = await Expens.find({})
            .sort({ createdAt: -1 })


        return res.status(200).json({
            status: "success",
            expens: expens
        });
    } catch (error) {
        console.log(error.message);
    }
}

module.exports = { expenscreate, getall }