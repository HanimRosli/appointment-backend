var Model = require('../models')

const staffs = {
    getAllStaffs: async (req, res) => {
		let staffs = []
		try {
            staffs = await Model.Staffs.findAll()
					
		} catch(e) {
				console.log(e)
		}

		res.json(staffs)
	},

	getStaff: async (req, res) => {
		let staff = []
		try {
			staff = await Model.Staffs.findOne({
				where: {
					id: req.params.id
				},
				//include: [{
				//	model: Model.Comments
				//}]
			})
		} catch(e) {
				console.log(e)
		}

		res.json(staff)
	},

	createStaff: async (req, res) => {
		let staff = {}

		try {
			
			staff = await Model.Staffs.create({
				username: req.body.username,
                fullname: req.body.fullname,
                email: req.body.email,
                address: req.body.address
			})

		} catch(e) {
			console.log(e)
		}

		res.json(staff)
	},

	updateStaff: async (req, res) => {
		let staff = {}

		try {
			staff = await Model.Staffs.update(
				req.body, {
				where: {
					id: req.params.id
				}
			});
		} catch(e) {
			console.log(e)
		}
		
		res.json(staff)
	},
	
	deleteStaff: async (req, res) => {
		await Model.Staffs.destroy({
			where: {
				id: req.params.id
			}	
		})

		res.status(204).json({
			status: 'Success'
		})
	}
	
}
module.exports = staffs