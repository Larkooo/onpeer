"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SyncCountOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let SyncCountOrderByAggregateInput = exports.SyncCountOrderByAggregateInput = class SyncCountOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SyncCountOrderByAggregateInput.prototype, "chainId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SyncCountOrderByAggregateInput.prototype, "latestBlockNumber", void 0);
exports.SyncCountOrderByAggregateInput = SyncCountOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("SyncCountOrderByAggregateInput", {})
], SyncCountOrderByAggregateInput);
