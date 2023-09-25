"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LikeUpdateWithoutVideoInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
const UserUpdateOneRequiredWithoutLikesNestedInput_1 = require("../inputs/UserUpdateOneRequiredWithoutLikesNestedInput");
let LikeUpdateWithoutVideoInput = exports.LikeUpdateWithoutVideoInput = class LikeUpdateWithoutVideoInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], LikeUpdateWithoutVideoInput.prototype, "tx", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutLikesNestedInput_1.UserUpdateOneRequiredWithoutLikesNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserUpdateOneRequiredWithoutLikesNestedInput_1.UserUpdateOneRequiredWithoutLikesNestedInput)
], LikeUpdateWithoutVideoInput.prototype, "user", void 0);
exports.LikeUpdateWithoutVideoInput = LikeUpdateWithoutVideoInput = tslib_1.__decorate([
    TypeGraphQL.InputType("LikeUpdateWithoutVideoInput", {})
], LikeUpdateWithoutVideoInput);
