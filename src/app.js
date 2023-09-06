import express from 'express'

const app = express();
const port = 3333

app.get('/root', (req, res) => {
    res.send('<h1>Root asd</h1>')
})

app.listen(port, () => {
    console.log(`Servidor escuchando puerto : ${port}`)
});