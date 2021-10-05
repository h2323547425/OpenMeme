const express = require('express');
const router = express.Router()

// import middlerwares and controllers here
const { testController } = require('../controllers/user.auth');

// all routes
router.get('/get-user', testController)

module.exports = router;