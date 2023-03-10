const mongoose = require('mongoose')

const tareaSchema = mongoose.Schema({
    texto:{
        type : String,
        required : [true , 'Por favor teclea una cadena']
    }
},{
    timestamp : true
}
)
module.exports = mongoose.model('Tarea',tareaSchema)