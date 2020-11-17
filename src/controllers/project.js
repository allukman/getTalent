const { createProjectModel, getProjectByIdModel, getProjectByComIdModel, updateProjectModel, deleteProjectModel } = require('../models/project')

module.exports = {
  createProject: async (req, res) => {
    try {
      const result = await createProjectModel(req.body)
      if (result.affectedRows) {
        res.status(200).send({
          success: true,
          message: 'Success add project!'
        })
      } else {
        res.status(400).send({
          success: false,
          message: 'Submit project failed!'
        })
      }
    } catch {
      res.status(500).send({
        success: false,
        message: 'Internal server error'
      })
    }
  },

  getProjectById: async (req, res) => {
    try {
      const { pjId } = req.params
      const result = await getProjectByIdModel(pjId)

      if (result.length) {
        res.status(200).send({
          success: true,
          message: `project for id ${pjId}`,
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

  getProjectByComId: async (req, res) => {
    try {
      const { comId } = req.params
      const result = await getProjectByComIdModel(comId)

      if (result.length) {
        res.status(200).send({
          success: true,
          message: `project for company id ${comId}`,
          data: result[0]
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
  updateProject: async (req, res) => {
    try {
      const { pjId } = req.params
      const resultSelect = await getProjectByIdModel(pjId)

      if (resultSelect.length) {
        const result = await updateProjectModel(pjId, req.body)
        if (result.affectedRows) {
          res.status(200).send({
            status: true,
            message: `project With ID ${pjId} has been update`
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
          message: `project with id ${pjId} not Found`
        })
      }
    } catch {
      res.status(500).send({
        success: false,
        message: 'Internal server error'
      })
    }
  },
  deleteProject: async (req, res) => {
    try {
      const { pjId } = req.params
      const resultSelect = await getProjectByIdModel(pjId)
      if (resultSelect.length) {
        const result = await deleteProjectModel(pjId)
        if (result.affectedRows) {
          res.status(200).send({
            success: true,
            message: `account with id ${pjId} has been deleted`
          })
        } else {
          res.status(404).send({
            success: false,
            message: `account with id ${pjId} not found`
          })
        }
      } else {
        res.status(404).send({
          success: false,
          message: `account with id ${pjId} not found`
        })
      }
    } catch (error) {
      res.status(500).send({
        success: false,
        message: 'Internal server error'
      })
    }
  }

}