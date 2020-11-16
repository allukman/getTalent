const db = require('../helpers/db')

module.exports = {
  createEngineerModel: (accountId) => {
    return new Promise((resolve, reject) => {
      const query = `
            INSERT INTO engineer
                    SET ?
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
  getAllEngineerModel: () => {
    return new Promise((resolve, reject) => {
      const query = ' SELECT * FROM engineer '

      db.query(query, (error, results, _fields) => {
        if (!error) {
          resolve(results)
        } else {
          reject(error)
        }
      })
    })
  },
  getEngineerByIdModel: (engineerId) => {
    return new Promise((resolve, reject) => {
      const query = 'SELECT * FROM engineer WHERE ? '

      db.query(query, { en_id: engineerId }, (error, results, _fields) => {
        if (!error) {
          resolve(results)
        } else {
          reject(error)
        }
      })
    })
  },
  updateEngineerModel: (engineerId, data) => {
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
  },

  searchEngineerModel: (searchKey, searchValue, limit, offset, callback) => {
    db.query(`SELECT 
        en.en_id,
        ac.acc_id,
        ac.acc_nama,
        ac.acc_email,
        ac.acc_phone,
        en.en_job_title,
        en.en_job_type,
        en.en_domisili
        FROM engineer en JOIN account ac ON (ac.acc_id = en.acc_id)          
        WHERE ${searchKey} LIKE '%${searchValue}%' 
        LIMIT ${limit}       
        OFFSET ${offset}`,
    (err, result, fields) => {
      if (!err) {
        callback(result)
      } else {
        callback(err)
      }
    })
  }

  // getFilterEngineerModel: (data) => {
  //   return new Promise((resolve, reject) => {
  //     let query

  //     if (data.filter === 'name') {
  //       query = `
  //         SELECT acc_nama FROM account
  //       `
  //     } else if (data.filter === 'skill') {
  //       query = `
  //         SELECT sk_nama_skill FROM skill
  //       `
  //     } else if (data.filter === 'lokasi') {
  //       query = `
  //         SELECT en_domisili FROM engineer
  //       `
  //     } else if (data.filter === 'freelance') {
  //       query = `
  //         SELECT * FROM engineer WHERE en_job_type = 'freelance'
  //       `
  //     } else if (data.filter === 'fulltime') {
  //       query = `
  //       SELECT * FROM engineer WHERE en_job_type = 'fulltime'
  //     `
  //     } else {
  //       query = ' SELECT * FROM engineer '
  //     }

  //     db.query(query, (error, results, _fields) => {
  //       if (!error) {
  //         resolve(results)
  //       } else {
  //         reject(error)
  //         console.log(error)
  //       }
  //     })
  //   })
  // }

}
