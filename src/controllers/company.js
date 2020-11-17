const { getAllCompanyModel, getCompanyByIdModel, updateCompanyModel } = require('../models/company')

module.exports = {
  getAllcompany: async (req, res) => {
    try {
      const result = await getAllCompanyModel()

      if (result.length) {
        res.status(200).send({
          success: true,
          message: 'Company list',
          result: `${result.length}`,
          data: result
        })
      } else {
        res.status(400).send({
          success: false,
          message: 'failed to get company'
        })
      }
    } catch (error) {
      res.status(500).send({
        success: false,
        message: 'Internal server error'
      })
    }
  },

  getCompanyById: async (req, res) => {
    try {
      const { comId } = req.params
      const result = await getCompanyByIdModel(comId)

      if (result.length) {
        res.status(200).send({
          success: true,
          message: 'Company list',
          result: `${result.length}`,
          data: result
        })
      } else {
        res.status(400).send({
          success: false,
          message: `company with id ${comId} not found`
        })
      }
    } catch (error) {
      res.status(500).send({
        success: false,
        message: 'Internal server error'
      })
    }
  },

  updateCompany: async (req, res) => {
    try {
      const { comId } = req.params
      const resultSelect = await getCompanyByIdModel(comId)

      if (resultSelect.length) {
        const result = await updateCompanyModel(comId, req.body)
        if (result.affectedRows) {
          res.status(200).send({
            status: true,
            message: `company With ID ${comId} has been update`
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
          message: `company with id ${comId} not Found`
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