
const db = require('../helpers/db')

module.exports = {
  createHireModel: (data) => {
    return new Promise((resolve, reject) => {
      const query = `
            INSERT INTO hire
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

  getHireByEngIdModel: (engineerId) => {
    return new Promise((resolve, reject) => {
      const query = `
            SELECT *
              FROM hire
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

  getHireByProjectIdModel: (projectId) => {
    return new Promise((resolve, reject) => {
      const query = `
            SELECT *
              FROM hire
             WHERE ?
          `

      db.query(query, { pj_id: projectId }, (error, results, _fields) => {
        if (!error) {
          resolve(results)
        } else {
          reject(error)
        }
      })
    })
  },

  getHireByIdModel: (hireId) => {
    return new Promise((resolve, reject) => {
      const query = `
            SELECT *
              FROM hire
             WHERE ?
          `

      db.query(query, { hr_id: hireId }, (error, results, _fields) => {
        if (!error) {
          resolve(results)
        } else {
          reject(error)
        }
      })
    })
  },

  updateHireModel: (hireId, data) => {
    return new Promise((resolve, reject) => {
      const query = `UPDATE hire SET ? WHERE hr_id = ${hireId}`

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
