"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SyncMinOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let SyncMinOrderByAggregateInput = exports.SyncMinOrderByAggregateInput = class SyncMinOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SyncMinOrderByAggregateInput.prototype, "chainId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SyncMinOrderByAggregateInput.prototype, "latestBlockNumber", void 0);
exports.SyncMinOrderByAggregateInput = SyncMinOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("SyncMinOrderByAggregateInput", {})
], SyncMinOrderByAggregateInput);
