const { Router } = require('express')
const { createExperience, getExperienceById, getExperienceByEngId, updateExperience, deleteExperience } = require('../controllers/experience')
const router = Router()

router.post('/', createExperience)
router.get('/:xpId', getExperienceById)
router.get('/engineer/:engineerId', getExperienceByEngId)
router.put('/:xpId', updateExperience)
router.delete('/:xpId', deleteExperience)

module.exports = router
