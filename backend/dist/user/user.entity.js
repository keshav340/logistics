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
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const typeorm_1 = require("typeorm");
const graphql_1 = require("@nestjs/graphql");
const user_enums_1 = require("../enums/user.enums");
let User = class User {
};
exports.User = User;
__decorate([
    (0, graphql_1.Field)(() => graphql_1.ID),
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], User.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'enum', enum: user_enums_1.UserType, nullable: true }),
    (0, graphql_1.Field)(() => user_enums_1.UserType, { nullable: true }),
    __metadata("design:type", String)
], User.prototype, "userType", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'enum', enum: user_enums_1.CustomerSubType, nullable: true }),
    (0, graphql_1.Field)(() => user_enums_1.CustomerSubType, { nullable: true }),
    __metadata("design:type", String)
], User.prototype, "customerSubType", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'enum', enum: user_enums_1.VendorSubType, nullable: true }),
    (0, graphql_1.Field)(() => user_enums_1.VendorSubType, { nullable: true }),
    __metadata("design:type", String)
], User.prototype, "vendorSubType", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'enum', enum: user_enums_1.OverseasAgentSubType, nullable: true }),
    (0, graphql_1.Field)(() => user_enums_1.OverseasAgentSubType, { nullable: true }),
    __metadata("design:type", String)
], User.prototype, "overseasAgentSubType", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], User.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], User.prototype, "otp", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", Boolean)
], User.prototype, "otp_veified", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], User.prototype, "password", void 0);
exports.User = User = __decorate([
    (0, typeorm_1.Entity)(),
    (0, graphql_1.ObjectType)()
], User);
//# sourceMappingURL=user.entity.js.map