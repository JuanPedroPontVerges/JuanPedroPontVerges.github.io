const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const nodemailer = require('nodemailer')
const app = express()

DIST_DIR = __dirname
HTML_FILE = path.join(DIST_DIR, 'index.html')

const options = {
    setHeaders: function (res, path, stat) {
        res.statusCode = 200
        res.setHeaders('Content-Type', 'text/html')
    }
}

app.use(express.static(DIST_DIR,options))

app.use(bodyParser.urlencoded({
    extended: false
}))

app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.sendFile(HTML_FILE)
})

app.post('/send', (req,res) => {
    const output = `Mail desde Web Curriculum
            <h3>Detalles de Contacto</h3>
            <ul>
                <li>Nombre: ${req.body.nombre}</li>
                <li>Mail: ${req.body.email} </li>
            </ul>
                <h3>Mensaje:</h3> 
                <p>${req.body.mensaje}</p>
            `

    let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true, // upgrade later with STARTTLS
        auth: {
            user: "jppontverges@gmail.com",
            pass: "Juanpedro+2"
        },
        tls: {
            rejectUnauthorized: false
        }
    })

    var message = {
        from: req.body.email,
        to: "jppontverges@gmail.com",
        subject: "Mensaje desde mi Pagina Web",
        text: " ",
        html: output
    };

    transporter.sendMail(message, (err, info) => {
        if (err)
            console.log(err)
        else
            console.log(info)
    })

    })

const PORT = process.env.PORT || 8080

app.listen(PORT, () => {
    console.log(`App listening to ${PORT}....`)
    console.log('Press Ctrl+C to quit.')
})

