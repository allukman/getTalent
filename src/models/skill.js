const db = require('../helpers/db')

module.exports = {
  createSkillModel: (data) => {
    return new Promise((resolve, reject) => {
      const query = `
            INSERT INTO skill
                    SET ?
          `

      db.query(query, data, (error, results, _fields) => {
        if (!error) {
          resolve(results)
        } else {
          reject(error)
        }
      })
    })
  },

  getSkillByIdModel: (skId) => {
    return new Promise((resolve, reject) => {
      const query = `
            SELECT *
              FROM skill
             WHERE ?
          `

      db.query(query, { sk_id: skId }, (error, results, _fields) => {
        if (!error) {
          resolve(results)
        } else {
          reject(error)
        }
      })
    })
  },

  getSkillByEngIdModel: (engineerId) => {
    return new Promise((resolve, reject) => {
      const query = `
            SELECT *
              FROM skill
             WHERE ?
          `

      db.query(query, { en_id: engineerId }, (error, results, _fields) => {
        if (!error) {
          resolve(results)
        } else {
          reject(error)
        }
      })
    })
  },

  getSkillNameByEngIdModel: (engineerId) => {
    return new Promise((resolve, reject) => {
      const query = `
            SELECT sk_nama_skill
              FROM skill
             WHERE ?
          `

      db.query(query, { en_id: engineerId }, (error, results, _fields) => {
        if (!error) {
          resolve(results)
        } else {
          reject(error)
        }
      })
    })
  },

  updateSkillModel: (skId, data) => {
    return new Promise((resolve, reject) => {
      const query = `UPDATE skill SET ? WHERE sk_id = ${skId}`

      db.query(query, data, (error, results, _fields) => {
        if (!error) {
          resolve(results)
        } else {
          reject(error)
        }
      })
    })
  },

  deleteSkillModel: (skId) => {
    return new Promise((resolve, reject) => {
      db.query(`DELETE FROM skill WHERE sk_id = ${skId}`, (err, result, fields) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  }

}
