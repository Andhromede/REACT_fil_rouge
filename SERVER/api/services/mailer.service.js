const nodemailer = require("nodemailer");


class MailerService {
    constructor() {
        try {
            this.senderAccount = require("../configs/mailer.config");
        } catch { 
            console.log("erreur !!!!");
        }
    }


/***************************** ENVOI DE MAIL *****************************/
    send = async (params) => {
        const mailParams = {
            subject: "email test",
            html: "<b>message de test</b>",
        };

        if (!params || !params.to) {
            const receiverAccount = await nodemailer.createTestAccount();
            mailParams.to = receiverAccount.user;
        }

        Object.assign(mailParams, params);

        if (!this.senderAccount) {
            this.senderAccount = await nodemailer.createTestAccount();
            mailParams.from = this.senderAccount.user;
        }

        const transporter = nodemailer.createTransport({
            host: this.senderAccount.smtp.host,
            port: this.senderAccount.smtp.port,
            secure: this.senderAccount.smtp.secure,
            auth: {
                user: this.senderAccount.user,
                pass: this.senderAccount.pass,
            },
        });l

        await transporter.sendMail(mailParams, (err, info) => {
            if (err) {
                console.log('Error occurred. ' + err.message);
                return false;
            }

            // console.log("Email sent : ", info, "\nView sent mail at : ", nodemailer.getTestMessageUrl(info));
            console.log("Email sent !");
            return true;
        });
    };
    
    // sendMail = async (params) => {
    //     return await MailerService.sendMail(params);
    // }

}

module.exports = MailerService;
