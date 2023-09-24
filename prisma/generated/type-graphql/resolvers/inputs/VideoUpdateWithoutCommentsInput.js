"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VideoUpdateWithoutCommentsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const LikeUpdateManyWithoutVideoNestedInput_1 = require("../inputs/LikeUpdateManyWithoutVideoNestedInput");
const NullableStringFieldUpdateOperationsInput_1 = require("../inputs/NullableStringFieldUpdateOperationsInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
const UserUpdateOneRequiredWithoutVideosNestedInput_1 = require("../inputs/UserUpdateOneRequiredWithoutVideosNestedInput");
let VideoUpdateWithoutCommentsInput = exports.VideoUpdateWithoutCommentsInput = class VideoUpdateWithoutCommentsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], VideoUpdateWithoutCommentsInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], VideoUpdateWithoutCommentsInput.prototype, "title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], VideoUpdateWithoutCommentsInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], VideoUpdateWithoutCommentsInput.prototype, "mintTx", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], VideoUpdateWithoutCommentsInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutVideosNestedInput_1.UserUpdateOneRequiredWithoutVideosNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserUpdateOneRequiredWithoutVideosNestedInput_1.UserUpdateOneRequiredWithoutVideosNestedInput)
], VideoUpdateWithoutCommentsInput.prototype, "author", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LikeUpdateManyWithoutVideoNestedInput_1.LikeUpdateManyWithoutVideoNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", LikeUpdateManyWithoutVideoNestedInput_1.LikeUpdateManyWithoutVideoNestedInput)
], VideoUpdateWithoutCommentsInput.prototype, "likes", void 0);
exports.VideoUpdateWithoutCommentsInput = VideoUpdateWithoutCommentsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("VideoUpdateWithoutCommentsInput", {})
], VideoUpdateWithoutCommentsInput);
