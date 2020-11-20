require('dotenv')
const jwt = require('jsonwebtoken')

module.exports = {
  authorizationAdmin: (req, res, next) => {
    let token = req.headers.authorization
    if (token) {
      token = token.split(' ')[1]
      jwt.verify(token, process.env.JWT_KEY, (error, results) => {
        if ((error && error.name === 'JsonWebTokenError') || (error && error.name === 'TokenExpiredError')) {
          res.status(403).send({
            success: false,
            message: error.message
          })
        } else {
          if (results.acc_level === 0) {
            next()
          } else {
            res.status(403).send({
              success: false,
              message: 'Only admin can access this!'
            })
          }
        }
      })
    } else {
      res.status(400).send({
        success: false,
        message: 'Login first!'
      })
    }
  },

  authorizationEngineer: (req, res, next) => {
    let token = req.headers.authorization
    if (token) {
      token = token.split(' ')[1]
      jwt.verify(token, process.env.JWT_KEY, (error, results) => {
        if ((error && error.name === 'JsonWebTokenError') || (error && error.name === 'TokenExpiredError')) {
          res.status(403).send({
            success: false,
            message: error.message
          })
        } else {
          if (results.acc_level === 0 || results.acc_level === 1) {
            next()
          } else {
            res.status(403).send({
              success: false,
              message: 'You cant access!'
            })
          }
        }
      })
    } else {
      res.status(400).send({
        success: false,
        message: 'Login first!'
      })
    }
  },

  authorizationCompany: (req, res, next) => {
    let token = req.headers.authorization
    if (token) {
      token = token.split(' ')[1]
      jwt.verify(token, process.env.JWT_KEY, (error, results) => {
        if ((error && error.name === 'JsonWebTokenError') || (error && error.name === 'TokenExpiredError')) {
          res.status(403).send({
            success: false,
            message: error.message
          })
        } else {
          if (results.acc_level === 0 || results.acc_level === 2) {
            next()
          } else {
            res.status(403).send({
              success: false,
              message: 'You cant access!'
            })
          }
        }
      })
    } else {
      res.status(400).send({
        success: false,
        message: 'Login first!'
      })
    }
  },
  authorizationAll: (req, res, next) => {
    let token = req.headers.authorization
    if (token) {
      token = token.split(' ')[1]
      jwt.verify(token, process.env.JWT_KEY, (error, results) => {
        if ((error && error.name === 'JsonWebTokenError') || (error && error.name === 'TokenExpiredError')) {
          res.status(403).send({
            success: false,
            message: error.message
          })
        } else {
          if (results.acc_level === 0 || results.acc_level === 1 || results.acc_level === 2) {
            next()
          } else {
            res.status(403).send({
              success: false,
              message: 'Only admin can access this!'
            })
          }
        }
      })
    } else {
      res.status(400).send({
        success: false,
        message: 'Login first!'
      })
    }
  }
}
