"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OverseasAgentSubType = exports.VendorSubType = exports.CustomerSubType = exports.UserType = void 0;
var UserType;
(function (UserType) {
    UserType["CUSTOMER"] = "CUSTOMER";
    UserType["VENDOR"] = "VENDOR";
    UserType["OVERSEAS_AGENT"] = "OVERSEAS_AGENT";
})(UserType || (exports.UserType = UserType = {}));
var CustomerSubType;
(function (CustomerSubType) {
    CustomerSubType["MANUFACTURER"] = "MANUFACTURER";
    CustomerSubType["MERCHANT_TRADER"] = "MERCHANT_TRADER";
    CustomerSubType["MANUFACTURER_EXPORTER"] = "MANUFACTURER_EXPORTER";
    CustomerSubType["MERCHANT_EXPORTER"] = "MERCHANT_EXPORTER";
})(CustomerSubType || (exports.CustomerSubType = CustomerSubType = {}));
var VendorSubType;
(function (VendorSubType) {
    VendorSubType["WAREHOUSE_COMPANY"] = "WAREHOUSE_COMPANY";
    VendorSubType["COLD_STORAGE_COMPANY"] = "COLD_STORAGE_COMPANY";
})(VendorSubType || (exports.VendorSubType = VendorSubType = {}));
var OverseasAgentSubType;
(function (OverseasAgentSubType) {
    OverseasAgentSubType["FOREIGN_AGENT"] = "FOREIGN_AGENT";
})(OverseasAgentSubType || (exports.OverseasAgentSubType = OverseasAgentSubType = {}));
//# sourceMappingURL=graphql.js.map