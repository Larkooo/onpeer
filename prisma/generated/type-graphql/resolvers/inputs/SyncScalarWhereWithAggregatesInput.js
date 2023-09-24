"use strict";
var SyncScalarWhereWithAggregatesInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.SyncScalarWhereWithAggregatesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const IntWithAggregatesFilter_1 = require("../inputs/IntWithAggregatesFilter");
let SyncScalarWhereWithAggregatesInput = exports.SyncScalarWhereWithAggregatesInput = SyncScalarWhereWithAggregatesInput_1 = class SyncScalarWhereWithAggregatesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SyncScalarWhereWithAggregatesInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], SyncScalarWhereWithAggregatesInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SyncScalarWhereWithAggregatesInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], SyncScalarWhereWithAggregatesInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SyncScalarWhereWithAggregatesInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], SyncScalarWhereWithAggregatesInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntWithAggregatesFilter_1.IntWithAggregatesFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntWithAggregatesFilter_1.IntWithAggregatesFilter)
], SyncScalarWhereWithAggregatesInput.prototype, "chainId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntWithAggregatesFilter_1.IntWithAggregatesFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntWithAggregatesFilter_1.IntWithAggregatesFilter)
], SyncScalarWhereWithAggregatesInput.prototype, "latestBlockNumber", void 0);
exports.SyncScalarWhereWithAggregatesInput = SyncScalarWhereWithAggregatesInput = SyncScalarWhereWithAggregatesInput_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("SyncScalarWhereWithAggregatesInput", {})
], SyncScalarWhereWithAggregatesInput);
