"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SyncAvgOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let SyncAvgOrderByAggregateInput = exports.SyncAvgOrderByAggregateInput = class SyncAvgOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SyncAvgOrderByAggregateInput.prototype, "chainId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SyncAvgOrderByAggregateInput.prototype, "latestBlockNumber", void 0);
exports.SyncAvgOrderByAggregateInput = SyncAvgOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("SyncAvgOrderByAggregateInput", {})
], SyncAvgOrderByAggregateInput);
