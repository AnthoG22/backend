const asyncHandler = require('express-async-handler')
const User = require('../models/userModel')

const getTareas = asyncHandler( async (req, res) => {

    const users = await User.find()
    res.status(200).json(users)
})

const registerUser = asyncHandler( async (req,res) => {

    // if(!req.body.texto){
    //     // res.status(400).json({mensaje:'Favor ingresar la descripcion de la tarea'})
    //     res.status(400)
    //     throw new Error('Favor de teclear una informacion para la tarea')
    // }
    // const tarea = await Tarea.create({
    //     texto : req.body.texto
    // })

    // console.log(req.body);
    res.status(201).json({mensaje : `se registra el User`})

})

const updateTareas = asyncHandler( async (req,res) => {
    res.status(200).json({mensaje:`Mofidicar las tarea ${req.params.id}`})
})

const deleteTareas = asyncHandler ( async (req,res) => {
    res.status(200).json({mensaje:`Borrar las tareas ${req.params.id}`})
})

module.exports = {
    getTareas,
    registerUser,
    updateTareas,
    deleteTareas,
}