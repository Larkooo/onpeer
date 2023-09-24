"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VideoCreateOrConnectWithoutLikesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const VideoCreateWithoutLikesInput_1 = require("../inputs/VideoCreateWithoutLikesInput");
const VideoWhereUniqueInput_1 = require("../inputs/VideoWhereUniqueInput");
let VideoCreateOrConnectWithoutLikesInput = exports.VideoCreateOrConnectWithoutLikesInput = class VideoCreateOrConnectWithoutLikesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VideoWhereUniqueInput_1.VideoWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", VideoWhereUniqueInput_1.VideoWhereUniqueInput)
], VideoCreateOrConnectWithoutLikesInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VideoCreateWithoutLikesInput_1.VideoCreateWithoutLikesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", VideoCreateWithoutLikesInput_1.VideoCreateWithoutLikesInput)
], VideoCreateOrConnectWithoutLikesInput.prototype, "create", void 0);
exports.VideoCreateOrConnectWithoutLikesInput = VideoCreateOrConnectWithoutLikesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("VideoCreateOrConnectWithoutLikesInput", {})
], VideoCreateOrConnectWithoutLikesInput);
