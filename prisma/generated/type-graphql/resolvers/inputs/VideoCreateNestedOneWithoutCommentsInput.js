"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VideoCreateNestedOneWithoutCommentsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const VideoCreateOrConnectWithoutCommentsInput_1 = require("../inputs/VideoCreateOrConnectWithoutCommentsInput");
const VideoCreateWithoutCommentsInput_1 = require("../inputs/VideoCreateWithoutCommentsInput");
const VideoWhereUniqueInput_1 = require("../inputs/VideoWhereUniqueInput");
let VideoCreateNestedOneWithoutCommentsInput = exports.VideoCreateNestedOneWithoutCommentsInput = class VideoCreateNestedOneWithoutCommentsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VideoCreateWithoutCommentsInput_1.VideoCreateWithoutCommentsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VideoCreateWithoutCommentsInput_1.VideoCreateWithoutCommentsInput)
], VideoCreateNestedOneWithoutCommentsInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VideoCreateOrConnectWithoutCommentsInput_1.VideoCreateOrConnectWithoutCommentsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VideoCreateOrConnectWithoutCommentsInput_1.VideoCreateOrConnectWithoutCommentsInput)
], VideoCreateNestedOneWithoutCommentsInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VideoWhereUniqueInput_1.VideoWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VideoWhereUniqueInput_1.VideoWhereUniqueInput)
], VideoCreateNestedOneWithoutCommentsInput.prototype, "connect", void 0);
exports.VideoCreateNestedOneWithoutCommentsInput = VideoCreateNestedOneWithoutCommentsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("VideoCreateNestedOneWithoutCommentsInput", {})
], VideoCreateNestedOneWithoutCommentsInput);
