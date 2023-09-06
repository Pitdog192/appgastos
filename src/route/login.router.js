import express from 'express'
import loginController from '../controller/loginController.js'
const loginRouter = express.Router()

loginRouter.get('/', loginController.login)
loginRouter.get('/register', loginController.register)
loginRouter.post('/register', loginController.storeUser)

export default loginRouter