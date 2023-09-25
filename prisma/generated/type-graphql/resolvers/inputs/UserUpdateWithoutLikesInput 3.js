"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpdateWithoutLikesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CommentUpdateManyWithoutUserNestedInput_1 = require("../inputs/CommentUpdateManyWithoutUserNestedInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
const VideoUpdateManyWithoutAuthorNestedInput_1 = require("../inputs/VideoUpdateManyWithoutAuthorNestedInput");
let UserUpdateWithoutLikesInput = exports.UserUpdateWithoutLikesInput = class UserUpdateWithoutLikesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], UserUpdateWithoutLikesInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VideoUpdateManyWithoutAuthorNestedInput_1.VideoUpdateManyWithoutAuthorNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VideoUpdateManyWithoutAuthorNestedInput_1.VideoUpdateManyWithoutAuthorNestedInput)
], UserUpdateWithoutLikesInput.prototype, "videos", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CommentUpdateManyWithoutUserNestedInput_1.CommentUpdateManyWithoutUserNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CommentUpdateManyWithoutUserNestedInput_1.CommentUpdateManyWithoutUserNestedInput)
], UserUpdateWithoutLikesInput.prototype, "comments", void 0);
exports.UserUpdateWithoutLikesInput = UserUpdateWithoutLikesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserUpdateWithoutLikesInput", {})
], UserUpdateWithoutLikesInput);
