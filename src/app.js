import express from 'express'
import https from 'https'
import fs from 'fs'

const app = express();
const port = 3333
const httpsOptions = {
    key: fs.readFileSync('../crt/arrsanger.com.ar.key'),      // Ruta a tu archivo de clave privada
    cert: fs.readFileSync('../crt/arrsanger.com.ar.crt') // Ruta a tu archivo de certificado
};

app.get('/root', (req, res) => {
    res.send('<h1>Root asd</h1>')
    console.log(httpsOptions)
})

const server = https.createServer(httpsOptions, app);
server.listen(port, () => {
    console.log('Servidor HTTPS activo en el puerto 443');
});