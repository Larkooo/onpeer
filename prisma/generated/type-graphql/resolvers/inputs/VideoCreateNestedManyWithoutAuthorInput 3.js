"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VideoCreateNestedManyWithoutAuthorInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const VideoCreateManyAuthorInputEnvelope_1 = require("../inputs/VideoCreateManyAuthorInputEnvelope");
const VideoCreateOrConnectWithoutAuthorInput_1 = require("../inputs/VideoCreateOrConnectWithoutAuthorInput");
const VideoCreateWithoutAuthorInput_1 = require("../inputs/VideoCreateWithoutAuthorInput");
const VideoWhereUniqueInput_1 = require("../inputs/VideoWhereUniqueInput");
let VideoCreateNestedManyWithoutAuthorInput = exports.VideoCreateNestedManyWithoutAuthorInput = class VideoCreateNestedManyWithoutAuthorInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [VideoCreateWithoutAuthorInput_1.VideoCreateWithoutAuthorInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], VideoCreateNestedManyWithoutAuthorInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [VideoCreateOrConnectWithoutAuthorInput_1.VideoCreateOrConnectWithoutAuthorInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], VideoCreateNestedManyWithoutAuthorInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VideoCreateManyAuthorInputEnvelope_1.VideoCreateManyAuthorInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VideoCreateManyAuthorInputEnvelope_1.VideoCreateManyAuthorInputEnvelope)
], VideoCreateNestedManyWithoutAuthorInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [VideoWhereUniqueInput_1.VideoWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], VideoCreateNestedManyWithoutAuthorInput.prototype, "connect", void 0);
exports.VideoCreateNestedManyWithoutAuthorInput = VideoCreateNestedManyWithoutAuthorInput = tslib_1.__decorate([
    TypeGraphQL.InputType("VideoCreateNestedManyWithoutAuthorInput", {})
], VideoCreateNestedManyWithoutAuthorInput);
