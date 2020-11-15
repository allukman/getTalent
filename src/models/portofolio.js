const db = require('../helpers/db')

module.exports = {
    createPortofolioModel: (data) => {
        return new Promise((resolve, reject) => {
          const query = `
            INSERT INTO portofolio
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

    getPortofolioByIdModel: (prId) => {
        return new Promise((resolve, reject) => {
          const query = `
            SELECT *
              FROM portofolio
             WHERE ?
          `
    
          db.query(query, { pr_id: prId }, (error, results, _fields) => {
            if (!error) {
              resolve(results)
            } else {
              reject(error)
            }
          })
        })
      },
      
    getPortofolioByEngIdModel: (engineerId) => {
        return new Promise((resolve, reject) => {
          const query = `
            SELECT *
              FROM portofolio
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

    updatePortofolioModel : (prId, data) => {
        return new Promise((resolve, reject) => {
          const query = `UPDATE portofolio SET ? WHERE pr_id = ${prId}`
      
          db.query(query, data, (error, results, _fields) => {
            if (!error) {
              resolve(results)
            } else {
              reject(error)
            }
          })
        })
      },

      deletePortofolioModel: (prId) => {
        return new Promise((resolve, reject) => {
            db.query(`DELETE FROM portofolio WHERE pr_id = ${prId}`, (err, result, fields) => {
                if(!err) {
                    resolve(result)
                } else {
                    reject(new Error(err))
                }
            })
        })
    }

 }