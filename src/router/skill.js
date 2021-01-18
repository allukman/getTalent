const { Router } = require('express')
const { createSkill, getSkillById, getSkillByEngId, updateSkill, deleteSkill } = require('../controllers/skill')
const { authorizationEngineer, authorizationAll } = require('../middleware/auth')
const router = Router()

router.post('/', authorizationEngineer, createSkill)
router.get('/:skId', authorizationEngineer, getSkillById)
router.get('/engineer/:engineerId', authorizationAll, getSkillByEngId)
router.put('/:skId', authorizationEngineer, updateSkill)
router.delete('/:skId', authorizationEngineer, deleteSkill)

module.exports = router
