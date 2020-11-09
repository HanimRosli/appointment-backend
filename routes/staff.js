var express = require('express');
var router = express.Router();
var staffController = require('../controllers/staff')

/* GET users listing. */
router.get('/:id', staffController.getStaff);
router.get('/', staffController.getAllStaffs);
router.post('/', staffController.createStaff);
router.patch('/:id', staffController.updateStaff);
router.delete('/:id', staffController.deleteStaff);

module.exports = router;