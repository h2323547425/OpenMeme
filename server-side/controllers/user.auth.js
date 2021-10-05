const User = require('../models/user')

// all controllers for user.auth routes
const testController = (req, res) => {
    res.status(200).json({ message: "hello, testing route" })
}

module.exports = {
    testController
}