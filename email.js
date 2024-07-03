const nodemailer = require('nodemailer');

const sendEmail = async (email, subject, text,html) => {
  try {
    const transporter = nodemailer.createTransport({
      // host: process.env.HOST,
      service: 'Gmail',
      //port: 587,
      //secure: true,
      auth: {
        user: 'humphreyheather03@gmail.com',
        pass: 'rfkauqbjenvfrafx',
      },
    });

    await transporter.sendMail({
      from: 'mhe',
      to: email,
      subject: subject,
      text: text
    });
    console.log(`Email sent to ${email}`);
  } catch (error) {
    console.log(error, 'email not sent');
  }
};

module.exports=sendEmail;