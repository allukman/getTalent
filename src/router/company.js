
const { Router } = require('express')

const { getAllcompany, getCompanyById, updateCompany } = require('../controllers/company')
const { authorizationCompany } = require('../middleware/auth')
const uploadImage = require('../middleware/multer')

const router = Router()

// const upload = multer({ dest: './uploads/' })

router.get('/', authorizationCompany, getAllcompany)
router.get('/:comId', authorizationCompany, getCompanyById)
router.put('/:comId', authorizationCompany, uploadImage, updateCompany)

module.exports = router
