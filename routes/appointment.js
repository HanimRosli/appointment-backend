var express = require('express');
var router = express.Router();
var appointmentController = require('../controllers/appointment');

/* call function dari controller */
router.get('/:id', appointmentController.getApp);
router.get('/', appointmentController.getAllApp);
router.post('/', appointmentController.createApp); 
router.patch('/:id', appointmentController.updateApp);
router.delete('/:id', appointmentController.deleteApp);

module.exports = router;
