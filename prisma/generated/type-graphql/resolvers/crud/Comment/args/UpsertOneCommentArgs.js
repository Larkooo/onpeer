"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOneCommentArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CommentCreateInput_1 = require("../../../inputs/CommentCreateInput");
const CommentUpdateInput_1 = require("../../../inputs/CommentUpdateInput");
const CommentWhereUniqueInput_1 = require("../../../inputs/CommentWhereUniqueInput");
let UpsertOneCommentArgs = exports.UpsertOneCommentArgs = class UpsertOneCommentArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CommentWhereUniqueInput_1.CommentWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CommentWhereUniqueInput_1.CommentWhereUniqueInput)
], UpsertOneCommentArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CommentCreateInput_1.CommentCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CommentCreateInput_1.CommentCreateInput)
], UpsertOneCommentArgs.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CommentUpdateInput_1.CommentUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CommentUpdateInput_1.CommentUpdateInput)
], UpsertOneCommentArgs.prototype, "update", void 0);
exports.UpsertOneCommentArgs = UpsertOneCommentArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpsertOneCommentArgs);
