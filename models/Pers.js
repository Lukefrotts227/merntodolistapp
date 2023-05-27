const mongoose = require('mongoose'); 
const Schema = mongoose.Schema; 

const PersSchema = new mongoose.Schema({
    name: {
        type: String, 
    },


    
})



module.exports = Pers = mongoose.model('pers', PersSchema);