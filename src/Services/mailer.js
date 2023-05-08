const nodemailer = require("nodemailer");

class EmailService {
    constructor() {
        this.transporter = nodemailer.createTransport({
            // Use live.hylia@outlook.com
            // Use the password for the email

            host: "smtp-mail.outlook.com",
            port: 587,
            secure: false,
            auth: {
                user: process.env.EMAIL_ADDRESS,
                pass: process.env.EMAIL_PASSWORD,
            },
            tls: {
                ciphers: "SSLv3",
            },
        });
    }


    async accpetContactRequest(name, email, message) {
        const mailOptions = {
            from: process.env.EMAIL_ADDRESS,
            to: "live.hylia@outlook.com",
            subject: "Contact Request",
            text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
        };

        this.transporter.sendMail(mailOptions, (err, info) => {
            if (err) {
                console.log(err);
            }
            else {
                console.log(info);
                return info;
            }
        });
    }
}

module.exports = new EmailService();