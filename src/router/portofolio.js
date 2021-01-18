const { Router } = require('express')
const { createPortofolio, getPortofolioById, getPortofolioByEngId, updatePortofolio, deletePortofolio } = require('../controllers/portofolio')
const { authorizationEngineer, authorizationAll } = require('../middleware/auth')
const uploadImage = require('../middleware/multer')
const router = Router()

router.post('/', authorizationEngineer, uploadImage, createPortofolio)
router.get('/:prId', authorizationEngineer, getPortofolioById)
router.get('/engineer/:engineerId', authorizationAll, getPortofolioByEngId)
router.put('/:prId', authorizationEngineer, uploadImage, updatePortofolio)
router.delete('/:prId', authorizationEngineer, deletePortofolio)

module.exports = router
