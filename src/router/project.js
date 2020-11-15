const { Router } = require('express')
const { createProject, getProjectById, getProjectByComId, updateProject, deleteProject} = require('../controllers/project')
const router = Router()

router.post('/',createProject)
router.get('/:pjId',getProjectById)
router.get('/company/:comId', getProjectByComId)
router.put('/:pjId',updateProject)
router.delete('/:pjId',deleteProject)

module.exports = router         