let express = require('express');
let router = express.Router();

// call class controller 
let UserController = require("./../controllers/user.controller")
let userController = new UserController();

// Route untuk menampilkan semua data
router.get('/', userController.get)

// Route untuk menampilkan satu data
router.get('/:id', userController.getById)

module.exports = router;
