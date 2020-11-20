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

  // createAccountEngineerModel: (setData) => {
  //   return new Promise((resolve, reject) => {
  //     const newData = {
  //       acc_nama: setData.acc_nama,
  //       acc_email: setData.acc_email,
  //       acc_password: setData.acc_password,
  //       acc_phone: setData.acc_phone,
  //       acc_level: setData.acc_level
  //     }
  //     const query = 'INSERT INTO account SET ?'
  //     db.query(query, newData, async (err, result, fields) => {
  //       if (!err) {
  //         if (parseInt(setData.acc_level) === 1) {
  //           await createEngineerModel(result.insertId)
  //         } else {
  //           await createCompanyModel({
  //             acc_id: result.insertId,
  //             com_company: setData.com_company,
  //             com_position: setData.com_position
  //           })
  //         }
  //         resolve(result)
  //       } else {
  //         reject(new Error(err))
  //       }
  //     })
  //   })
  // },

  createAccountEngineerModel: (setData) => {
    return new Promise((resolve, reject) => {
      const newData = {
        acc_nama: setData.acc_nama,
        acc_email: setData.acc_email,
        acc_password: setData.acc_password,
        acc_phone: setData.acc_phone,
        acc_level: setData.acc_level
      }
      const query = 'INSERT INTO account SET ?'
      db.query(query, newData, async (err, result, fields) => {
        if (!err) {
          if (parseInt(setData.acc_level) === 1) {
            await createEngineerModel(result.insertId)
          } else if (parseInt(setData.acc_level) === 2) {
            await createCompanyModel({
              acc_id: result.insertId,
              com_company: setData.com_company,
              com_position: setData.com_position
            })
          } else {
            resolve(result)
          }
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },

  updateAccountModel: (accountId, setData) => {
    return new Promise((resolve, reject) => {
      const query = ` UPDATE account SET ? WHERE acc_id = ${accountId}`
      db.query(query, setData, (err, result, _fields) => {
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
  },

  checkAccountModel: (email) => {
    return new Promise((resolve, reject) => {
      db.query('SELECT * FROM account WHERE acc_email = ?', email, (err, result, fields) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  }

}
