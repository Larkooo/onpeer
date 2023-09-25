"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentCreateWithoutVideoInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateNestedOneWithoutCommentsInput_1 = require("../inputs/UserCreateNestedOneWithoutCommentsInput");
let CommentCreateWithoutVideoInput = exports.CommentCreateWithoutVideoInput = class CommentCreateWithoutVideoInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], CommentCreateWithoutVideoInput.prototype, "text", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], CommentCreateWithoutVideoInput.prototype, "tx", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateNestedOneWithoutCommentsInput_1.UserCreateNestedOneWithoutCommentsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserCreateNestedOneWithoutCommentsInput_1.UserCreateNestedOneWithoutCommentsInput)
], CommentCreateWithoutVideoInput.prototype, "user", void 0);
exports.CommentCreateWithoutVideoInput = CommentCreateWithoutVideoInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CommentCreateWithoutVideoInput", {})
], CommentCreateWithoutVideoInput);
