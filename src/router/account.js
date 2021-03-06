const { Router } = require('express')
const { getAccountById, getAccount, createAccount, updateAccount, deleteAccount, loginAccount } = require('../controllers/account')
const { authorizationAdmin, authorizationAll } = require('../middleware/auth')
const router = Router()

router.get('/:accountId', authorizationAll, getAccountById)
router.get('/', authorizationAll, getAccount)
router.post('/register', createAccount)
router.put('/:accountId', authorizationAll, updateAccount)
router.delete('/:accountId', authorizationAdmin, deleteAccount)
router.post('/login', loginAccount)

module.exports = router
