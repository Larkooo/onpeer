"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueCommentArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CommentWhereUniqueInput_1 = require("../../../inputs/CommentWhereUniqueInput");
let FindUniqueCommentArgs = exports.FindUniqueCommentArgs = class FindUniqueCommentArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CommentWhereUniqueInput_1.CommentWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CommentWhereUniqueInput_1.CommentWhereUniqueInput)
], FindUniqueCommentArgs.prototype, "where", void 0);
exports.FindUniqueCommentArgs = FindUniqueCommentArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindUniqueCommentArgs);
