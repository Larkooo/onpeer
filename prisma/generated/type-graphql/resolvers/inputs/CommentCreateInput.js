"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentCreateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateNestedOneWithoutCommentsInput_1 = require("../inputs/UserCreateNestedOneWithoutCommentsInput");
const VideoCreateNestedOneWithoutCommentsInput_1 = require("../inputs/VideoCreateNestedOneWithoutCommentsInput");
let CommentCreateInput = exports.CommentCreateInput = class CommentCreateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CommentCreateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], CommentCreateInput.prototype, "text", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], CommentCreateInput.prototype, "tx", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateNestedOneWithoutCommentsInput_1.UserCreateNestedOneWithoutCommentsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserCreateNestedOneWithoutCommentsInput_1.UserCreateNestedOneWithoutCommentsInput)
], CommentCreateInput.prototype, "user", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VideoCreateNestedOneWithoutCommentsInput_1.VideoCreateNestedOneWithoutCommentsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", VideoCreateNestedOneWithoutCommentsInput_1.VideoCreateNestedOneWithoutCommentsInput)
], CommentCreateInput.prototype, "video", void 0);
exports.CommentCreateInput = CommentCreateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CommentCreateInput", {})
], CommentCreateInput);
