"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCreateWithoutLikesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CommentCreateNestedManyWithoutUserInput_1 = require("../inputs/CommentCreateNestedManyWithoutUserInput");
const VideoCreateNestedManyWithoutAuthorInput_1 = require("../inputs/VideoCreateNestedManyWithoutAuthorInput");
let UserCreateWithoutLikesInput = exports.UserCreateWithoutLikesInput = class UserCreateWithoutLikesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], UserCreateWithoutLikesInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VideoCreateNestedManyWithoutAuthorInput_1.VideoCreateNestedManyWithoutAuthorInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VideoCreateNestedManyWithoutAuthorInput_1.VideoCreateNestedManyWithoutAuthorInput)
], UserCreateWithoutLikesInput.prototype, "videos", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CommentCreateNestedManyWithoutUserInput_1.CommentCreateNestedManyWithoutUserInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CommentCreateNestedManyWithoutUserInput_1.CommentCreateNestedManyWithoutUserInput)
], UserCreateWithoutLikesInput.prototype, "comments", void 0);
exports.UserCreateWithoutLikesInput = UserCreateWithoutLikesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserCreateWithoutLikesInput", {})
], UserCreateWithoutLikesInput);
