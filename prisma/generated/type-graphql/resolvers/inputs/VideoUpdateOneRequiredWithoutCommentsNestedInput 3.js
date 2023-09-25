"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VideoUpdateOneRequiredWithoutCommentsNestedInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const VideoCreateOrConnectWithoutCommentsInput_1 = require("../inputs/VideoCreateOrConnectWithoutCommentsInput");
const VideoCreateWithoutCommentsInput_1 = require("../inputs/VideoCreateWithoutCommentsInput");
const VideoUpdateToOneWithWhereWithoutCommentsInput_1 = require("../inputs/VideoUpdateToOneWithWhereWithoutCommentsInput");
const VideoUpsertWithoutCommentsInput_1 = require("../inputs/VideoUpsertWithoutCommentsInput");
const VideoWhereUniqueInput_1 = require("../inputs/VideoWhereUniqueInput");
let VideoUpdateOneRequiredWithoutCommentsNestedInput = exports.VideoUpdateOneRequiredWithoutCommentsNestedInput = class VideoUpdateOneRequiredWithoutCommentsNestedInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VideoCreateWithoutCommentsInput_1.VideoCreateWithoutCommentsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VideoCreateWithoutCommentsInput_1.VideoCreateWithoutCommentsInput)
], VideoUpdateOneRequiredWithoutCommentsNestedInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VideoCreateOrConnectWithoutCommentsInput_1.VideoCreateOrConnectWithoutCommentsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VideoCreateOrConnectWithoutCommentsInput_1.VideoCreateOrConnectWithoutCommentsInput)
], VideoUpdateOneRequiredWithoutCommentsNestedInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VideoUpsertWithoutCommentsInput_1.VideoUpsertWithoutCommentsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VideoUpsertWithoutCommentsInput_1.VideoUpsertWithoutCommentsInput)
], VideoUpdateOneRequiredWithoutCommentsNestedInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VideoWhereUniqueInput_1.VideoWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VideoWhereUniqueInput_1.VideoWhereUniqueInput)
], VideoUpdateOneRequiredWithoutCommentsNestedInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VideoUpdateToOneWithWhereWithoutCommentsInput_1.VideoUpdateToOneWithWhereWithoutCommentsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VideoUpdateToOneWithWhereWithoutCommentsInput_1.VideoUpdateToOneWithWhereWithoutCommentsInput)
], VideoUpdateOneRequiredWithoutCommentsNestedInput.prototype, "update", void 0);
exports.VideoUpdateOneRequiredWithoutCommentsNestedInput = VideoUpdateOneRequiredWithoutCommentsNestedInput = tslib_1.__decorate([
    TypeGraphQL.InputType("VideoUpdateOneRequiredWithoutCommentsNestedInput", {})
], VideoUpdateOneRequiredWithoutCommentsNestedInput);
