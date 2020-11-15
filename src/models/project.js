const db = require('../helpers/db')

module.exports = {
    createProjectModel: (data) => {
        return new Promise((resolve, reject) => {
          const query = `
            INSERT INTO project
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

    getProjectByIdModel: (projectId) => {
        return new Promise((resolve, reject) => {
          const query = `
            SELECT *
              FROM project
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
      
    getProjectByComIdModel: (comId) => {
        return new Promise((resolve, reject) => {
          const query = `
            SELECT *
              FROM project
             WHERE ?
          `
    
          db.query(query, { com_id: comId }, (error, results, _fields) => {
            if (!error) {
              resolve(results)
            } else {
              reject(error)
            }
          })
        })
      },

    updateProjectModel : (pjId, data) => {
        return new Promise((resolve, reject) => {
          const query = `UPDATE project SET ? WHERE pj_id = ${pjId}`
      
          db.query(query, data, (error, results, _fields) => {
            if (!error) {
              resolve(results)
            } else {
              reject(error)
            }
          })
        })
      },

      deleteProjectModel: (pjId) => {
        return new Promise((resolve, reject) => {
            db.query(`DELETE FROM project WHERE pj_id = ${pjId}`, (err, result, fields) => {
                if(!err) {
                    resolve(result)
                } else {
                    reject(new Error(err))
                }
            })
        })
    }

}