"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupBySyncArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SyncOrderByWithAggregationInput_1 = require("../../../inputs/SyncOrderByWithAggregationInput");
const SyncScalarWhereWithAggregatesInput_1 = require("../../../inputs/SyncScalarWhereWithAggregatesInput");
const SyncWhereInput_1 = require("../../../inputs/SyncWhereInput");
const SyncScalarFieldEnum_1 = require("../../../../enums/SyncScalarFieldEnum");
let GroupBySyncArgs = exports.GroupBySyncArgs = class GroupBySyncArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SyncWhereInput_1.SyncWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SyncWhereInput_1.SyncWhereInput)
], GroupBySyncArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SyncOrderByWithAggregationInput_1.SyncOrderByWithAggregationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], GroupBySyncArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SyncScalarFieldEnum_1.SyncScalarFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], GroupBySyncArgs.prototype, "by", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SyncScalarWhereWithAggregatesInput_1.SyncScalarWhereWithAggregatesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SyncScalarWhereWithAggregatesInput_1.SyncScalarWhereWithAggregatesInput)
], GroupBySyncArgs.prototype, "having", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupBySyncArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupBySyncArgs.prototype, "skip", void 0);
exports.GroupBySyncArgs = GroupBySyncArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], GroupBySyncArgs);
