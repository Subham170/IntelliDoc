import nodemailer from "nodemailer";


export async function sendEmail(to, subject, text) {
    const transporter = nodemailer.createTransport({
     host: 'smtp.gmail.com',
     port: 587,
     secure: false,
      auth: {
        user: 'teamintellidoc@gmail.com', // your email
        pass: 'kkpr aeiv slyu tlya' // your email password
      }
    });
  
    const mailOptions = {
      from: 'teamintellidoc@gmail.com', // your email
      to: to,
      subject: subject,
      html: text
    };
     
    try{
      await transporter.sendMail(mailOptions);
    } catch(err){
      const error = new HttpError('Internal server error',500);
      return next(error);
    }
    
  }