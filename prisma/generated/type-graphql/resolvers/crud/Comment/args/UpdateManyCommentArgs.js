"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyCommentArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CommentUpdateManyMutationInput_1 = require("../../../inputs/CommentUpdateManyMutationInput");
const CommentWhereInput_1 = require("../../../inputs/CommentWhereInput");
let UpdateManyCommentArgs = exports.UpdateManyCommentArgs = class UpdateManyCommentArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CommentUpdateManyMutationInput_1.CommentUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CommentUpdateManyMutationInput_1.CommentUpdateManyMutationInput)
], UpdateManyCommentArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CommentWhereInput_1.CommentWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CommentWhereInput_1.CommentWhereInput)
], UpdateManyCommentArgs.prototype, "where", void 0);
exports.UpdateManyCommentArgs = UpdateManyCommentArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateManyCommentArgs);
