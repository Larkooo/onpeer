"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SyncMaxAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let SyncMaxAggregate = exports.SyncMaxAggregate = class SyncMaxAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], SyncMaxAggregate.prototype, "chainId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], SyncMaxAggregate.prototype, "latestBlockNumber", void 0);
exports.SyncMaxAggregate = SyncMaxAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("SyncMaxAggregate", {})
], SyncMaxAggregate);
