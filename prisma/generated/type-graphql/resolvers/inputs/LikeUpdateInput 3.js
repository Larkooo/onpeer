"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LikeUpdateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
const UserUpdateOneRequiredWithoutLikesNestedInput_1 = require("../inputs/UserUpdateOneRequiredWithoutLikesNestedInput");
const VideoUpdateOneRequiredWithoutLikesNestedInput_1 = require("../inputs/VideoUpdateOneRequiredWithoutLikesNestedInput");
let LikeUpdateInput = exports.LikeUpdateInput = class LikeUpdateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], LikeUpdateInput.prototype, "tx", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutLikesNestedInput_1.UserUpdateOneRequiredWithoutLikesNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserUpdateOneRequiredWithoutLikesNestedInput_1.UserUpdateOneRequiredWithoutLikesNestedInput)
], LikeUpdateInput.prototype, "user", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VideoUpdateOneRequiredWithoutLikesNestedInput_1.VideoUpdateOneRequiredWithoutLikesNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VideoUpdateOneRequiredWithoutLikesNestedInput_1.VideoUpdateOneRequiredWithoutLikesNestedInput)
], LikeUpdateInput.prototype, "video", void 0);
exports.LikeUpdateInput = LikeUpdateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("LikeUpdateInput", {})
], LikeUpdateInput);
