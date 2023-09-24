"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VideoUpdateWithoutAuthorInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CommentUpdateManyWithoutVideoNestedInput_1 = require("../inputs/CommentUpdateManyWithoutVideoNestedInput");
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const LikeUpdateManyWithoutVideoNestedInput_1 = require("../inputs/LikeUpdateManyWithoutVideoNestedInput");
const NullableStringFieldUpdateOperationsInput_1 = require("../inputs/NullableStringFieldUpdateOperationsInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
let VideoUpdateWithoutAuthorInput = exports.VideoUpdateWithoutAuthorInput = class VideoUpdateWithoutAuthorInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], VideoUpdateWithoutAuthorInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], VideoUpdateWithoutAuthorInput.prototype, "title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], VideoUpdateWithoutAuthorInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], VideoUpdateWithoutAuthorInput.prototype, "mintTx", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], VideoUpdateWithoutAuthorInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CommentUpdateManyWithoutVideoNestedInput_1.CommentUpdateManyWithoutVideoNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CommentUpdateManyWithoutVideoNestedInput_1.CommentUpdateManyWithoutVideoNestedInput)
], VideoUpdateWithoutAuthorInput.prototype, "comments", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LikeUpdateManyWithoutVideoNestedInput_1.LikeUpdateManyWithoutVideoNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", LikeUpdateManyWithoutVideoNestedInput_1.LikeUpdateManyWithoutVideoNestedInput)
], VideoUpdateWithoutAuthorInput.prototype, "likes", void 0);
exports.VideoUpdateWithoutAuthorInput = VideoUpdateWithoutAuthorInput = tslib_1.__decorate([
    TypeGraphQL.InputType("VideoUpdateWithoutAuthorInput", {})
], VideoUpdateWithoutAuthorInput);
