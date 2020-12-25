const express = require('express')
require('dotenv').config()
const bodyParser = require('body-parser')
const app = express()
const port = process.env.PORT
const morgan = require('morgan')

const accountRouter = require('./src/router/account')
const companyRouter = require('./src/router/company')
const engineerRouter = require('./src/router/engineer')
const skillRouter = require('./src/router/skill')
const experienceRouter = require('./src/router/experience')
const portofolioRouter = require('./src/router/portofolio')
const projectRouter = require('./src/router/project')
const hireRouter = require('./src/router/hire')
const cors = require('cors')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(morgan('dev'))
app.use(cors())

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-requested-With, Content-type, Accept, Authorization'
  )
  next()
})

app.use('/image', express.static('./uploads'))

app.use('/account', accountRouter)
app.use('/company', companyRouter)
app.use('/engineer', engineerRouter)
app.use('/skill', skillRouter)
app.use('/experience', experienceRouter)
app.use('/portofolio', portofolioRouter)
app.use('/project', projectRouter)
app.use('/hire', hireRouter)

app.get('/', (req, res) => {
  res.send('Get Talent - Hiring project APP')
})
app.listen(port, () => {
  console.log(`listen app on port ${port}`)
})
