const db = require('../helpers/db')

const { createEngineerModel } = require('../models/engineer')
const { createCompanyModel } = require('../models/company')

module.exports = {

  getAccountByIdModel: (accountId) => {
    return new Promise((resolve, reject) => {
      db.query(`SELECT * FROM account WHERE acc_id = ${accountId}`, (err, result, fields) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },

  getAccountModel: (searchKey, searchValue, limit, offset) => {
    return new Promise((resolve, reject) => {
      db.query(`SELECT * FROM account WHERE ${searchKey} LIKE '%${searchValue}%' LIMIT ${limit} OFFSET ${offset}`, (err, result, fields) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },

  createAccountModel: (data) => {
    return new Promise((resolve, reject) => {
      const query = 'INSERT INTO account SET ?'
      const dataAcc = {
        acc_nama: data.acc_nama,
        acc_email: data.acc_email,
        acc_phone: data.acc_phone,
        acc_password: data.acc_password,
        acc_level: data.acc_level
      }

      db.query(query, dataAcc, async (err, result, fields) => {
        if (!err) {
          if (parseInt(data.acc_level) === 1) {
            await createEngineerModel(result.insertId)
          } else {
            await createCompanyModel({
              acc_id: result.insertId,
              com_company: data.com_company,
              com_position: data.com_position
            })
          }
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },

  updateAccountModel: (accountId, data) => {
    return new Promise((resolve, reject) => {
      const query = ` UPDATE account SET ? WHERE acc_id = ${accountId}`
      db.query(query, data, (err, result, _fields) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },

  deleteAccountModel: (accountId) => {
    return new Promise((resolve, reject) => {
      db.query(`DELETE FROM account WHERE acc_id = ${accountId}`, (err, result, fields) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  }
}
