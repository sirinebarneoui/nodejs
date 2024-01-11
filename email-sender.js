const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport({
    service : 'hotmail',
    auth : {
        user : 'exemple@hotmail.com',
        pass : 'password'
    }
})

const mailOptions = {
    from : 'exemple@hotmail.com',
    to : 'exemple@hotmail.com',
    subject : 'sending email using node.js',
    text : 'bonjour '
}

transporter.sendMail(mailOptions,function(error,info){
    if (error){
        console.log(error)
    }
    else {
        console.log('Email sent :' + info.response)
    }
})