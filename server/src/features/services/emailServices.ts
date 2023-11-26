import nodemailer from 'nodemailer';
import Mailgen from 'mailgen';
import { config } from '@config/index';

class EmailService {
  public sendEmail = async (code: string, user: string) => {
    // 1) Create a transporter : Service to send email
    const transporter = nodemailer.createTransport({
      service: 'gmail',

      auth: {
        user: config.GMAIL_EMAIL,
        pass: config.GMAIL_PASSWORD
      }
    });

    const MailGenerator = new Mailgen({
      theme: 'default',
      product: {
        name: 'BUSLAH',
        link: 'https://buslah.com/'
      }
    });

    const body = {
      body: {
        name: `Your password reset code is : ${code}`
      }
    };

    const mail = MailGenerator.generate(body);

    const message = {
      from: config.GMAIL_EMAIL,
      to: user,
      subject: 'Password Reset Code',
      html: mail
    };

    await transporter.sendMail(message);
  };
}

const emailServices: EmailService = new EmailService();
export default emailServices;
