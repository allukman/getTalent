const { Router } = require('express')
const { createPortofolio, getPortofolioById, getPortofolioByEngId, updatePortofolio, deletePortofolio } = require('../controllers/portofolio')
const router = Router()

router.post('/', createPortofolio)
router.get('/:prId', getPortofolioById)
router.get('/engineer/:engineerId', getPortofolioByEngId)
router.put('/:prId', updatePortofolio)
router.delete('/:prId', deletePortofolio)

module.exports = router
