"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompanyType = void 0;
const graphql_1 = require("@nestjs/graphql");
var CompanyType;
(function (CompanyType) {
    CompanyType["Partnership"] = "Partnership";
    CompanyType["private_limited"] = "Private Limited";
    CompanyType["public_limited"] = "Public Limited";
    CompanyType["limited_liability_partnership"] = "Limited Liability Partnership";
    CompanyType["Non_profit_cooperation"] = "Non Profit Cooperation";
    CompanyType["Inc"] = "Inc";
    CompanyType["Cooperation"] = "Cooperation";
    CompanyType["LLC"] = "LLC";
})(CompanyType || (exports.CompanyType = CompanyType = {}));
(0, graphql_1.registerEnumType)(CompanyType, {
    name: 'CompanyType',
    description: 'The type of company',
});
//# sourceMappingURL=company.enums.js.map