const { findByIdAndDelete } = require("./../models/accounstModel")
const accountsModel = require("./../models/accounstModel")


async function getAccounts(req, res){
    try{
        const data = await accountsModel.find()

        return res.send(data)
    }
    catch(err){
        return res.status(400).send("Error on getting accounts")
    }
}

async function getAccountsById(req, res){
    try{
        const id = req.params.id
        
        const data = await accountsModel.findById(req.params.id)
        

        return res.send([data])
    }
    catch(err){
        const data = await accountsModel.find()

        return res.send(data)
    }
}

async function createAccount(req, res){
    try {

        await accountsModel.create(req.body)

        res.sendStatus(201)

    } catch (error) {

        if(!req.body.title){
            return res.status(406).send("Title field is empty")
        }

        return res.status(400).send("Error on creating accounts")
    }
}

async function updateAccount(req, res){
    try {
        
        const id = req.params.id

        const account = await accountsModel.findById(id) || null
      
        if(!account){
            return res.status(400).send("Accounts ID is incorrect")
        }

        const {title, username, password, email, extras} = req.body
        await accountsModel.findOneAndUpdate(id,{
            title,
            username,
            password,
            email,
            extras
        })

        return res.sendStatus(200)
    } catch (error) {
        return res.status(400).send("Error on updating account")
    }
}

async function deleteAccount(req, res){
    try {
        const account = await accountsModel.findById(req.params.id) || false
        if(!account){
            return res.status(400).send("Account not Found")
        }

        await accountsModel.findByIdAndRemove(req.params.id)

        return res.sendStatus(200)
    } catch (error) {
        return res.status(400).send("Error on deleting account")
    }
    
}

module.exports = {getAccounts, createAccount, updateAccount, deleteAccount, getAccountsById}