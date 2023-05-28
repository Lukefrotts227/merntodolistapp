const mongoose = require('mongoose'); 
const Schema = mongoose.Schema; 

const PersSchema = new mongoose.Schema({
    name: {
        type: String
    },

    username: {
        type: String, 
        required: true
    }, 

    new_date: {
        type : Date, 
        default: Date.now
    }

    




    
})



module.exports = Pers = mongoose.model('pers', PersSchema);