const { Router } = require('express')
const { getAccountById, getAccount, createAccount, updateAccount, deleteAccount } = require('../controllers/account')
const router = Router()

router.get('/:accountId', getAccountById)
router.get('/', getAccount)
router.post('/', createAccount)
router.put('/:accountId', updateAccount)
router.delete('/:accountId', deleteAccount)

module.exports = router
