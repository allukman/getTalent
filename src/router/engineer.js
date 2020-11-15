const { Router } = require('express')
const { getAllEngineer, getEngineerById, updateEngineer } = require('../controllers/engineer')
const router = Router()

router.get('/',getAllEngineer)
router.get('/:engineerId',getEngineerById )
router.put('/:engineerId',updateEngineer)

module.exports = router     