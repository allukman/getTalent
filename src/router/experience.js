const { Router } = require('express')
const { createExperience, getExperienceById, getExperienceByEngId, updateExperience, deleteExperience } = require('../controllers/experience')
const { authorizationEngineer } = require('../middleware/auth')
const uploadImage = require('../middleware/multer')
const router = Router()

router.post('/', authorizationEngineer, uploadImage, createExperience)
router.get('/:xpId', authorizationEngineer, getExperienceById)
router.get('/engineer/:engineerId', authorizationEngineer, getExperienceByEngId)
router.put('/:xpId', authorizationEngineer, uploadImage, updateExperience)
router.delete('/:xpId', authorizationEngineer, deleteExperience)

module.exports = router
