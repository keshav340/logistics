//app.module.ts
import { Module } from '@nestjs/common';
import { MailerModule } from '@nestjs-modules/mailer';  
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';
import { EmailService } from './email.service';
import { join } from 'path';
@Module({
  imports: [
    MailerModule.forRoot({
      transport: {
        host: 'smtp.gmail.com',
       
        auth: {
          user: "dev249990@gmail.com",
          pass: "logistic@2023",
        },
      },
      defaults: {
        from:'"nest-modules" <modules@nestjs.com>',
      },
      template: {
        dir: 'C:\\Users\\SPRITLE\\Documents\\GitHub\\logistics\\backend\\src\\templates',
        adapter: new HandlebarsAdapter(), // or new PugAdapter()
        options: {
          strict: true,
        },
      },
    }),
  ],
  providers:[EmailService],
  exports:[EmailService],
})
export class MailModule {}