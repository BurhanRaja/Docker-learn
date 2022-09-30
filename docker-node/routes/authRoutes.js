const router = require("express").Router()
const ac = require('../controllers/authControllers')

router.route('/signup').post(ac.signUp)

router.route('/login').post(ac.login)

module.exports = router