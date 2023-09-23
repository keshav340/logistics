// email.service.ts
import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';

@Injectable()
export class EmailService {
  constructor(private readonly mailerService: MailerService) {}

  async sendWelcomeEmail(email: string, userID: string, password: string): Promise<void> {
    await this.mailerService.sendMail({
      to: email,
      from: 'dev249990@gmail.com',
      subject: 'Welcome to Your App',
      template: 'welcome', // Path to the Pug template file
      context: {
        userID,
        password,
      },
    })
    .then((success) => {
        console.log(success)
      })
      .catch((err) => {
        console.log(err)
      });

  }
}
