"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SyncCountAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let SyncCountAggregate = exports.SyncCountAggregate = class SyncCountAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], SyncCountAggregate.prototype, "chainId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], SyncCountAggregate.prototype, "latestBlockNumber", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], SyncCountAggregate.prototype, "_all", void 0);
exports.SyncCountAggregate = SyncCountAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("SyncCountAggregate", {})
], SyncCountAggregate);
