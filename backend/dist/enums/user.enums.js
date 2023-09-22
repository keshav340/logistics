"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OverseasAgentSubType = exports.VendorSubType = exports.CustomerSubType = exports.UserType = void 0;
const graphql_1 = require("@nestjs/graphql");
var UserType;
(function (UserType) {
    UserType["CUSTOMER"] = "CUSTOMER";
    UserType["VENDOR"] = "VENDOR";
    UserType["OVERSEAS_AGENT"] = "OVERSEAS_AGENT";
})(UserType || (exports.UserType = UserType = {}));
var CustomerSubType;
(function (CustomerSubType) {
    CustomerSubType["MANUFACTURER"] = "MANUFACTURER / OEM";
    CustomerSubType["MERCHANT_TRADER"] = "MERCHANT / TRADER";
    CustomerSubType["MANUFACTURER_EXPORTER"] = "MANUFACTURER EXPORTER";
    CustomerSubType["MERCHANT_EXPORTER"] = "MERCHANT EXPORTER";
})(CustomerSubType || (exports.CustomerSubType = CustomerSubType = {}));
(0, graphql_1.registerEnumType)(CustomerSubType, {
    name: 'CustomerSubType',
    description: 'The subtype of a customer',
});
var VendorSubType;
(function (VendorSubType) {
    VendorSubType["WAREHOUSE_COMPANY"] = "Warehouse Company";
    VendorSubType["COLD_STORAGE_COMPANY"] = "Cold Storage Company";
})(VendorSubType || (exports.VendorSubType = VendorSubType = {}));
(0, graphql_1.registerEnumType)(VendorSubType, {
    name: 'VendorSubType',
    description: 'The subtype of a vendor',
});
var OverseasAgentSubType;
(function (OverseasAgentSubType) {
    OverseasAgentSubType["FOREIGN_AGENT"] = "Foreign Agent";
})(OverseasAgentSubType || (exports.OverseasAgentSubType = OverseasAgentSubType = {}));
(0, graphql_1.registerEnumType)(OverseasAgentSubType, {
    name: 'OverseasAgentSubType',
    description: 'The subtype of an overseas agent',
});
(0, graphql_1.registerEnumType)(UserType, {
    name: 'UserType',
    description: 'The type of user',
});
//# sourceMappingURL=user.enums.js.map