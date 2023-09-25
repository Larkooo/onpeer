"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpdateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CommentUpdateManyWithoutUserNestedInput_1 = require("../inputs/CommentUpdateManyWithoutUserNestedInput");
const LikeUpdateManyWithoutUserNestedInput_1 = require("../inputs/LikeUpdateManyWithoutUserNestedInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
const VideoUpdateManyWithoutAuthorNestedInput_1 = require("../inputs/VideoUpdateManyWithoutAuthorNestedInput");
let UserUpdateInput = exports.UserUpdateInput = class UserUpdateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], UserUpdateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VideoUpdateManyWithoutAuthorNestedInput_1.VideoUpdateManyWithoutAuthorNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VideoUpdateManyWithoutAuthorNestedInput_1.VideoUpdateManyWithoutAuthorNestedInput)
], UserUpdateInput.prototype, "videos", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CommentUpdateManyWithoutUserNestedInput_1.CommentUpdateManyWithoutUserNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CommentUpdateManyWithoutUserNestedInput_1.CommentUpdateManyWithoutUserNestedInput)
], UserUpdateInput.prototype, "comments", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LikeUpdateManyWithoutUserNestedInput_1.LikeUpdateManyWithoutUserNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", LikeUpdateManyWithoutUserNestedInput_1.LikeUpdateManyWithoutUserNestedInput)
], UserUpdateInput.prototype, "likes", void 0);
exports.UserUpdateInput = UserUpdateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserUpdateInput", {})
], UserUpdateInput);
