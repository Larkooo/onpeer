"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstCommentArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CommentOrderByWithRelationInput_1 = require("../../../inputs/CommentOrderByWithRelationInput");
const CommentWhereInput_1 = require("../../../inputs/CommentWhereInput");
const CommentWhereUniqueInput_1 = require("../../../inputs/CommentWhereUniqueInput");
const CommentScalarFieldEnum_1 = require("../../../../enums/CommentScalarFieldEnum");
let FindFirstCommentArgs = exports.FindFirstCommentArgs = class FindFirstCommentArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CommentWhereInput_1.CommentWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CommentWhereInput_1.CommentWhereInput)
], FindFirstCommentArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CommentOrderByWithRelationInput_1.CommentOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstCommentArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CommentWhereUniqueInput_1.CommentWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CommentWhereUniqueInput_1.CommentWhereUniqueInput)
], FindFirstCommentArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstCommentArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstCommentArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CommentScalarFieldEnum_1.CommentScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstCommentArgs.prototype, "distinct", void 0);
exports.FindFirstCommentArgs = FindFirstCommentArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindFirstCommentArgs);
