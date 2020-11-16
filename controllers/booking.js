var Model = require('../models')

const bookings = {
    getAllBookings: async (req, res) => {
		let bookings = []
		try {
            bookings = await Model.Bookings.findAll()
					
		} catch(e) {
				console.log(e)
		}

		res.json(bookings)
	},

	getBooking: async (req, res) => {
		let booking = []
		try {
			booking = await Model.Bookings.findOne({
				where: {
					id: req.params.id
				}
			})
		} catch(e) {
				console.log(e)
		}

		res.json(booking)
	},

	createBooking: async (req, res) => {
		let booking = {}

		try {
			
			booking = await Model.Bookings.create({
				date: req.body.date,
                time: req.body.time,
                service: req.body.service,
                assignTo: req.body.assignTo,
                status: req.body.status
			})

		} catch(e) {
			console.log(e)
		}

		res.json(booking)
	},

	updateBooking: async (req, res) => {
		let booking = {}

		try {
			booking = await Model.Bookings.update(
				req.body, {
				where: {
					id: req.params.id
				}
			});
		} catch(e) {
			console.log(e)
		}
		
		res.json(booking)
	},
	
	deleteBooking: async (req, res) => {
		await Model.Bookings.destroy({
			where: {
				id: req.params.id
			}	
		})

		res.status(204).json({
			status: 'Success'
		})
	}
	
}
module.exports = bookings