const Category = require("../models/Category")


// create category

const categorycreate = async (req, res) => {
    console.log('22222')

    try {

        const newcategory = await Category.create({
            maincategory: req.body.maincategory,
            subcategory: req.body.subcategory

        });
        console.log(newcategory);
        return res.status(200).json({
            status: 'success',
            message: "successfully created",
            newcategory: newcategory
        })
    } catch (error) {
        console.log(error.message);
    }
}

// create subcategory
const subcategorycreate = async (req, res) => {
    console.log('22222')

    try {
        const cat_id = req.params.id
        const subcategory = req.body.subcategory
        const updatecategory = await Category.findOneAndUpdate(
            { _id: cat_id },
            { $push: { subcategory: subcategory } },
            { new: true }
        )
        console.log(updatecategory);
        return res.status(200).json({
            status: 'success',
            message: "successfully created",
            updatecategory: updatecategory
        })
    } catch (error) {
        console.log(error.message);
    }
}
//get all category

const getall = async (req, res) => {
    try {
        const categories = await Category.find({})
        return res.status(200).json({
            status: "success",
            categories: categories
        });
    } catch (error) {
        console.log(error.message);
    }
}

module.exports = { categorycreate, getall, subcategorycreate }