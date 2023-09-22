import { MailerService } from '@nestjs-modules/mailer';
export declare class EmailService {
    private readonly mailerService;
    constructor(mailerService: MailerService);
    sendWelcomeEmail(email: string, userID: string, password: string): Promise<void>;
}
