const { getAllEngineerModel, getEngineerByIdModel, updateEngineerModel, searchEngineerModel, FilterEngineerModel, getEngineerByAccountIdModel, getEngineerIdByAccountIdModel } = require('../models/engineer')
const isEmpty = require('lodash.isempty')
module.exports = {
  getAllEngineer: async (req, res) => {
    let { search, limit, page } = req.query

    if (!limit) {
      limit = 10
    } else {
      limit = parseInt(limit)
    }

    if (!page) {
      page = 1
    } else {
      page = parseInt(page)
    }

    const paginate = {
      search: search,
      limit: limit,
      offset: (page - 1) * limit
    }
    try {
      let result
      if (isEmpty(search)) {
        result = await getAllEngineerModel(paginate)
      } else {
        result = await searchEngineerModel(paginate)
      }
      if (result.length) {
        res.status(200).send({
          success: true,
          message: 'Engineer list',
          result: `${result.length}`,
          data: result
        })
      } else {
        res.status(400).send({
          success: false,
          message: 'failed to get Engineer'
        })
      }
    } catch (error) {
      res.status(500).send({
        success: false,
        message: 'Internal server error'
      })
    }
  },

  getEngineerById: async (req, res) => {
    try {
      const { engineerId } = req.params
      const result = await getEngineerByIdModel(engineerId)

      if (result.length) {
        res.status(200).send({
          success: true,
          message: 'Engineer list',
          data: result[0]
        })
      } else {
        res.status(400).send({
          success: false,
          message: `engineer with id ${engineerId} not found`
        })
      }
    } catch (error) {
      res.status(500).send({
        success: false,
        message: 'Internal server error'
      })
    }
  },

  getEngineerByAccountId: async (req, res) => {
    try {
      const { accountId } = req.params
      const result = await getEngineerByAccountIdModel(accountId)

      if (result.length) {
        res.status(200).send({
          success: true,
          message: 'Engineer list',
          data: result
        })
      } else {
        res.status(400).send({
          success: false,
          message: `engineer with id ${accountId} not found`
        })
      }
    } catch (error) {
      res.status(500).send({
        success: false,
        message: 'Internal server error'
      })
    }
  },

  getEngineerIdByAccountId: async (req, res) => {
    try {
      const { accountId } = req.params
      const result = await getEngineerIdByAccountIdModel(accountId)

      if (result.length) {
        res.status(200).send({
          success: true,
          message: 'Engineer list',
          data: result[0]
        })
      } else {
        res.status(400).send({
          success: false,
          message: `engineer with id ${accountId} not found`
        })
      }
    } catch (error) {
      res.status(500).send({
        success: false,
        message: 'Internal server error'
      })
    }
  },

  updateEngineer: async (req, res) => {
    const { engineerId } = req.params
    try {
      const resultSelect = await getEngineerByIdModel(engineerId)
      if (resultSelect.length) {
        req.body.photo = req.file === undefined ? resultSelect[0].en_photo : req.file.filename

        const { enJobTitle, enJobType, enDomisili, enDeskripsi, enInstagram, enGithub, enGitlab } = req.body
        const setData = {
          en_job_title: enJobTitle,
          en_job_type: enJobType,
          en_domisili: enDomisili,
          en_deskripsi: enDeskripsi,
          en_instagram: enInstagram,
          en_github: enGithub,
          en_gitlab: enGitlab,
          en_photo: req.body.photo
        }

        delete setData.photo

        const result = await updateEngineerModel(engineerId, setData)
        if (result.affectedRows) {
          res.status(200).send({
            success: true,
            message: `engineer With ID ${engineerId} has been update`
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
          message: `engineer with id ${engineerId} not Found`
        })
      }
    } catch (error) {
      res.status(500).send({
        success: false,
        message: 'Internal server error'
      })
    }
  },

  FilterEngineer: async (req, res, _next) => {
    let { search, filter, limit, page } = req.query

    if (!limit) {
      limit = 10
    } else {
      limit = parseInt(limit)
    }

    if (!page) {
      page = 1
    } else {
      page = parseInt(page)
    }

    const paginate = {
      search: search,
      filter: filter,
      limit: limit,
      offset: (page - 1) * limit
    }

    try {
      let result
      if (isEmpty(filter) && isEmpty(search)) {
        result = await getAllEngineerModel(paginate)
      } else if (isEmpty(filter)) {
        result = await searchEngineerModel(paginate)
      } else {
        result = await FilterEngineerModel(paginate)
      }
      if (result.length) {
        res.status(200).send({
          success: true,
          message: 'engineer list',
          data: result
        })
      } else {
        res.status(404).send({
          success: false,
          message: 'item not found'
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
