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
exports.UserResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const user_service_1 = require("./user.service");
const password_input_1 = require("./inputdto/password.input");
const selectusertypesubtype_input_1 = require("./inputdto/selectusertypesubtype.input");
const email_input_1 = require("./inputdto/email.input");
const user_entity_1 = require("./user.entity");
let UserResolver = class UserResolver {
    constructor(userService) {
        this.userService = userService;
    }
    async acceptEmail(emailInput) {
        return this.userService.acceptEmail(emailInput);
    }
    async sendOTP(email) {
        await this.userService.sendotp(email);
        return 'OTP sent successfully';
    }
    async initialRegistration(userInput, emailInput) {
        return this.userService.initialregisteration(userInput, emailInput);
    }
    async savePassword(passwordInput, userId) {
        return this.userService.savePassword(passwordInput, userId);
    }
    async listInitialRegistrations() {
        return this.userService.listInitialRegistrations();
    }
    async listAllOtps() {
        return this.userService.listAllOtps();
    }
    async getOtpByEmail(email) {
        const otp = await this.userService.getOtpByEmail(email);
        return otp;
    }
};
exports.UserResolver = UserResolver;
__decorate([
    (0, graphql_1.Mutation)(() => user_entity_1.User),
    __param(0, (0, graphql_1.Args)('emailInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [email_input_1.EmailInput]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "acceptEmail", null);
__decorate([
    (0, graphql_1.Mutation)(() => String),
    __param(0, (0, graphql_1.Args)('email')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "sendOTP", null);
__decorate([
    (0, graphql_1.Mutation)(() => user_entity_1.User),
    __param(0, (0, graphql_1.Args)('userInput')),
    __param(1, (0, graphql_1.Args)('emailInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [selectusertypesubtype_input_1.SelectUserTypeAndSubtypeInput,
        email_input_1.EmailInput]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "initialRegistration", null);
__decorate([
    (0, graphql_1.Mutation)(() => user_entity_1.User),
    __param(0, (0, graphql_1.Args)('passwordInput')),
    __param(1, (0, graphql_1.Args)('userId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [password_input_1.Password, Number]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "savePassword", null);
__decorate([
    (0, graphql_1.Query)(() => [user_entity_1.User]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "listInitialRegistrations", null);
__decorate([
    (0, graphql_1.Query)(() => [String]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "listAllOtps", null);
__decorate([
    (0, graphql_1.Query)(() => String, { nullable: true }),
    __param(0, (0, graphql_1.Args)('email')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "getOtpByEmail", null);
exports.UserResolver = UserResolver = __decorate([
    (0, graphql_1.Resolver)('User'),
    __metadata("design:paramtypes", [user_service_1.UserService])
], UserResolver);
//# sourceMappingURL=user.resolver.js.map