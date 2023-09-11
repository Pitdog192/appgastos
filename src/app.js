import express from 'express'
import loginRouter from './route/login.router.js'
import gastosRouter from './route/gastos.router.js'
import cors from 'cors'
import config from './config/config.js'
import { engine } from 'express-handlebars'
import DBconnection from './DB/dbConnect.js'
//path and __dirname usage
import path from 'path'
import { fileURLToPath } from 'url'
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

//application initialization
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended:true }))
app.use(cors())

//DB connection
DBconnection();

//environment variables
const {port} = config

//engine view
app.use(express.static('public'));
app.set('views', path.join(__dirname, 'view', 'partials'))
app.engine('.hbs', engine({
    extname: '.hbs',
    defaultLayout: 'main',
    layoutsDir: path.join(__dirname, 'view', 'layouts'),
    partialsDir: path.join(__dirname, 'view', 'partials')
}))
app.set('view engine', '.hbs')

//routers
app.use('/login', loginRouter)
app.use('/gastos', gastosRouter)

//RESPUESTA PARA RUTAS NO IMPLEMENTADAS
app.use('*', (req, res) => {
    let path = req.params
    res.send({ Error_ruta: `La ruta: '${path[0]}' no está implementada` })
})

app.listen(port, () => {
    console.log(`Servidor escuchando puerto : ${port}`)
});