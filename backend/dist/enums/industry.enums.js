"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IndustryType = void 0;
const graphql_1 = require("@nestjs/graphql");
var IndustryType;
(function (IndustryType) {
    IndustryType["Apparels_and_garments"] = "Apparels and Garments";
    IndustryType["Building_and_Construction"] = "Building and Construction";
    IndustryType["Electronic_and_Electical"] = "Electronic and Electical";
    IndustryType["Drugs_and_pharms"] = "Drugs and pharms";
    IndustryType["Industrial_Machines"] = "Industrial Machines";
    IndustryType["Industrial_suppplies"] = "Industrial supplies";
    IndustryType["Food_and_Beverages"] = "Food and Beverages";
    IndustryType["Hospital_and_Medicalsupplies"] = "Hospital and Medical supplies";
})(IndustryType || (exports.IndustryType = IndustryType = {}));
(0, graphql_1.registerEnumType)(IndustryType, {
    name: 'IndustryType',
    description: 'The type of industry',
});
//# sourceMappingURL=industry.enums.js.map