const User = require("../models/User");
const bcrypt = require('bcrypt');
const { generateToken } = require("../helpers/utils");


const signup = async (req, res) => {
    try {
        let { name, email, password } = req.body;

        // Checking if the user already exists in the database
        const arleadyUser = await User.findOne({ email: email });

        if (arleadyUser) {
            return res.json({ status: "failed", message: "Email is already registered" })
        }

        //  Encrypting the password using Bcrypt
        // const salt = await bcrypt.genSalt(10);
        // console.log(salt)
        hashed = await bcrypt.hash(password, 10);

        //  Creating a new user with encrypted password and saving it to the database
        const user = await User.create({ name, email, password: hashed });

        //  Sending back a response with a status of Created (201) and the newly created
       return res.json({ name: user.name, email: user.email, token: generateToken(user) ,status:"success"});

    } catch (error) {
        res.json({ status: 'Failed', message: error.message });
    }
}


const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        // checking user is registered or not
        const user = await User.findOne({ email: email });
        if (!user) {
            return res.json({ status: 'failed', message: 'Invalid Email or Password' });
        }

        // Verify the password using bcrypt compare method
        const validPassword = await bcrypt.compare(password, user.password);
        if (!validPassword) {
            return res.json({ status: 'failed', message: "Invalid Email or Password" })
        }

        // success
        return res.json({
            status: 'success',
            token: generateToken(user)
        })


    } catch (error) {
        console.log(`Error in SignUp ${error}`);
        res.status(500).json({ status: 'Failed', message: error.message });
    }
}


module.exports = { signup, login }