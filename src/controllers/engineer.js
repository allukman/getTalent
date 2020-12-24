const { getAllEngineerModel, getEngineerByIdModel, updateEngineerModel, searchEngineerModel, FilterEngineerModel } = require('../models/engineer')

module.exports = {
  getAllEngineer: async (req, res) => {
    try {
      const result = await getAllEngineerModel()
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

  // getAllEngineer: async (req, res) => {
  //   try {
  //     const result = await getAllEngineerModel()
  //     if (result.length) {
  //       res.status(200).send({
  //         success: true,
  //         message: 'Engineer list',
  //         result: `${result.length}`,
  //         data: result
  //       })
  //     } else {
  //       res.status(400).send({
  //         success: false,
  //         message: 'failed to get Engineer'
  //       })
  //     }
  //   } catch (error) {
  //     res.status(500).send({
  //       success: false,
  //       message: 'Internal server error'
  //     })
  //   }
  // },
  getEngineerById: async (req, res) => {
    try {
      const { engineerId } = req.params
      const result = await getEngineerByIdModel(engineerId)

      if (result.length) {
        res.status(200).send({
          success: true,
          message: 'Engineer list',
          data: result
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

  updateEngineer: async (req, res) => {
    try {
      const { engineerId } = req.params
      const { enJobTitle, enJobType, enDomisili, enDeskripsi } = req.body
      const setData = {
        en_job_title: enJobTitle,
        en_job_type: enJobType,
        en_domisili: enDomisili,
        en_deskripsi: enDeskripsi,
        en_photo: req.file === undefined ? '' : req.file.filename
      }

      const resultSelect = await getEngineerByIdModel(engineerId)

      if (resultSelect.length) {
        const result = await updateEngineerModel(engineerId, setData)
        if (result.affectedRows) {
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
    } catch (error) {
      res.status(500).send({
        success: false,
        message: 'Internal server error'
      })
    }
  },

  searchEngineer: (req, res) => {
    let { search, limit, page } = req.query

    if (!limit) {
      limit = 50
    } else {
      limit = parseInt(limit)
    }

    if (!page) {
      page = 1
    } else {
      page = parseInt(page)
    }

    const rules = {
      search: search,
      limit: limit,
      offset: (page - 1) * limit
    }

    searchEngineerModel(rules, result => {
      if (result.length) {
        res.status(200).send({
          success: true,
          message: 'account list',
          data: result
        })
      } else {
        res.status(404).send({
          success: false,
          message: 'item not found'
        })
      }
    })
  },

  FilterEngineer: async (req, res, _next) => {
    let { filter, limit, page } = req.query

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
      filter: filter,
      limit: limit,
      offset: (page - 1) * limit
    }

    try {
      const result = await FilterEngineerModel(paginate)

      if (result.length) {
        res.status(200).send({
          success: true,
          message: 'account list',
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
