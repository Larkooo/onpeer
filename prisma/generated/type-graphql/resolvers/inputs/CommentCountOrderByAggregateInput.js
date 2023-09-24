"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentCountOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let CommentCountOrderByAggregateInput = exports.CommentCountOrderByAggregateInput = class CommentCountOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CommentCountOrderByAggregateInput.prototype, "text", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CommentCountOrderByAggregateInput.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CommentCountOrderByAggregateInput.prototype, "videoId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CommentCountOrderByAggregateInput.prototype, "tx", void 0);
exports.CommentCountOrderByAggregateInput = CommentCountOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CommentCountOrderByAggregateInput", {})
], CommentCountOrderByAggregateInput);
