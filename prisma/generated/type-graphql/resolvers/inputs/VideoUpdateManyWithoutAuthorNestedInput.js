"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VideoUpdateManyWithoutAuthorNestedInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const VideoCreateManyAuthorInputEnvelope_1 = require("../inputs/VideoCreateManyAuthorInputEnvelope");
const VideoCreateOrConnectWithoutAuthorInput_1 = require("../inputs/VideoCreateOrConnectWithoutAuthorInput");
const VideoCreateWithoutAuthorInput_1 = require("../inputs/VideoCreateWithoutAuthorInput");
const VideoScalarWhereInput_1 = require("../inputs/VideoScalarWhereInput");
const VideoUpdateManyWithWhereWithoutAuthorInput_1 = require("../inputs/VideoUpdateManyWithWhereWithoutAuthorInput");
const VideoUpdateWithWhereUniqueWithoutAuthorInput_1 = require("../inputs/VideoUpdateWithWhereUniqueWithoutAuthorInput");
const VideoUpsertWithWhereUniqueWithoutAuthorInput_1 = require("../inputs/VideoUpsertWithWhereUniqueWithoutAuthorInput");
const VideoWhereUniqueInput_1 = require("../inputs/VideoWhereUniqueInput");
let VideoUpdateManyWithoutAuthorNestedInput = exports.VideoUpdateManyWithoutAuthorNestedInput = class VideoUpdateManyWithoutAuthorNestedInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [VideoCreateWithoutAuthorInput_1.VideoCreateWithoutAuthorInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], VideoUpdateManyWithoutAuthorNestedInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [VideoCreateOrConnectWithoutAuthorInput_1.VideoCreateOrConnectWithoutAuthorInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], VideoUpdateManyWithoutAuthorNestedInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [VideoUpsertWithWhereUniqueWithoutAuthorInput_1.VideoUpsertWithWhereUniqueWithoutAuthorInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], VideoUpdateManyWithoutAuthorNestedInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VideoCreateManyAuthorInputEnvelope_1.VideoCreateManyAuthorInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VideoCreateManyAuthorInputEnvelope_1.VideoCreateManyAuthorInputEnvelope)
], VideoUpdateManyWithoutAuthorNestedInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [VideoWhereUniqueInput_1.VideoWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], VideoUpdateManyWithoutAuthorNestedInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [VideoWhereUniqueInput_1.VideoWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], VideoUpdateManyWithoutAuthorNestedInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [VideoWhereUniqueInput_1.VideoWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], VideoUpdateManyWithoutAuthorNestedInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [VideoWhereUniqueInput_1.VideoWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], VideoUpdateManyWithoutAuthorNestedInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [VideoUpdateWithWhereUniqueWithoutAuthorInput_1.VideoUpdateWithWhereUniqueWithoutAuthorInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], VideoUpdateManyWithoutAuthorNestedInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [VideoUpdateManyWithWhereWithoutAuthorInput_1.VideoUpdateManyWithWhereWithoutAuthorInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], VideoUpdateManyWithoutAuthorNestedInput.prototype, "updateMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [VideoScalarWhereInput_1.VideoScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], VideoUpdateManyWithoutAuthorNestedInput.prototype, "deleteMany", void 0);
exports.VideoUpdateManyWithoutAuthorNestedInput = VideoUpdateManyWithoutAuthorNestedInput = tslib_1.__decorate([
    TypeGraphQL.InputType("VideoUpdateManyWithoutAuthorNestedInput", {})
], VideoUpdateManyWithoutAuthorNestedInput);
