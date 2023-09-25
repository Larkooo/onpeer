"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SyncMaxOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let SyncMaxOrderByAggregateInput = exports.SyncMaxOrderByAggregateInput = class SyncMaxOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SyncMaxOrderByAggregateInput.prototype, "chainId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SyncMaxOrderByAggregateInput.prototype, "latestBlockNumber", void 0);
exports.SyncMaxOrderByAggregateInput = SyncMaxOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("SyncMaxOrderByAggregateInput", {})
], SyncMaxOrderByAggregateInput);
