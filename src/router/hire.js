const { Router } = require('express')
const {createHire, getHireByEngId, getHireByProjectId, getHireById, updateHire} = require('../controllers/hire')
const router = Router()

router.post('/',createHire)
router.get('/engineer/:engineerId',getHireByEngId )
router.get('/project/:projectId', getHireByProjectId)
router.get('/:hireId',getHireById)
router.put('/:hireId',updateHire)

module.exports = router     