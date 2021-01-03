const { Router } = require('express')
const { getAllEngineer, getEngineerById, getEngineerByAccountId, updateEngineer, searchEngineer, FilterEngineer, getEngineerIdByAccountId } = require('../controllers/engineer')
const { authorizationAll, authorizationEngineer } = require('../middleware/auth')
const uploadImage = require('../middleware/multer')
const router = Router()

router.get('/getId/:accountId', authorizationAll, getEngineerIdByAccountId)
router.get('/account/:accountId', authorizationAll, getEngineerByAccountId)
router.get('/', authorizationAll, getAllEngineer)
router.get('/search/', authorizationAll, searchEngineer)
router.get('/filter', authorizationAll, FilterEngineer)
router.get('/:engineerId', authorizationAll, getEngineerById)
router.put('/:engineerId', authorizationEngineer, uploadImage, updateEngineer)

module.exports = router
