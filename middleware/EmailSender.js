const nodemailer = require('nodemailer');

function EmailSender (token,email){
    const transporter = nodemailer.createTransport({
        // Configure your email service (e.g., Gmail)
        service: 'gmail',
        auth: {
          user: 'ahmedmallek2007@gmail.com',
          pass: 'sans24862',
        },
      });
    
      const mailOptions = {
        from: 'ahmedmallek2007@gmail.com',
        to: email,
        subject: 'Password Reset',
        text: `Click the following link to reset your password: http://localhost:3000/reset-password/${token}`,
      };
    
      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.error(error);
          return res.status(500).json({ message: 'Error sending email' });
        }
        
        console.log('Email sent: ' + info.response);
        res.json({ message: 'Password reset email sent' });
      });
}
module.exports=EmailSender