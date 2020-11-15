const db = require('../helpers/db')

module.exports = {
    createExperienceModel: (data) => {
        return new Promise((resolve, reject) => {
          const query = `
            INSERT INTO experience
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

    getExperienceByIdModel: (xpId) => {
        return new Promise((resolve, reject) => {
          const query = `
            SELECT *
              FROM experience
             WHERE ?
          `
    
          db.query(query, { ex_id: xpId }, (error, results, _fields) => {
            if (!error) {
              resolve(results)
            } else {
              reject(error)
            }
          })
        })
      },
      
    getExperienceByEngIdModel: (engineerId) => {
        return new Promise((resolve, reject) => {
          const query = `
            SELECT *
              FROM experience
             WHERE ?
          `
    
          db.query(query, { en_id : engineerId }, (error, results, _fields) => {
            if (!error) {
              resolve(results)
            } else {
              reject(error)
            }
          })
        })
      },

    updateExperienceModel : (xpId, data) => {
        return new Promise((resolve, reject) => {
          const query = `UPDATE experience SET ? WHERE ex_id = ${xpId}`
      
          db.query(query, data, (error, results, _fields) => {
            if (!error) {
              resolve(results)
            } else {
              reject(error)
            }
          })
        })
      },

      deleteExperienceModel: (xpId) => {
        return new Promise((resolve, reject) => {
            db.query(`DELETE FROM experience WHERE ex_id = ${xpId}`, (err, result, fields) => {
                if(!err) {
                    resolve(result)
                } else {
                    reject(new Error(err))
                }
            })
        })
    }

}