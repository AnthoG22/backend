const express = require ('express')
const router = express.Router()
const {getTareas, registerUser, updateTareas,deleteTareas} = require('../controllers/userController')


router.route('/').get(getTareas).post(registerUser)

// router.get('/',getTareas)
// router.post('/',setTareas)

router.route('/:id').put(updateTareas).delete(deleteTareas)

// router.put('/:id',updateTareas)
// router.delete('/:id',deleteTareas)

module.exports = router