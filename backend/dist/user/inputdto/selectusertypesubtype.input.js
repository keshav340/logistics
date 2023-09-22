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
exports.SelectUserTypeAndSubtypeInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const user_enums_1 = require("../../enums/user.enums");
let SelectUserTypeAndSubtypeInput = class SelectUserTypeAndSubtypeInput {
};
exports.SelectUserTypeAndSubtypeInput = SelectUserTypeAndSubtypeInput;
__decorate([
    (0, graphql_1.Field)(() => user_enums_1.UserType, { nullable: true }),
    __metadata("design:type", String)
], SelectUserTypeAndSubtypeInput.prototype, "userType", void 0);
__decorate([
    (0, graphql_1.Field)(() => user_enums_1.CustomerSubType, { nullable: true }),
    __metadata("design:type", String)
], SelectUserTypeAndSubtypeInput.prototype, "customerSubType", void 0);
__decorate([
    (0, graphql_1.Field)(() => user_enums_1.VendorSubType, { nullable: true }),
    __metadata("design:type", String)
], SelectUserTypeAndSubtypeInput.prototype, "vendorSubType", void 0);
__decorate([
    (0, graphql_1.Field)(() => user_enums_1.OverseasAgentSubType, { nullable: true }),
    __metadata("design:type", String)
], SelectUserTypeAndSubtypeInput.prototype, "overseasAgentSubType", void 0);
exports.SelectUserTypeAndSubtypeInput = SelectUserTypeAndSubtypeInput = __decorate([
    (0, graphql_1.InputType)()
], SelectUserTypeAndSubtypeInput);
//# sourceMappingURL=selectusertypesubtype.input.js.map