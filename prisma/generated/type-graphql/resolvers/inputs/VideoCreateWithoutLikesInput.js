"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VideoCreateWithoutLikesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CommentCreateNestedManyWithoutVideoInput_1 = require("../inputs/CommentCreateNestedManyWithoutVideoInput");
const UserCreateNestedOneWithoutVideosInput_1 = require("../inputs/UserCreateNestedOneWithoutVideosInput");
let VideoCreateWithoutLikesInput = exports.VideoCreateWithoutLikesInput = class VideoCreateWithoutLikesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], VideoCreateWithoutLikesInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], VideoCreateWithoutLikesInput.prototype, "tokenId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], VideoCreateWithoutLikesInput.prototype, "title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], VideoCreateWithoutLikesInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], VideoCreateWithoutLikesInput.prototype, "mintTx", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], VideoCreateWithoutLikesInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateNestedOneWithoutVideosInput_1.UserCreateNestedOneWithoutVideosInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserCreateNestedOneWithoutVideosInput_1.UserCreateNestedOneWithoutVideosInput)
], VideoCreateWithoutLikesInput.prototype, "author", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CommentCreateNestedManyWithoutVideoInput_1.CommentCreateNestedManyWithoutVideoInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CommentCreateNestedManyWithoutVideoInput_1.CommentCreateNestedManyWithoutVideoInput)
], VideoCreateWithoutLikesInput.prototype, "comments", void 0);
exports.VideoCreateWithoutLikesInput = VideoCreateWithoutLikesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("VideoCreateWithoutLikesInput", {})
], VideoCreateWithoutLikesInput);
