const {createExperienceModel, getExperienceByIdModel, getExperienceByEngIdModel, updateExperienceModel,deleteExperienceModel} = require('../models/experience')

module.exports ={
createExperience: async(req, res) => {
    try { 
        const result = await createExperienceModel(req.body)
        if (result.affectedRows) {
            res.status(200).send({
                success: true,
                message: 'Success add experience!'
            })
            } else {
            res.status(400).send({
                success: false,
                message: 'Submit experience failed!'
            })
            }
    } catch {
        res.status(500).send({
            success: false,
            message: 'Internal server error'
        })
    }
},
    
getExperienceById: async (req, res) => {
     try {
        const { xpId } = req.params    
        const result = await getExperienceByIdModel(xpId)
            
            if (result.length) {
                res.status(200).send ({
                success: true,
                message: `experience for id ${xpId}`,
                data: result
                })
            } else {
                res.status(404).send ({
                success: false,
                message: `data not found!`
                            })
                        }
    } catch (error) {
            res.status(500).send({
            success: false,
            message: 'Internal server error'
        })
    }   
},

getExperienceByEngId: async (req, res) => {
    try {
       const { engineerId } = req.params    
       const result = await getExperienceByEngIdModel(engineerId)
           
           if (result.length) {
               res.status(200).send ({
               success: true,
               message: `experience for id ${engineerId}`,
               data: result[0]
               })
           } else {
               res.status(404).send ({
               success: false,
               message: `data not found!`
                           })
                       }
   } catch (error) {
           res.status(500).send({
           success: false,
           message: 'Internal server error'
       })
   }   
},
updateExperience: async(req, res) => {
    try {
        const { xpId } = req.params
        const resultSelect = await getExperienceByIdModel(xpId)

            if (resultSelect.length) {
                const result = await updateExperienceModel(xpId, req.body)
                if (result.affectedRows) {
                    res.status(200).send({
                        status: true,
                        message: `skill With ID ${xpId} has been update`
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
                message: `skill with id ${xpId} not Found`
                  })
            }
    } catch {
        res.status(500).send({
            success: false,
            message: 'Internal server error'
        })
    }
},
deleteExperience: async(req, res) => {
    try {
        const { xpId } = req.params
        const resultSelect = await getExperienceByIdModel(xpId)
        if (resultSelect.length) {
            const result = await deleteExperienceModel(xpId)
                if (result.affectedRows) {
                    res.status(200).send ({
                    success: true,
                    message: `experience with id ${xpId} has been deleted`,
                                 })
                } else {
                    res.status(404).send ({
                    success: false,
                    message: `experience with id ${xpId} not found`
                                })
                }

        } else {
            res.status(404).send({
                success: false,
                message: `experience with id ${xpId} not found`
            })
        }
    } catch (error)  {
        res.status(500).send({
            success: false,
            message: 'Internal server error'
        })
    }
}

}