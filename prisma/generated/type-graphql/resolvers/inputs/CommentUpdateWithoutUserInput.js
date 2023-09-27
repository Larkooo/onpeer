"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentUpdateWithoutUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
const VideoUpdateOneRequiredWithoutCommentsNestedInput_1 = require("../inputs/VideoUpdateOneRequiredWithoutCommentsNestedInput");
let CommentUpdateWithoutUserInput = exports.CommentUpdateWithoutUserInput = class CommentUpdateWithoutUserInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], CommentUpdateWithoutUserInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], CommentUpdateWithoutUserInput.prototype, "text", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], CommentUpdateWithoutUserInput.prototype, "tx", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VideoUpdateOneRequiredWithoutCommentsNestedInput_1.VideoUpdateOneRequiredWithoutCommentsNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VideoUpdateOneRequiredWithoutCommentsNestedInput_1.VideoUpdateOneRequiredWithoutCommentsNestedInput)
], CommentUpdateWithoutUserInput.prototype, "video", void 0);
exports.CommentUpdateWithoutUserInput = CommentUpdateWithoutUserInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CommentUpdateWithoutUserInput", {})
], CommentUpdateWithoutUserInput);
