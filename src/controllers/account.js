const { getAccountByIdModel, getAccountModel, createAccountModel, updateAccountModel, deleteAccountModel } = require('../models/account')

module.exports = {

  getAccountById: async (req, res) => {
    try {
      const { accountId } = req.params
      const result = await getAccountByIdModel(accountId)

      if (result.length) {
        res.status(200).send({
          success: true,
          message: `account with id ${accountId}`,
          data: result[0]
        })
      } else {
        res.status(404).send({
          success: false,
          message: `Data project with id ${accountId} not found`
        })
      }
    } catch (error) {
      res.status(500).send({
        success: false,
        message: 'Internal server error'
      })
    }
  },
  getAccount: async (req, res) => {
    try {
      let { search, limit, page } = req.query
      let searchKey = ''
      let searchValue = ''

      if (typeof search === 'object') {
        searchKey = Object.keys(search)[0]
        searchValue = Object.keys(search)[0]
      } else {
        searchKey = 'acc_nama'
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
      const result = await getAccountModel(searchKey, searchValue, limit, offset)
      if (result.length) {
        res.status(200).send({
          success: true,
          message: 'project-list',
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
  },
  createAccount: async (req, res) => {
    try {
      const result = await createAccountModel(req.body)
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
  updateAccount: async (req, res) => {
    try {
      const { accountId } = req.params
      const resultSelect = await getAccountByIdModel(accountId)

      if (resultSelect.length) {
        const result = await updateAccountModel(accountId, req.body)
        if (result.affectedRows) {
          res.status(200).send({
            status: true,
            message: `account With ID ${accountId} has been update`
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
          message: `Project with id ${accountId} not Found`
        })
      }
    } catch {
      res.status(500).send({
        success: false,
        message: 'Internal server error'
      })
    }
  },
  deleteAccount: async (req, res) => {
    try {
      const { accountId } = req.params
      const resultSelect = await getAccountByIdModel(accountId)
      if (resultSelect.length) {
        const result = await deleteAccountModel(accountId)
        if (result.affectedRows) {
          res.status(200).send({
            success: true,
            message: `account with id ${accountId} has been deleted`
          })
        } else {
          res.status(404).send({
            success: false,
            message: `account with id ${accountId} not found`
          })
        }
      } else {
        res.status(404).send({
          success: false,
          message: `account with id ${accountId} not found`
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
