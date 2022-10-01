const User = require('../models/auth')
const bcryptjs = require('bcryptjs')


exports.signUp = async (req, res, next) => {

    const { username, email, password } = req.body

    try {
        const userExists = await User.findOne({ email: email })

        if (userExists) {
            return res.status(400).json({ message: "User already exists." })
        }

        const salt = await bcryptjs.genSalt(10)
        const securePass = await bcryptjs.hash(password, salt)


        const user = await User.create({
            username,
            email,
            password: securePass
        })

        req.session.user = user
        res.status(201).json({
            status: "Success",
            message: "User successfully created."
        })

    } catch (e) {
        console.log(e)
        res.status(500).json({
            status: "Fail",
            message: "Some Error Occurred"
        })
    }
}

exports.login = async (req, res, next) => {
    const { email, password } = req.body

    try {
        const userExists = await User.findOne({ email: email })

        if (!userExists) {
            return res.status(404).json({ message: "User not found." })
        }

        const isCorrect = bcryptjs.compare(password, userExists.password)

        if (isCorrect) {
            req.session.user = userExists
            return res.status(201).json({
                status: "Success",
                message: "User successfully logged in."
            })
        }
        else {
            return res.status(404).json({ message: "Incorrect username, email or password." })
        }

    } catch (e) {
        console.log(e)
        res.status(500).json({
            status: "Fail",
            message: "Some Error Occurred"
        })
    }
}