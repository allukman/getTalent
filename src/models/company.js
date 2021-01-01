const db = require('../helpers/db')

module.exports = {
  createCompanyModel: (data) => {
    return new Promise((resolve, reject) => {
      const query = ' INSERT INTO company SET ? '
      db.query(query, data, (error, results, _fields) => {
        if (!error) {
          resolve(results)
        } else {
          reject(error)
        }
      })
    })
  },
  getAllCompanyModel: () => {
    return new Promise((resolve, reject) => {
      const query = ' SELECT * FROM company '

      db.query(query, (error, results, _fields) => {
        if (!error) {
          resolve(results)
        } else {
          reject(error)
        }
      })
    })
  },

  getCompanyByIdModel: (comId) => {
    return new Promise((resolve, reject) => {
      const query = 'SELECT * FROM company WHERE ? '

      db.query(query, { com_id: comId }, (error, results, _fields) => {
        if (!error) {
          resolve(results)
        } else {
          reject(error)
        }
      })
    })
  },

  getCompanyIdByAccountIdModel: (accountId) => {
    return new Promise((resolve, reject) => {
      const query = `
      SELECT com.com_id,
             ac.acc_id,
             ac.acc_nama,
             ac.acc_email
        FROM account ac
        JOIN company com
          ON com.acc_id = ac.acc_id
       WHERE ac.?
    `
      db.query(query, { acc_id: accountId }, (error, results, _fields) => {
        if (!error) {
          resolve(results)
        } else {
          reject(error)
        }
      })
    })
  },

  updateCompanyModel: (comId, data) => {
    return new Promise((resolve, reject) => {
      const query = `UPDATE company SET ? WHERE com_id = ${comId}`

      db.query(query, data, (error, results, _fields) => {
        if (!error) {
          resolve(results)
        } else {
          reject(error)
        }
      })
    })
  }
}
