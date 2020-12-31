const { Router } = require('express')
const { getAllEngineer, getEngineerById, getEngineerByAccountId, updateEngineer, searchEngineer, FilterEngineer } = require('../controllers/engineer')
const { authorizationAll, authorizationEngineer } = require('../middleware/auth')
const uploadImage = require('../middleware/multer')
const router = Router()

router.get('/account/:accountId', authorizationAll, getEngineerByAccountId)
router.get('/', authorizationEngineer, getAllEngineer)
router.get('/search/', authorizationAll, getAllEngineer)
router.get('/filter', authorizationAll, FilterEngineer)
router.get('/:engineerId', authorizationEngineer, getEngineerById)
router.put('/:engineerId', authorizationEngineer, uploadImage, updateEngineer)

module.exports = router
