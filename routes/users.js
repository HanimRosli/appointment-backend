var express = require('express');
var router = express.Router();
var userController = require('../controllers/user')

/* GET users listing. */
router.post('/:id/booking', userController.addBooking);
router.get('/:id', userController.getUser);
router.get('/', userController.getAllUsers);
router.post('/', userController.createUser);
router.patch('/:id', userController.updateUser);
router.delete('/:id', userController.deleteUser);

module.exports = router;