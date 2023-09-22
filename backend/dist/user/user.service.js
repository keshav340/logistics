"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const user_entity_1 = require("./user.entity");
const user_enums_1 = require("../enums/user.enums");
const mailchimpClient = require("@mailchimp/mailchimp_transactional")("md-XQIQjSZT1BiLRjhCCM_kxQ");
const bcrypt = require("bcrypt");
const dist_1 = require("@nestjs/cache-manager/dist");
let UserService = class UserService {
    constructor(cacheManager, userRepository) {
        this.cacheManager = cacheManager;
        this.userRepository = userRepository;
        this.inMemoryCache = {};
    }
    async acceptEmail(input) {
        const user = new user_entity_1.User();
        user.email = input.email;
        return await this.userRepository.save(user);
    }
    async sendotp(email) {
        const generateOTP = await this.generateOTP(4);
        try {
            const response = await mailchimpClient.messages.send({
                message: {
                    to: [{ email }],
                    from_name: 'Developer',
                    from_email: 'keshav.sharma@xpressword.com',
                    subject: 'OTP verification',
                    text: `Your OTP for verification is: ${generateOTP}`,
                },
            });
            const newUser = new user_entity_1.User();
            newUser.email = email;
            newUser.otp = generateOTP;
            newUser.otp_veified = false;
            await this.userRepository.save(newUser);
        }
        catch (error) {
            throw new Error(`Mailchimp send OTP error: ${error.message}`);
        }
    }
    async initialregisteration(input, emailinput) {
        const given = emailinput.email;
        const user = await this.userRepository.findOne({ where: { email: given } });
        user.userType = input.userType;
        const usergivenotp = emailinput.otp;
        if (!user || user.otp !== emailinput.otp) {
            throw new Error('Invalid OTP. Please verify OTP correctly.');
        }
        switch (input.userType) {
            case user_enums_1.UserType.CUSTOMER:
                user.customerSubType = input.customerSubType;
                break;
            case user_enums_1.UserType.VENDOR:
                user.vendorSubType = input.vendorSubType;
                break;
            case user_enums_1.UserType.OVERSEAS_AGENT:
                user.overseasAgentSubType = input.overseasAgentSubType;
                break;
            default:
                throw new Error('Invalid user type');
        }
        user.otp_veified = true;
        await this.userRepository.save(user);
        ;
        return user;
    }
    async savePassword(input, userId) {
        const user = await this.userRepository.findOne({ where: { id: userId } });
        const password = input.password;
        const confirmPassword = input.confirmPassword;
        if (password != confirmPassword) {
            throw new Error('Password does not match');
        }
        if (user.otp_veified == true) {
            const hashedPassword = await bcrypt.hash(password, 10);
            user.password = hashedPassword;
        }
        else {
            throw new Error('OTP is not verified');
        }
        return await this.userRepository.save(user);
    }
    async generateOTP(length) {
        const digits = '0123456789';
        let OTP = '';
        for (let i = 0; i < length; i++) {
            OTP += digits[Math.floor(Math.random() * 10)];
        }
        return OTP;
    }
    async listInitialRegistrations() {
        return await this.userRepository.find({
            where: { otp_veified: true },
        });
    }
    async listAllOtps() {
        const users = await this.userRepository.find();
        const otps = users.map((user) => user.otp).filter((otp) => otp !== null);
        return otps;
    }
    async getOtpByEmail(email) {
        const user = await this.userRepository.findOne({ where: { email } });
        if (user && user.otp) {
            return user.otp;
        }
        return null;
    }
};
exports.UserService = UserService;
exports.UserService = UserService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(dist_1.CACHE_MANAGER)),
    __param(1, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __metadata("design:paramtypes", [Object, typeorm_2.Repository])
], UserService);
//# sourceMappingURL=user.service.js.map