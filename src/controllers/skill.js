const { createSkillModel, getSkillByIdModel, getSkillByEngIdModel, updateSkillModel, deleteSkillModel } = require('../models/skill')

module.exports = {
  createSkill: async (req, res) => {
    try {
      const result = await createSkillModel(req.body)
      if (result.affectedRows) {
        res.status(200).send({
          success: true,
          message: 'Success add skill!'
        })
      } else {
        res.status(400).send({
          success: false,
          message: 'Submit skill failed!'
        })
      }
    } catch {
      res.status(500).send({
        success: false,
        message: 'Internal server error'
      })
    }
  },

  getSkillById: async (req, res) => {
    try {
      const { skId } = req.params
      const result = await getSkillByIdModel(skId)

      if (result.length) {
        res.status(200).send({
          success: true,
          message: `skill for id ${skId}`,
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

  getSkillByEngId: async (req, res) => {
    try {
      const { engineerId } = req.params
      const result = await getSkillByEngIdModel(engineerId)

      if (result.length) {
        res.status(200).send({
          success: true,
          message: `skill for id ${engineerId}`,
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
  updateSkill: async (req, res) => {
    try {
      const { skId } = req.params
      const resultSelect = await getSkillByIdModel(skId)

      if (resultSelect.length) {
        const result = await updateSkillModel(skId, req.body)
        if (result.affectedRows) {
          res.status(200).send({
            status: true,
            message: `skill With ID ${skId} has been update`
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
          message: `skill with id ${skId} not Found`
        })
      }
    } catch {
      res.status(500).send({
        success: false,
        message: 'Internal server error'
      })
    }
  },
  deleteSkill: async (req, res) => {
    try {
      const { skId } = req.params
      const resultSelect = await getSkillByIdModel(skId)
      if (resultSelect.length) {
        const result = await deleteSkillModel(skId)
        if (result.affectedRows) {
          res.status(200).send({
            success: true,
            message: `account with id ${skId} has been deleted`
          })
        } else {
          res.status(404).send({
            success: false,
            message: `account with id ${skId} not found`
          })
        }
      } else {
        res.status(404).send({
          success: false,
          message: `account with id ${skId} not found`
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
