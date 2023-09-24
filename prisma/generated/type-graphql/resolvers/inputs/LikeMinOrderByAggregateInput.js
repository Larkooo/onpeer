"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LikeMinOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let LikeMinOrderByAggregateInput = exports.LikeMinOrderByAggregateInput = class LikeMinOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], LikeMinOrderByAggregateInput.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], LikeMinOrderByAggregateInput.prototype, "videoId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], LikeMinOrderByAggregateInput.prototype, "tx", void 0);
exports.LikeMinOrderByAggregateInput = LikeMinOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("LikeMinOrderByAggregateInput", {})
], LikeMinOrderByAggregateInput);
