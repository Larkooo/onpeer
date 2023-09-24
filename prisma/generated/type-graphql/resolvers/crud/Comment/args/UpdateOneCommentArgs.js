"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOneCommentArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CommentUpdateInput_1 = require("../../../inputs/CommentUpdateInput");
const CommentWhereUniqueInput_1 = require("../../../inputs/CommentWhereUniqueInput");
let UpdateOneCommentArgs = exports.UpdateOneCommentArgs = class UpdateOneCommentArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CommentUpdateInput_1.CommentUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CommentUpdateInput_1.CommentUpdateInput)
], UpdateOneCommentArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CommentWhereUniqueInput_1.CommentWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CommentWhereUniqueInput_1.CommentWhereUniqueInput)
], UpdateOneCommentArgs.prototype, "where", void 0);
exports.UpdateOneCommentArgs = UpdateOneCommentArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateOneCommentArgs);
