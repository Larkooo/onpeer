"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SyncSumAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let SyncSumAggregate = exports.SyncSumAggregate = class SyncSumAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], SyncSumAggregate.prototype, "chainId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], SyncSumAggregate.prototype, "latestBlockNumber", void 0);
exports.SyncSumAggregate = SyncSumAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("SyncSumAggregate", {})
], SyncSumAggregate);
