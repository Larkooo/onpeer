"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VideoUpdateOneRequiredWithoutLikesNestedInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const VideoCreateOrConnectWithoutLikesInput_1 = require("../inputs/VideoCreateOrConnectWithoutLikesInput");
const VideoCreateWithoutLikesInput_1 = require("../inputs/VideoCreateWithoutLikesInput");
const VideoUpdateToOneWithWhereWithoutLikesInput_1 = require("../inputs/VideoUpdateToOneWithWhereWithoutLikesInput");
const VideoUpsertWithoutLikesInput_1 = require("../inputs/VideoUpsertWithoutLikesInput");
const VideoWhereUniqueInput_1 = require("../inputs/VideoWhereUniqueInput");
let VideoUpdateOneRequiredWithoutLikesNestedInput = exports.VideoUpdateOneRequiredWithoutLikesNestedInput = class VideoUpdateOneRequiredWithoutLikesNestedInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VideoCreateWithoutLikesInput_1.VideoCreateWithoutLikesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VideoCreateWithoutLikesInput_1.VideoCreateWithoutLikesInput)
], VideoUpdateOneRequiredWithoutLikesNestedInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VideoCreateOrConnectWithoutLikesInput_1.VideoCreateOrConnectWithoutLikesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VideoCreateOrConnectWithoutLikesInput_1.VideoCreateOrConnectWithoutLikesInput)
], VideoUpdateOneRequiredWithoutLikesNestedInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VideoUpsertWithoutLikesInput_1.VideoUpsertWithoutLikesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VideoUpsertWithoutLikesInput_1.VideoUpsertWithoutLikesInput)
], VideoUpdateOneRequiredWithoutLikesNestedInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VideoWhereUniqueInput_1.VideoWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VideoWhereUniqueInput_1.VideoWhereUniqueInput)
], VideoUpdateOneRequiredWithoutLikesNestedInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VideoUpdateToOneWithWhereWithoutLikesInput_1.VideoUpdateToOneWithWhereWithoutLikesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VideoUpdateToOneWithWhereWithoutLikesInput_1.VideoUpdateToOneWithWhereWithoutLikesInput)
], VideoUpdateOneRequiredWithoutLikesNestedInput.prototype, "update", void 0);
exports.VideoUpdateOneRequiredWithoutLikesNestedInput = VideoUpdateOneRequiredWithoutLikesNestedInput = tslib_1.__decorate([
    TypeGraphQL.InputType("VideoUpdateOneRequiredWithoutLikesNestedInput", {})
], VideoUpdateOneRequiredWithoutLikesNestedInput);
