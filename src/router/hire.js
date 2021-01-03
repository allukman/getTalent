const { Router } = require('express')
const { createHire, getHireByEngId, getHireByProjectId, getHireById, updateHire } = require('../controllers/hire')
const { authorizationAll, authorizationCompany } = require('../middleware/auth')
const router = Router()

router.post('/', authorizationCompany, createHire)
router.get('/engineer/:engineerId', authorizationAll, getHireByEngId)
router.get('/project/:projectId', authorizationAll, getHireByProjectId)
router.get('/:hireId', authorizationAll, getHireById)
router.put('/:hireId', authorizationAll, updateHire)

module.exports = router
