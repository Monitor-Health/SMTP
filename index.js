const nodemailer = require('nodemailer')

const transport = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth:{
        user: 'thaisanobrega.com@gmail.com',
        pass: 'wircmzbszlpjowdu'
    }
})

transport.sendMail({
    from: 'Thaisa <thaisanobrega.com@gmail.com>',
    to: 'guilherme.scarabelli@gmail.com',
    subject: 'Teste Monitr Health SMTP',
    html: '<h1>OI</h1>',
    text: 'EMAIL ENVIADO DE UMA API CRIDA POR MIMMMMMMMMMMM OLÁ GUIHERMEEEEEEEEEEEEEEEEEEEEEEEE'
})
.then(() => console.log('CERTOOOOOOOOOOOOOOOOOOOOOOOOOO') )
.catch((err) => console.log("RUIMMMMMMMMMMMMMMMMMMMMMM:(", err))
