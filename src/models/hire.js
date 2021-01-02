
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
      SELECT hr.hr_id,
             hr.en_id,
             hr.pj_id,
             pj.pj_nama_project,
             hr.hr_price,
             hr.hr_message,
             hr.hr_status,
             hr.hr_createdAt,
             pj.pj_deadline
      FROM hire hr
      JOIN project pj
      ON hr.pj_id = pj.pj_id
      WHERE hr.?
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
      SELECT hr.hr_id,
             hr.en_id,
             hr.pj_id,
             pj.pj_nama_project,
             hr.hr_price,
             hr.hr_message,
             hr.hr_status,
             hr.hr_createdAt,
             pj.pj_deadline
      FROM hire hr
      JOIN project pj
      ON hr.pj_id = pj.pj_id
      WHERE hr.?
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
