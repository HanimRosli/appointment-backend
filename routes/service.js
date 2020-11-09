var express = require('express');
var router = express.Router();
var serviceController = require('../controllers/service')

/* GET users listing. */
router.get('/:id', serviceController.getService);
router.get('/', serviceController.getAllServices);
router.post('/', serviceController.createService);
router.patch('/:id', serviceController.updateService);
router.delete('/:id', serviceController.deleteService);

module.exports = router;