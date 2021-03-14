const mongoose = require("./../databases")

const accountsSchema = new mongoose.Schema({
    title:{
        type: String,
        required:true,
    },
    username:{
        type: String,
    },
    password:{
        type: String,
    },
    email:{
        type: String,
    },
    extras:{
        type: String,
    },
})

const accountsModel = mongoose.model('accounts',accountsSchema)

module.exports = accountsModel
