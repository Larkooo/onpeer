"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpdateWithoutVideosInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CommentUpdateManyWithoutUserNestedInput_1 = require("../inputs/CommentUpdateManyWithoutUserNestedInput");
const LikeUpdateManyWithoutUserNestedInput_1 = require("../inputs/LikeUpdateManyWithoutUserNestedInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
let UserUpdateWithoutVideosInput = exports.UserUpdateWithoutVideosInput = class UserUpdateWithoutVideosInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], UserUpdateWithoutVideosInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CommentUpdateManyWithoutUserNestedInput_1.CommentUpdateManyWithoutUserNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CommentUpdateManyWithoutUserNestedInput_1.CommentUpdateManyWithoutUserNestedInput)
], UserUpdateWithoutVideosInput.prototype, "comments", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LikeUpdateManyWithoutUserNestedInput_1.LikeUpdateManyWithoutUserNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", LikeUpdateManyWithoutUserNestedInput_1.LikeUpdateManyWithoutUserNestedInput)
], UserUpdateWithoutVideosInput.prototype, "likes", void 0);
exports.UserUpdateWithoutVideosInput = UserUpdateWithoutVideosInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserUpdateWithoutVideosInput", {})
], UserUpdateWithoutVideosInput);
