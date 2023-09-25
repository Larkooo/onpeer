"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateSync = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SyncAvgAggregate_1 = require("../outputs/SyncAvgAggregate");
const SyncCountAggregate_1 = require("../outputs/SyncCountAggregate");
const SyncMaxAggregate_1 = require("../outputs/SyncMaxAggregate");
const SyncMinAggregate_1 = require("../outputs/SyncMinAggregate");
const SyncSumAggregate_1 = require("../outputs/SyncSumAggregate");
let AggregateSync = exports.AggregateSync = class AggregateSync {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SyncCountAggregate_1.SyncCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SyncCountAggregate_1.SyncCountAggregate)
], AggregateSync.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SyncAvgAggregate_1.SyncAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SyncAvgAggregate_1.SyncAvgAggregate)
], AggregateSync.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SyncSumAggregate_1.SyncSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SyncSumAggregate_1.SyncSumAggregate)
], AggregateSync.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SyncMinAggregate_1.SyncMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SyncMinAggregate_1.SyncMinAggregate)
], AggregateSync.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SyncMaxAggregate_1.SyncMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SyncMaxAggregate_1.SyncMaxAggregate)
], AggregateSync.prototype, "_max", void 0);
exports.AggregateSync = AggregateSync = tslib_1.__decorate([
    TypeGraphQL.ObjectType("AggregateSync", {})
], AggregateSync);
