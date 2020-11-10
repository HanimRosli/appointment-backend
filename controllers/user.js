var Model = require('../models')

const users = {
    getAllUsers: async (req, res) => {
		let users = []
		try {
            users = await Model.Users.findAll({
				include: [{
                    model: Model.Bookings
                }]
			})
					
		} catch(e) {
				console.log(e)
		}

		res.json(users)
	},

	getUser: async (req, res) => {
		let user = []
		try {
			user = await Model.Users.findOne({
				where: {
					id: req.params.id
				},
				include: [{
                    model: Model.Bookings
                }]
			})
		} catch(e) {
				console.log(e)
		}

		res.json(user)
	},

	createUser: async (req, res) => {
		let user = {}

		try {
			
			user = await Model.Users.create({
				username: req.body.username,
                fullname: req.body.fullname,
                contact: req.body.contact,
                email: req.body.email,
                address: req.body.address,
                skin_concern: req.body.skin_concern
			})

		} catch(e) {
			console.log(e)
		}

		res.json(user)
	},

	updateUser: async (req, res) => {
		let user = {}

		try {
			user = await Model.Users.update(
				req.body, {
				where: {
					id: req.params.id
				}
			});
		} catch(e) {
			console.log(e)
		}
		
		res.json(user)
	},
	
	deleteUser: async (req, res) => {
		await Model.Users.destroy({
			where: {
				id: req.params.id
			}	
		})

		res.status(204).json({
			status: 'Success'
		})
	},

	//add booking
    addBooking: async (req, res) => {

		let booking = {}

		try {
			booking = await Model.Bookings.create({
				booking: req.body.booking,
				UserId: req.params.id
			})
		} catch(e) {
			console.log(e)
		}

		res.json(booking)
	}
	
}
module.exports = users