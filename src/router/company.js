
const { Router } = require('express')
const { getAllcompany, getCompanyById, updateCompany } = require('../controllers/company')
const router = Router()

router.get('/',getAllcompany)
router.get('/:comId',getCompanyById )
router.put('/:comId',updateCompany)

module.exports = router     