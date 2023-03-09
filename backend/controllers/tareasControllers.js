const getTareas = (req, res) => {
    res.status(200).json({mensaje:'Mostrar las tareas'})
}

const setTareas = (req,res) => {

    if(!req.body.texto){
        // res.status(400).json({mensaje:'Favor ingresar la descripcion de la tarea'})
        res.status(400)
        throw new Error('Favor de teclear una informacion para la tarea')
    }
    console.log(req.body);
    res.status(201).json({mensaje:'Crear las tareas'})

}

const updateTareas = (req,res) => {
    res.status(200).json({mensaje:`Mofidicar las tarea ${req.params.id}`})
}

const deleteTareas = (req,res) => {
    res.status(200).json({mensaje:`Borrar las tareas ${req.params.id}`})
}

module.exports = {
    getTareas,
    setTareas,
    updateTareas,
    deleteTareas,
}