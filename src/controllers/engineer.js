const { getAllEngineerModel, getEngineerByIdModel, updateEngineerModel, searchEngineerModel } = require('../models/engineer')

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
      const resultSelect = await getEngineerByIdModel(engineerId)

      if (resultSelect.length) {
        const result = await updateEngineerModel(engineerId, req.body)
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

    let searchKey = ''
    let searchValue = ''

    if (typeof search === 'object') {
      searchKey = Object.keys(search)[0]
      searchValue = Object.keys(search)[0]
    } else {
      searchKey = 'ac.acc_nama'
      searchValue = search || ''
    }

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

    const offset = (page - 1) * limit

    searchEngineerModel(searchKey, searchValue, limit, offset, result => {
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
  }

  //   getFilterEngineer: async (req, res, _next) => {
  //     let { filter, limit, page } = req.query
  //     console.log(filter)
  //     console.log(req.query)
  //     if (!limit) {
  //       limit = 10
  //     } else {
  //       limit = parseInt(limit)
  //     }

  //     if (!page) {
  //       page = 1
  //     } else {
  //       page = parseInt(page)
  //     }

  //     const data = {
  //       filter: filter,
  //       limit: limit,
  //       offset: (page - 1) * limit
  //     }

  //     try {
  //       const result = await getFilterEngineerModel(data)

//       if (result.length) {
//         res.status(200).send({
//           success: true,
//           message: 'Project succes filter ',
//           data: result
//         })
//       } else {
//         res.status(404).send({
//           success: false,
//           message: 'Data failed to filter'
//         })
//       }
//     } catch (error) {
//       res.status(500).send({
//         success: false,
//         message: 'Internal server error!'
//       })
//     }
//   }
}
