var Model = require('../models')

const services = {
    getAllServices: async (req, res) => {
		let services = []
		try {
            services = await Model.Services.findAll()
					
		} catch(e) {
				console.log(e)
		}

		res.json(services)
	},

	getService: async (req, res) => {
		let service = []
		try {
			service = await Model.Services.findOne({
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

		res.json(service)
	},

	createService: async (req, res) => {
		let service = {}

		try {
			
			user = await Model.Services.create({
                servicename: req.body.servicename,
                category: req.body.category,
                description: req.body.description,
                assigned: req.body.assigned,
                procedure: req.body.procedure,
                comment: req.body.comment,
                
			})

		} catch(e) {
			console.log(e)
		}

		res.json(service)
	},

	updateService: async (req, res) => {
		let service = {}

		try {
			user = await Model.Services.update(
				req.body, {
				where: {
					id: req.params.id
				}
			});
		} catch(e) {
			console.log(e)
		}
		
		res.json(service)
	},
	
	deleteService: async (req, res) => {
		await Model.Services.destroy({
			where: {
				id: req.params.id
			}	
		})

		res.status(204).json({
			status: 'Success'
		})
	}
	
}
module.exports = services