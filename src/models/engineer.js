const db = require('../helpers/db')


module.exports = {
    createEngineerModel: (accountId) => {
        return new Promise((resolve, reject) => {
          const query = `
            INSERT INTO engineer
                    SET ?
          `
    
          db.query(query, { acc_id: accountId}, (error, results, _fields) => {
            if (!error) {
              resolve(results)
            } else {
              reject(error)
            }
          })
        })
      },            
    getAllEngineerModel : () => {
        return new Promise((resolve, reject) => {
          const query = ` SELECT * FROM engineer `
      
          db.query(query, (error, results, _fields) => {
            if (!error) {
              resolve(results)
            } else {
              reject(error)
            }
          })
        })
      
      },   
    getEngineerByIdModel : (engineerId) => {
        return new Promise((resolve, reject) => {
          const query = `SELECT * FROM engineer WHERE ? `
      
          db.query(query, {en_id : engineerId}, (error, results, _fields)=> {
            if (!error) {
              resolve(results)
            } else {
              reject(error)
            }
          })
        })    
      },
    updateEngineerModel : (engineerId, data) => {
        return new Promise((resolve, reject) => {
          const query = `UPDATE engineer SET ? WHERE en_id = ${engineerId}`
      
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