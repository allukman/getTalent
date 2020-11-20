const { Router } = require('express')
const { getAllEngineer, getEngineerById, updateEngineer, searchEngineer, FilterEngineer } = require('../controllers/engineer')
const { authorizationAll, authorizationEngineer } = require('../middleware/auth')
const uploadImage = require('../middleware/multer')
const router = Router()

router.get('/', authorizationEngineer, getAllEngineer)
router.get('/search/', authorizationAll, searchEngineer)
router.get('/filter', authorizationAll, FilterEngineer)
router.get('/:engineerId', authorizationEngineer, getEngineerById)
router.put('/:engineerId', authorizationEngineer, uploadImage, updateEngineer)

module.exports = router
