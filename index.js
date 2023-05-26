const nodemailer = require('nodemailer')
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const app = express()

const transport = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        user: 'thaisanobrega.com@gmail.com',
        pass: 'wircmzbszlpjowdu'
    }
})
app.use(cors());
app.listen(3000, () => console.log("Server is running on port 3000"));

app.post("/sendmail", bodyParser.json(), (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', "*")
    const body = req.body;
    const from = body.from;
    const name = body.name;
    const subject = body.subject;
    const text = body.text;
    transport.sendMail({
        from: `${from}`,
        to: 'thaisanobrega.com@gmail.com',
        subject: `${subject}`,
        html: `<h1>${name}</h1><p>${text}</p><p>De: ${from}</p>`
    })
    .then(() => res.send("Email sent"))
    .catch((err) => console.log(err))

})

