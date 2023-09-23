// mailchimp-otp.service.ts
import { Injectable } from '@nestjs/common';
const mailchimpClient = require('@mailchimp/mailchimp_transactional')('md-XQIQjSZT1BiLRjhCCM_kxQ');

@Injectable()
export class MailchimpOtpService {
  async sendOTP(email: string, otp: string): Promise<any> {
    const message = {
      from_email: 'your-email@example.com',
      to: [{ email, type: 'to' }],
      subject: 'OTP Verification',
      text: `Your OTP for verification is: ${otp}`,
    };

    try {
      const response = await mailchimpClient.messages.send({ message });
      return response;
    } catch (error) {
      throw new Error(`Mailchimp send OTP error: ${error.message}`);
    }
  }
}
