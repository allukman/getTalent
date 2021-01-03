
const { createHireModel, getHireByEngIdModel, getHireByProjectIdModel, updateHireModel, getHireByIdModel } = require('../models/hire')

module.exports = {
  createHire: async (req, res) => {
    try {
      const result = await createHireModel(req.body)
      if (result.affectedRows) {
        res.status(200).send({
          success: true,
          message: 'Success add hiring process!'
        })
      } else {
        res.status(400).send({
          success: false,
          message: 'Submit failed!'
        })
      }
    } catch {
      res.status(500).send({
        success: false,
        message: 'Internal server error'
      })
    }
  },

  getHireByEngId: async (req, res) => {
    try {
      const { engineerId } = req.params
      const result = await getHireByEngIdModel(engineerId)

      if (result.length) {
        res.status(200).send({
          success: true,
          message: `hiring for id ${engineerId}`,
          data: result
        })
      } else {
        res.status(404).send({
          success: false,
          message: 'data not found!'
        })
      }
    } catch (error) {
      res.status(500).send({
        success: false,
        message: 'Internal server error'
      })
    }
  },

  getHireByProjectId: async (req, res) => {
    try {
      const { projectId } = req.params
      const result = await getHireByProjectIdModel(projectId)

      if (result.length) {
        res.status(200).send({
          success: true,
          message: `hiring for id ${projectId}`,
          data: result
        })
      } else {
        res.status(404).send({
          success: false,
          message: 'data not found!'
        })
      }
    } catch (error) {
      res.status(500).send({
        success: false,
        message: 'Internal server error'
      })
    }
  },

  getHireById: async (req, res) => {
    try {
      const { hireId } = req.params
      const result = await getHireByIdModel(hireId)

      if (result.length) {
        res.status(200).send({
          success: true,
          message: `hiring for id ${hireId}`,
          data: result
        })
      } else {
        res.status(404).send({
          success: false,
          message: 'data not found!'
        })
      }
    } catch (error) {
      res.status(500).send({
        success: false,
        message: 'Internal server error'
      })
    }
  },

  updateHire: async (req, res) => {
    try {
      const { hireId } = req.params
      const resultSelect = await getHireByIdModel(hireId)

      if (resultSelect.length) {
        const result = await updateHireModel(hireId, req.body)
        if (result.affectedRows) {
          res.status(200).send({
            success: true,
            message: 'data has been update'
          })
        } else {
          res.status(400).send({
            success: false,
            message: 'Failed to Update Data '
          })
        }
      } else {
        res.status(400).send({
          success: false,
          message: `hiring process with id ${hireId} not Found`
        })
      }
    } catch {
      res.status(500).send({
        success: false,
        message: 'Internal server error'
      })
    }
  }

}
