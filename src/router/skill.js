const { Router } = require('express')
const { createSkill, getSkillById, getSkillByEngId,updateSkill, deleteSkill} = require('../controllers/skill')
const router = Router()

router.post('/',createSkill)
router.get('/:skId',getSkillById)
router.get('/engineer/:engineerId', getSkillByEngId)
router.put('/:skId',updateSkill)
router.delete('/:skId',deleteSkill)

module.exports = router         