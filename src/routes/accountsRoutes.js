
const accountsMiddlewares = require('./../middlewares/accountsMiddlewares')
const router = require('express').Router()


router.get("/accounts",accountsMiddlewares.getAccounts)
router.get("/accounts/:id",accountsMiddlewares.getAccountsById)
router.post("/accounts",accountsMiddlewares.createAccount)
router.put("/accounts/:id",accountsMiddlewares.updateAccount)
router.delete('/accounts/:id',accountsMiddlewares.deleteAccount)
module.exports = router