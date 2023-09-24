"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentUserIdVideoIdCompoundUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let CommentUserIdVideoIdCompoundUniqueInput = exports.CommentUserIdVideoIdCompoundUniqueInput = class CommentUserIdVideoIdCompoundUniqueInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], CommentUserIdVideoIdCompoundUniqueInput.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], CommentUserIdVideoIdCompoundUniqueInput.prototype, "videoId", void 0);
exports.CommentUserIdVideoIdCompoundUniqueInput = CommentUserIdVideoIdCompoundUniqueInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CommentUserIdVideoIdCompoundUniqueInput", {})
], CommentUserIdVideoIdCompoundUniqueInput);
