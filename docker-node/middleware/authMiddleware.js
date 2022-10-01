const protects = (req, res, next) => {
    const {user} = req.session

    if (!user) {
        return res.status(404).json({status: "Fail", message: "You are Unauthorized."})
    }

    req.user = user

    next()
}

module.exports = protects