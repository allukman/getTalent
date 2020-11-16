const { Router } = require('express')
const { getAllEngineer, getEngineerById, updateEngineer, searchEngineer } = require('../controllers/engineer')
const router = Router()

router.get('/', getAllEngineer)
router.get('/search/', searchEngineer)
router.get('/:engineerId', getEngineerById)
router.put('/:engineerId', updateEngineer)

module.exports = router
