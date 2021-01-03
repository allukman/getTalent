const { Router } = require('express')
const { createProject, getProjectById, getProjectByComId, updateProject, deleteProject } = require('../controllers/project')
const { authorizationCompany, authorizationAll } = require('../middleware/auth')
const uploadImage = require('../middleware/multer')
const router = Router()

router.post('/', authorizationCompany, uploadImage, createProject)
router.get('/:pjId', authorizationAll, getProjectById)
router.get('/company/:comId', authorizationCompany, getProjectByComId)
router.put('/:pjId', authorizationCompany, uploadImage, updateProject)
router.delete('/:pjId', authorizationCompany, deleteProject)

module.exports = router
