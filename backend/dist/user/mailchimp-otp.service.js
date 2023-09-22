"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MailchimpOtpService = void 0;
const common_1 = require("@nestjs/common");
const mailchimpClient = require('@mailchimp/mailchimp_transactional')('md-XQIQjSZT1BiLRjhCCM_kxQ');
let MailchimpOtpService = class MailchimpOtpService {
    async sendOTP(email, otp) {
        const message = {
            from_email: 'your-email@example.com',
            to: [{ email, type: 'to' }],
            subject: 'OTP Verification',
            text: `Your OTP for verification is: ${otp}`,
        };
        try {
            const response = await mailchimpClient.messages.send({ message });
            return response;
        }
        catch (error) {
            throw new Error(`Mailchimp send OTP error: ${error.message}`);
        }
    }
};
exports.MailchimpOtpService = MailchimpOtpService;
exports.MailchimpOtpService = MailchimpOtpService = __decorate([
    (0, common_1.Injectable)()
], MailchimpOtpService);
//# sourceMappingURL=mailchimp-otp.service.js.map