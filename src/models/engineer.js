const db = require('../helpers/db')

const { getSkillNameByEngIdModel } = require('../models/skill')

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
      const query = ` SELECT 
      en.en_id,
      ac.acc_id,
      ac.acc_nama,
      en.en_job_title,
      en.en_job_type,
      en.en_domisili,
      en.en_photo,
      sk.sk_nama_skill
 FROM engineer en
 JOIN account ac
   ON ac.acc_id = en.acc_id
LEFT JOIN skill sk
   ON sk.en_id = en.en_id
GROUP BY ac.acc_id
ORDER BY ac.acc_id `

      db.query(query, async (error, results, _fields) => {
        if (!error) {
          const data = []
          for (let i = 0; i < results.length; i++) {
            const item = results[i]

            const skill = await getSkillNameByEngIdModel(item.en_id)

            data[i] = {
              en_id: item.en_id,
              ac_id: item.acc_id,
              ac_name: item.acc_nama,
              en_job_title: item.en_job_title,
              en_job_type: item.en_job_type,
              en_domicile: item.en_domisili,
              en_profile: item.en_photo,
              en_skill: skill
            }
          }
          resolve(data)
        } else {
          reject(error)
        }
      })
    })
  },

  getEngineerByIdModel: (engineerId) => {
    return new Promise((resolve, reject) => {
      const query = `
      SELECT en.en_id,
             ac.acc_id,
             ac.acc_nama,
             en.en_job_title,
             en.en_job_type,
             en.en_photo,
             en.en_domisili
        FROM engineer en
        JOIN account ac
          ON ac.acc_id = en.acc_id
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

  searchEngineerModel: (paginate) => {
    return new Promise((resolve, reject) => {
      const query = `SELECT 
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
        WHERE ac.acc_nama LIKE '%${paginate.search}%' 
        OR sk.sk_nama_skill LIKE '%${paginate.search}%'
        GROUP BY ac.acc_id
        LIMIT ${paginate.limit}       
        OFFSET ${paginate.offset}`

      db.query(query, async (error, results, _fields) => {
        if (!error) {
          const data = []

          for (let i = 0; i < results.length; i++) {
            const item = results[i]

            const skill = await getSkillNameByEngIdModel(item.en_id)

            data[i] = {
              en_id: item.en_id,
              ac_id: item.acc_id,
              ac_name: item.acc_nama,
              en_job_title: item.en_job_title,
              en_job_type: item.en_job_type,
              en_domicile: item.en_domisili,
              en_profile: item.en_photo,
              en_skill: skill
            }
          }

          resolve(data)
        } else {
          reject(error)
        }
      })
    })
  },

  FilterEngineerModel: (paginate) => {
    return new Promise((resolve, reject) => {
      const filter = parseInt(paginate.filter)
      let order
      let where

      if (filter === 0) {
        order = 'ac.acc_nama'
        where = ''
      } else if (filter === 1) {
        order = 'sk_nama_skill '
        where = ''
      } else if (filter === 2) {
        order = 'en.en_domisili'
        where = ''
      } else if (filter === 3) {
        order = 'en.en_job_type'
        where = "WHERE en.en_job_title ='freelance' "
      } else if (filter === 4) {
        order = 'en.en_job_type'
        where = "WHERE en.en_job_title ='fulltime' "
      } else if (filter === 5) {
        order = 'ac.acc_nama'
        where = "WHERE en.en_job_title ='web developer' "
      } else {
        order = 'ac.acc_nama'
        where = "WHERE en.en_job_title ='android developer' "
      }

      const query = `
      SELECT en.en_id,
               ac.acc_id,
               ac.acc_nama,
               en.en_job_title,
               en.en_job_type,
               en.en_domisili
            FROM engineer en
            JOIN account ac
              ON ac.acc_id = en.acc_id
            ${where} AND en.en_job_title != ''
        ORDER BY ${order}
           LIMIT ${paginate.limit} 
          OFFSET ${paginate.offset}`

      db.query(query, async (error, results, _fields) => {
        if (!error) {
          const data = []
          for (let i = 0; i < results.length; i++) {
            const item = results[i]

            const skill = await getSkillNameByEngIdModel(item.en_id)

            data[i] = {
              en_id: item.en_id,
              ac_id: item.acc_id,
              ac_name: item.acc_nama,
              en_job_title: item.en_job_title,
              en_job_type: item.en_job_type,
              en_domicile: item.en_domisili,
              en_profile: item.en_photo,
              en_skill: skill
            }
          }
          resolve(data)
        } else {
          reject(error)
        }
      })
    })
  }
}
