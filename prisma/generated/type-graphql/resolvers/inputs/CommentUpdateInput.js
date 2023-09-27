"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentUpdateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
const UserUpdateOneRequiredWithoutCommentsNestedInput_1 = require("../inputs/UserUpdateOneRequiredWithoutCommentsNestedInput");
const VideoUpdateOneRequiredWithoutCommentsNestedInput_1 = require("../inputs/VideoUpdateOneRequiredWithoutCommentsNestedInput");
let CommentUpdateInput = exports.CommentUpdateInput = class CommentUpdateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], CommentUpdateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], CommentUpdateInput.prototype, "text", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], CommentUpdateInput.prototype, "tx", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutCommentsNestedInput_1.UserUpdateOneRequiredWithoutCommentsNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserUpdateOneRequiredWithoutCommentsNestedInput_1.UserUpdateOneRequiredWithoutCommentsNestedInput)
], CommentUpdateInput.prototype, "user", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VideoUpdateOneRequiredWithoutCommentsNestedInput_1.VideoUpdateOneRequiredWithoutCommentsNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VideoUpdateOneRequiredWithoutCommentsNestedInput_1.VideoUpdateOneRequiredWithoutCommentsNestedInput)
], CommentUpdateInput.prototype, "video", void 0);
exports.CommentUpdateInput = CommentUpdateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CommentUpdateInput", {})
], CommentUpdateInput);
