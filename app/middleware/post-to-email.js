module.exports = {

        var mailOpts, smtpConfig;
        smtpConfig = nodemailer.createTransport('SMTP', {
            service: 'Gmail',
            auth: {
                user: "silaslangley98@gmail.com",
                pass: "yourpasswordhere"
            }
        });

        //construct the email sending module
        mailOpts = {
            to: ' silaslangley98@gmail.com',
            //replace it with id you want to send multiple must be separated by ,(comma)
            subject: 'Gardens comments',
            text: req.body.message
        };
        //send Email
        smtpConfig.sendMail(mailOpts, function (error, response) {
            //Email not sent
            if (error) {
                res.end("Email send failed.");
            }
            //email sent successfully
            else {
                res.end("Email sent successfully.");
            }
        });
    });

}