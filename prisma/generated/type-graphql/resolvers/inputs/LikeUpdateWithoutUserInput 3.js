"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LikeUpdateWithoutUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
const VideoUpdateOneRequiredWithoutLikesNestedInput_1 = require("../inputs/VideoUpdateOneRequiredWithoutLikesNestedInput");
let LikeUpdateWithoutUserInput = exports.LikeUpdateWithoutUserInput = class LikeUpdateWithoutUserInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], LikeUpdateWithoutUserInput.prototype, "tx", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VideoUpdateOneRequiredWithoutLikesNestedInput_1.VideoUpdateOneRequiredWithoutLikesNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VideoUpdateOneRequiredWithoutLikesNestedInput_1.VideoUpdateOneRequiredWithoutLikesNestedInput)
], LikeUpdateWithoutUserInput.prototype, "video", void 0);
exports.LikeUpdateWithoutUserInput = LikeUpdateWithoutUserInput = tslib_1.__decorate([
    TypeGraphQL.InputType("LikeUpdateWithoutUserInput", {})
], LikeUpdateWithoutUserInput);
