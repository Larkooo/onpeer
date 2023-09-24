"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VideoCreateOrConnectWithoutCommentsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const VideoCreateWithoutCommentsInput_1 = require("../inputs/VideoCreateWithoutCommentsInput");
const VideoWhereUniqueInput_1 = require("../inputs/VideoWhereUniqueInput");
let VideoCreateOrConnectWithoutCommentsInput = exports.VideoCreateOrConnectWithoutCommentsInput = class VideoCreateOrConnectWithoutCommentsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VideoWhereUniqueInput_1.VideoWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", VideoWhereUniqueInput_1.VideoWhereUniqueInput)
], VideoCreateOrConnectWithoutCommentsInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VideoCreateWithoutCommentsInput_1.VideoCreateWithoutCommentsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", VideoCreateWithoutCommentsInput_1.VideoCreateWithoutCommentsInput)
], VideoCreateOrConnectWithoutCommentsInput.prototype, "create", void 0);
exports.VideoCreateOrConnectWithoutCommentsInput = VideoCreateOrConnectWithoutCommentsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("VideoCreateOrConnectWithoutCommentsInput", {})
], VideoCreateOrConnectWithoutCommentsInput);
