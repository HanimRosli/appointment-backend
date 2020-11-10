var Model = require('../models')

const appointment = {

    // GET all data
    getAllApp: async(req, res) => {
        let appt = []
        try{
            appt = await Model.Appointment.findAll()
        }catch(e){
            console.log(e)
        }

        res.json(appt)
    },

    // GET one data
    getApp: async(req, res) => {
        let appt = []
        try{
            appt = await Model.Appointment.findOne({
                where: {
                    id: req.params.id
                }
            })
        }catch(e){
            console.log(e)
        }

        res.json(appt)
    },

    // POST data
    createApp: async(req, res) => {
        let appt = []

        console.log(req)

        try{
            appt = await Model.Appointment.create({
                title: req.body.title,
                description: req.body.description
            })
        }catch(e){
            console.log(e)
        }

        res.json(appt)
    },

    //UPDATE data
    updateApp: async(req, res) => {
        let appt = {}

        try {
            appt = await Model.Appointment.update(
                req.body, {
                where: {
                    id: req.params.id
                }
                
            });
        }catch(e){
            console.log(e)
        }

        res.json(appt)
    },

    //DELETE data
    deleteApp: async(req, res) => {
        await Model.Appointment.destroy({
            where: {
                id: req.params.id
            }
        })

        res.status(204).json({
            status: 'Success'
        })
    }
} 

module.exports = appointment