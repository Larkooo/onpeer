"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SyncScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var SyncScalarFieldEnum;
(function (SyncScalarFieldEnum) {
    SyncScalarFieldEnum["chainId"] = "chainId";
    SyncScalarFieldEnum["latestBlockNumber"] = "latestBlockNumber";
})(SyncScalarFieldEnum || (exports.SyncScalarFieldEnum = SyncScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(SyncScalarFieldEnum, {
    name: "SyncScalarFieldEnum",
    description: undefined,
});
