import express from 'express'
import gastosController from '../controller/gastosController.js'

const gastosRouter = express.Router()

gastosRouter.get('/', gastosController.getGastos)
gastosRouter.post('/:id', gastosController.getGasto)
gastosRouter.post('/store', gastosController.storeGasto)

export default gastosRouter