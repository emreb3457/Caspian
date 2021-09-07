const nodemailer = require('nodemailer');

const sendEmail = async options => {
    const transporter = nodemailer.createTransport({
        service: process.env.smtp_host,
        auth: {
            user: process.env.smtp_email,
            pass: process.env.smtp_password
        }
    });

    const message = {
        to: options.email,
        subject: options.subject,
        text: options.message
    }

    await transporter.sendMail(message)
}

module.exports = sendEmail;