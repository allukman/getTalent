const { getAccountByIdModel, getAccountModel, createAccountEngineerModel, updateAccountModel, deleteAccountModel, checkAccountModel } = require('../models/account')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
require('dotenv')

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
          message: `account with id ${accountId} not found`
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
    const { accName, accEmail, accPhone, accPassword, accLevel, comCompany, comPosition } = req.body
    const salt = bcrypt.genSaltSync(10)
    const encryptPassword = bcrypt.hashSync(accPassword, salt)

    const setData = {
      acc_nama: accName,
      acc_email: accEmail,
      acc_phone: accPhone,
      acc_password: encryptPassword,
      acc_level: accLevel,
      com_company: comCompany,
      com_position: comPosition
    }
    try {
      const checkEmail = await checkAccountModel(accEmail)
      if (checkEmail.length >= 1) {
        res.status(500).send({
          success: false,
          message: 'email has been registered!'
        })
      } else {
        const result = await createAccountEngineerModel(setData)
        if (result.affectedRows) {
          res.status(200).send({
            success: true,
            message: 'Success add account!'
          })
        } else {
          res.status(400).send({
            success: false,
            message: 'Submit account failed!'
          })
        }
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
      const { accName, accEmail, accPhone, accPassword, accLevel } = req.body
      const salt = bcrypt.genSaltSync(10)
      const encryptPassword = bcrypt.hashSync(accPassword, salt)

      const setData = {
        acc_nama: accName,
        acc_email: accEmail,
        acc_phone: accPhone,
        acc_password: encryptPassword,
        acc_level: accLevel
      }

      const resultSelect = await getAccountByIdModel(accountId)
      if (resultSelect.length) {
        const result = await updateAccountModel(accountId, setData)
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
          message: `Account with id ${accountId} not Found`
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
  },

  loginAccount: async (req, res) => {
    try {
      const { accEmail, accPassword } = req.body
      const dataUser = await checkAccountModel(accEmail)

      if (dataUser.length >= 1) {
        const checkPassword = await bcrypt.compareSync(accPassword, dataUser[0].acc_password)
        if (checkPassword) {
          const { acc_id, acc_email, acc_level, acc_phone, en_id } = dataUser[0]
          let payload = {
            acc_id,
            en_id,
            acc_email,
            acc_level,
            acc_phone
          }

          const token = jwt.sign(payload, process.env.JWT_KEY, { expiresIn: '1h' })
          payload = { ...payload, token }

          res.status(200).send({
            success: true,
            message: 'success login!',
            data: payload
          })
        } else {
          res.status(402).send({
            success: false,
            message: 'Wrong password!'
          })
        }
      } else {
        res.status(400).send({
          success: false,
          message: 'Email not registered!'
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
