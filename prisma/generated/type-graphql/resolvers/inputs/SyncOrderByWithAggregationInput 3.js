"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SyncOrderByWithAggregationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SyncAvgOrderByAggregateInput_1 = require("../inputs/SyncAvgOrderByAggregateInput");
const SyncCountOrderByAggregateInput_1 = require("../inputs/SyncCountOrderByAggregateInput");
const SyncMaxOrderByAggregateInput_1 = require("../inputs/SyncMaxOrderByAggregateInput");
const SyncMinOrderByAggregateInput_1 = require("../inputs/SyncMinOrderByAggregateInput");
const SyncSumOrderByAggregateInput_1 = require("../inputs/SyncSumOrderByAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let SyncOrderByWithAggregationInput = exports.SyncOrderByWithAggregationInput = class SyncOrderByWithAggregationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SyncOrderByWithAggregationInput.prototype, "chainId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SyncOrderByWithAggregationInput.prototype, "latestBlockNumber", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SyncCountOrderByAggregateInput_1.SyncCountOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SyncCountOrderByAggregateInput_1.SyncCountOrderByAggregateInput)
], SyncOrderByWithAggregationInput.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SyncAvgOrderByAggregateInput_1.SyncAvgOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SyncAvgOrderByAggregateInput_1.SyncAvgOrderByAggregateInput)
], SyncOrderByWithAggregationInput.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SyncMaxOrderByAggregateInput_1.SyncMaxOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SyncMaxOrderByAggregateInput_1.SyncMaxOrderByAggregateInput)
], SyncOrderByWithAggregationInput.prototype, "_max", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SyncMinOrderByAggregateInput_1.SyncMinOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SyncMinOrderByAggregateInput_1.SyncMinOrderByAggregateInput)
], SyncOrderByWithAggregationInput.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SyncSumOrderByAggregateInput_1.SyncSumOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SyncSumOrderByAggregateInput_1.SyncSumOrderByAggregateInput)
], SyncOrderByWithAggregationInput.prototype, "_sum", void 0);
exports.SyncOrderByWithAggregationInput = SyncOrderByWithAggregationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("SyncOrderByWithAggregationInput", {})
], SyncOrderByWithAggregationInput);
