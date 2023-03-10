const asyncHandler = require('express-async-handler')
const Tarea = require('../models/tareaModels')

const getTareas = asyncHandler( async (req, res) => {

    const tareas = await Tarea.find()
    res.status(200).json(tareas)
})

const setTareas = asyncHandler( async (req,res) => {

    if(!req.body.texto){
        // res.status(400).json({mensaje:'Favor ingresar la descripcion de la tarea'})
        res.status(400)
        throw new Error('Favor de teclear una informacion para la tarea')
    }
    const tarea = await Tarea.create({
        texto : req.body.texto
    })

    console.log(req.body);
    res.status(201).json(tarea)

})

const updateTareas = asyncHandler( async (req,res) => {
    res.status(200).json({mensaje:`Mofidicar las tarea ${req.params.id}`})
})

const deleteTareas = asyncHandler ( async (req,res) => {
    res.status(200).json({mensaje:`Borrar las tareas ${req.params.id}`})
})

module.exports = {
    getTareas,
    setTareas,
    updateTareas,
    deleteTareas,
}