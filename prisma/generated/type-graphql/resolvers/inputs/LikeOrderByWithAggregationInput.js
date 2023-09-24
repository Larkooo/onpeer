"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LikeOrderByWithAggregationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const LikeCountOrderByAggregateInput_1 = require("../inputs/LikeCountOrderByAggregateInput");
const LikeMaxOrderByAggregateInput_1 = require("../inputs/LikeMaxOrderByAggregateInput");
const LikeMinOrderByAggregateInput_1 = require("../inputs/LikeMinOrderByAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let LikeOrderByWithAggregationInput = exports.LikeOrderByWithAggregationInput = class LikeOrderByWithAggregationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], LikeOrderByWithAggregationInput.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], LikeOrderByWithAggregationInput.prototype, "videoId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], LikeOrderByWithAggregationInput.prototype, "tx", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LikeCountOrderByAggregateInput_1.LikeCountOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", LikeCountOrderByAggregateInput_1.LikeCountOrderByAggregateInput)
], LikeOrderByWithAggregationInput.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LikeMaxOrderByAggregateInput_1.LikeMaxOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", LikeMaxOrderByAggregateInput_1.LikeMaxOrderByAggregateInput)
], LikeOrderByWithAggregationInput.prototype, "_max", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LikeMinOrderByAggregateInput_1.LikeMinOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", LikeMinOrderByAggregateInput_1.LikeMinOrderByAggregateInput)
], LikeOrderByWithAggregationInput.prototype, "_min", void 0);
exports.LikeOrderByWithAggregationInput = LikeOrderByWithAggregationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("LikeOrderByWithAggregationInput", {})
], LikeOrderByWithAggregationInput);
