import express from 'express'
import loginRouter from './route/login.router.js'
import cors from 'cors'
import config from './config/config.js'
import { engine } from 'express-handlebars'

//application initialization
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended:true }))
app.use(cors())

//environment variables
const {port} = config

//path and __dirname usage
import path from 'path'
import { fileURLToPath } from 'url'
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

//engine view
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

app.get('/', (req, res) => {
    res.send('<h1>Root asd</h1>')
})

//RESPUESTA PARA RUTAS NO IMPLEMENTADAS
app.use('*', (req, res) => {
    let path = req.params
    res.send({ Error_ruta: `La ruta: '${path[0]}' no está implementada` })
})

app.listen(port, () => {
    console.log(`Servidor escuchando puerto : ${port}`)
});