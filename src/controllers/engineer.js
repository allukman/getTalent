const { getAllEngineerModel, getEngineerByIdModel, updateEngineerModel } = require('../models/engineer')

module.exports = {
    getAllEngineer : async (req, res) => {
        try {
            const result = await getAllEngineerModel()

            if (result.length){
                res.status(200).send({
                    success: true,
                    message: `Engineer list`,
                    result: `${result.length}`,
                    data: result
                })   
            } else {
                res.status(400).send({
                    success: false,
                    message: `failed to get Engineer`
                })

            }
        } catch(error) {        
            res.status(500).send({
                success: false,
                message: 'Internal server error'
            })
        }
    },

    getEngineerById: async(req, res) => {
        try { 
            const {engineerId} = req.params
            const result = await getEngineerByIdModel(engineerId)

            if (result.length){
                res.status(200).send({
                    success: true,
                    message: `Engineer list`,
                    data: result
                })   
            } else {
                res.status(400).send({
                    success: false,
                    message: `engineer with id ${engineerId} not found`
                })

            }
        } catch(error) {
            res.status(500).send({
                success: false,
                message: 'Internal server error'
            })
        }    
    },

    updateEngineer : async(req, res) => {
        try {
            const { engineerId } = req.params
            const resultSelect = await getEngineerByIdModel(engineerId)

            if(resultSelect.length) {
                const result = await updateEngineerModel(engineerId, req.body)
                if(result.affectedRows) {
                    res.status(200).send({
                        status: true,
                        message: `engineer With ID ${engineerId} has been update`
                      })
                } else {
                    res.status(400).send({
                        status: false,
                        message: 'Failed to Update Data '
                      })
                }
            } else {
                res.status(400).send({
                    success: false,
                    message: `engineer with id ${engineerId} not Found`
                      })
            }
        } catch(error) {
            res.status(500).send({
                success: false,
                message: 'Internal server error'
            })
        }
    }
}