"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SyncGroupBy = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SyncAvgAggregate_1 = require("../outputs/SyncAvgAggregate");
const SyncCountAggregate_1 = require("../outputs/SyncCountAggregate");
const SyncMaxAggregate_1 = require("../outputs/SyncMaxAggregate");
const SyncMinAggregate_1 = require("../outputs/SyncMinAggregate");
const SyncSumAggregate_1 = require("../outputs/SyncSumAggregate");
let SyncGroupBy = exports.SyncGroupBy = class SyncGroupBy {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], SyncGroupBy.prototype, "chainId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], SyncGroupBy.prototype, "latestBlockNumber", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SyncCountAggregate_1.SyncCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SyncCountAggregate_1.SyncCountAggregate)
], SyncGroupBy.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SyncAvgAggregate_1.SyncAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SyncAvgAggregate_1.SyncAvgAggregate)
], SyncGroupBy.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SyncSumAggregate_1.SyncSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SyncSumAggregate_1.SyncSumAggregate)
], SyncGroupBy.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SyncMinAggregate_1.SyncMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SyncMinAggregate_1.SyncMinAggregate)
], SyncGroupBy.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SyncMaxAggregate_1.SyncMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SyncMaxAggregate_1.SyncMaxAggregate)
], SyncGroupBy.prototype, "_max", void 0);
exports.SyncGroupBy = SyncGroupBy = tslib_1.__decorate([
    TypeGraphQL.ObjectType("SyncGroupBy", {})
], SyncGroupBy);
