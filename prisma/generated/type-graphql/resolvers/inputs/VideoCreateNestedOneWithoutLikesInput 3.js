"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VideoCreateNestedOneWithoutLikesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const VideoCreateOrConnectWithoutLikesInput_1 = require("../inputs/VideoCreateOrConnectWithoutLikesInput");
const VideoCreateWithoutLikesInput_1 = require("../inputs/VideoCreateWithoutLikesInput");
const VideoWhereUniqueInput_1 = require("../inputs/VideoWhereUniqueInput");
let VideoCreateNestedOneWithoutLikesInput = exports.VideoCreateNestedOneWithoutLikesInput = class VideoCreateNestedOneWithoutLikesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VideoCreateWithoutLikesInput_1.VideoCreateWithoutLikesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VideoCreateWithoutLikesInput_1.VideoCreateWithoutLikesInput)
], VideoCreateNestedOneWithoutLikesInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VideoCreateOrConnectWithoutLikesInput_1.VideoCreateOrConnectWithoutLikesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VideoCreateOrConnectWithoutLikesInput_1.VideoCreateOrConnectWithoutLikesInput)
], VideoCreateNestedOneWithoutLikesInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VideoWhereUniqueInput_1.VideoWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VideoWhereUniqueInput_1.VideoWhereUniqueInput)
], VideoCreateNestedOneWithoutLikesInput.prototype, "connect", void 0);
exports.VideoCreateNestedOneWithoutLikesInput = VideoCreateNestedOneWithoutLikesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("VideoCreateNestedOneWithoutLikesInput", {})
], VideoCreateNestedOneWithoutLikesInput);
