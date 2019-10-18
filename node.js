const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'Gmail',
  host: "smtp.gmail.com",
  secureConnection: false,
  port: 587,
  requiresAuth: true,
  domains: ["gmail.com", "googlemail.com"],
  auth: {
    user: '',
    pass: ''
  }
});

const mailOptions = {
  from: 'juanapu1107@gmail.com',
  to: '974843350@qq.com',
  subject: 'Sending email thourgh nodejs',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.log(error);
  } else {
    console.log('email sent:' + info.response);
  }
});