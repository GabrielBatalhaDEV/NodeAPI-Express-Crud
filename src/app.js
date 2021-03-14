const accountsRouter = require('./routes/accountsRoutes')
const express = require('express')

const app = express()
app.use(express.urlencoded({extended: false}))
app.use(express.json())
app.use(accountsRouter)

module.exports = {app}
