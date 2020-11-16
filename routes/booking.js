var express = require('express');
var router = express.Router();
var serviceController = require('../controllers/booking')

/* GET bookings listing. */
router.get('/:id', serviceController.getBooking);
router.get('/', serviceController.getAllBookings);
router.post('/', serviceController.createBooking);
router.patch('/:id', serviceController.updateBooking);
router.delete('/:id', serviceController.deleteBooking);

module.exports = router;