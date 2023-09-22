"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnnualTurnover = void 0;
const graphql_1 = require("@nestjs/graphql");
var AnnualTurnover;
(function (AnnualTurnover) {
    AnnualTurnover["UP_TO_10000"] = "$1 - $10,000";
    AnnualTurnover["FROM_10000_TO_50000"] = "$10,000 - $50,000";
    AnnualTurnover["FROM_50000_TO_100000"] = "$50,000 - $100,000";
    AnnualTurnover["FROM_100000_TO_500000"] = "$100,000 - $500,000";
    AnnualTurnover["FROM_500000_TO_1000000"] = "$500,000 - $1,000,000";
    AnnualTurnover["FROM_1000000_TO_1500000"] = "$1,000,000 - $1,500,000";
    AnnualTurnover["FROM_1500000_TO_2500000"] = "$1,500,000 - $2,500,000";
    AnnualTurnover["FROM_2500000_TO_5000000"] = "$2,500,000 - $5,000,000";
    AnnualTurnover["FROM_5000000_TO_10000000"] = "$5,000,000 - $10,000,000";
    AnnualTurnover["ABOVE_10000000"] = "Above $10,000,000";
})(AnnualTurnover || (exports.AnnualTurnover = AnnualTurnover = {}));
(0, graphql_1.registerEnumType)(AnnualTurnover, {
    name: 'AnnualTurnover',
    description: 'Annual Turnover Ranges',
});
//# sourceMappingURL=annualturnover.enums.js.map