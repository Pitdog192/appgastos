import express from 'express'

const app = express();

const port = 3333

app.get('/', (req, res) => {
    res.send('<h1>Root</h1>')
})

app.listen(port, () => console.log(`Escuchando puerto ${port}`))