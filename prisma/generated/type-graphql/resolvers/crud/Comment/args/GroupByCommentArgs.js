"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByCommentArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CommentOrderByWithAggregationInput_1 = require("../../../inputs/CommentOrderByWithAggregationInput");
const CommentScalarWhereWithAggregatesInput_1 = require("../../../inputs/CommentScalarWhereWithAggregatesInput");
const CommentWhereInput_1 = require("../../../inputs/CommentWhereInput");
const CommentScalarFieldEnum_1 = require("../../../../enums/CommentScalarFieldEnum");
let GroupByCommentArgs = exports.GroupByCommentArgs = class GroupByCommentArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CommentWhereInput_1.CommentWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CommentWhereInput_1.CommentWhereInput)
], GroupByCommentArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CommentOrderByWithAggregationInput_1.CommentOrderByWithAggregationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByCommentArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CommentScalarFieldEnum_1.CommentScalarFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByCommentArgs.prototype, "by", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CommentScalarWhereWithAggregatesInput_1.CommentScalarWhereWithAggregatesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CommentScalarWhereWithAggregatesInput_1.CommentScalarWhereWithAggregatesInput)
], GroupByCommentArgs.prototype, "having", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByCommentArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByCommentArgs.prototype, "skip", void 0);
exports.GroupByCommentArgs = GroupByCommentArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], GroupByCommentArgs);
