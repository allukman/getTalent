const { Router } = require('express')
const { createExperience, getExperienceById, getExperienceByEngId, updateExperience, deleteExperience } = require('../controllers/experience')
const { authorizationEngineer } = require('../middleware/auth')
const router = Router()

router.post('/', authorizationEngineer, createExperience)
router.get('/:xpId', authorizationEngineer, getExperienceById)
router.get('/engineer/:engineerId', authorizationEngineer, getExperienceByEngId)
router.put('/:xpId', authorizationEngineer, updateExperience)
router.delete('/:xpId', authorizationEngineer, deleteExperience)

module.exports = router
