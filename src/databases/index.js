const mongoose = require("mongoose")

mongoose.connect('mongodb://localhost:27017/accounts',{
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology:true,
    useCreateIndex: true

})


module.exports = mongoose