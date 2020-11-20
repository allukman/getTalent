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

  searchEngineerModel: (rules, callback) => {
    db.query(`SELECT 
        en.en_id,
        ac.acc_id,
        ac.acc_nama,
        ac.acc_email,
        ac.acc_phone,
        sk.sk_nama_skill,
        en.en_job_title,
        en.en_job_type,
        en.en_domisili
        FROM engineer en 
        JOIN account ac 
          ON (ac.acc_id = en.acc_id)
        JOIN skill sk 
          ON (sk.en_id = en.en_id)         
        WHERE ac.acc_nama LIKE '%${rules.search}%' 
        OR sk.sk_nama_skill LIKE '%${rules.search}%'
        GROUP BY ac.acc_id
        LIMIT ${rules.limit}       
        OFFSET ${rules.offset}`,
    (err, result, fields) => {
      if (!err) {
        callback(result)
      } else {
        callback(err)
      }
    })
  },
  FilterEngineerModel: (paginate) => {
    return new Promise((resolve, reject) => {
      const filter = parseInt(paginate.filter)
      let query

      if (filter === 0) {
        query = `
          SELECT en.en_id,
               ac.acc_id,
               ac.acc_nama,
               en.en_job_title,
               en.en_job_type,
               en.en_domisili
            FROM engineer en
            JOIN account ac
              ON ac.acc_id = en.acc_id
            JOIN skill sk
              ON sk.en_id = en.en_id
        GROUP BY ac.acc_id
        ORDER BY ac.acc_nama ASC
           LIMIT ${paginate.limit} 
          OFFSET ${paginate.offset}
        `
      } else if (filter === 1) {
        query = `
          SELECT en.en_id,
               ac.acc_id,
               ac.acc_nama,
               en.en_job_title,
               en.en_job_type,
               en.en_domisili
            FROM engineer en
            JOIN account ac
              ON ac.acc_id = en.acc_id
            JOIN skill sk
              ON sk.en_id = en.en_id
        GROUP BY ac.acc_id
        ORDER BY sk.sk_nama_skill ASC
           LIMIT ${paginate.limit} 
          OFFSET ${paginate.offset}
        `
      } else if (filter === 2) {
        query = `
          SELECT en.en_id,
               ac.acc_id,
               ac.acc_nama,
               en.en_job_title,
               en.en_job_type,
               en.en_domisili
            FROM engineer en
            JOIN account ac
              ON ac.acc_id = en.acc_id
            JOIN skill sk
              ON sk.en_id = en.en_id
        GROUP BY ac.acc_id
        ORDER BY en.en_domisili ASC
           LIMIT ${paginate.limit} 
          OFFSET ${paginate.offset}
        `
      } else if (filter === 3) {
        query = `
          SELECT en.en_id,
                 ac.acc_id,
                 ac.acc_nama,
                 en.en_job_title,
                 en.en_job_type,
                 en.en_domisili
            FROM engineer en
            JOIN account ac
              ON ac.acc_id = en.acc_id
            JOIN skill sk
              ON sk.en_id = en.en_id
           WHERE en.en_job_type = 'freelance'
        GROUP BY ac.acc_id
        ORDER BY en.en_job_type ASC
           LIMIT ${paginate.limit} 
          OFFSET ${paginate.offset}
        `
      } else {
        query = `
          SELECT en.en_id,
                 ac.acc_id,
                 ac.acc_nama,
                 en.en_job_title,
                 en.en_job_type,
                 en.en_domisili
            FROM engineer en
            JOIN account ac
              ON ac.acc_id = en.acc_id
            JOIN skill sk
              ON sk.en_id = en.en_id
           WHERE en.en_job_type = 'full time'
        GROUP BY ac.acc_id
        ORDER BY en.en_job_type ASC
           LIMIT ${paginate.limit} 
          OFFSET ${paginate.offset}
        `
      }

      db.query(query, (error, results, _fields) => {
        if (!error) {
          resolve(results)
        } else {
          reject(error)
        }
      })
    })
  }
}
