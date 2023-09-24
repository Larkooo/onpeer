"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpdateWithoutCommentsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const LikeUpdateManyWithoutUserNestedInput_1 = require("../inputs/LikeUpdateManyWithoutUserNestedInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
const VideoUpdateManyWithoutAuthorNestedInput_1 = require("../inputs/VideoUpdateManyWithoutAuthorNestedInput");
let UserUpdateWithoutCommentsInput = exports.UserUpdateWithoutCommentsInput = class UserUpdateWithoutCommentsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], UserUpdateWithoutCommentsInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VideoUpdateManyWithoutAuthorNestedInput_1.VideoUpdateManyWithoutAuthorNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VideoUpdateManyWithoutAuthorNestedInput_1.VideoUpdateManyWithoutAuthorNestedInput)
], UserUpdateWithoutCommentsInput.prototype, "videos", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LikeUpdateManyWithoutUserNestedInput_1.LikeUpdateManyWithoutUserNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", LikeUpdateManyWithoutUserNestedInput_1.LikeUpdateManyWithoutUserNestedInput)
], UserUpdateWithoutCommentsInput.prototype, "likes", void 0);
exports.UserUpdateWithoutCommentsInput = UserUpdateWithoutCommentsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserUpdateWithoutCommentsInput", {})
], UserUpdateWithoutCommentsInput);
