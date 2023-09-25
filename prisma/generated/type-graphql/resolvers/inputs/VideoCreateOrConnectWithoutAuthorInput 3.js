"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VideoCreateOrConnectWithoutAuthorInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const VideoCreateWithoutAuthorInput_1 = require("../inputs/VideoCreateWithoutAuthorInput");
const VideoWhereUniqueInput_1 = require("../inputs/VideoWhereUniqueInput");
let VideoCreateOrConnectWithoutAuthorInput = exports.VideoCreateOrConnectWithoutAuthorInput = class VideoCreateOrConnectWithoutAuthorInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VideoWhereUniqueInput_1.VideoWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", VideoWhereUniqueInput_1.VideoWhereUniqueInput)
], VideoCreateOrConnectWithoutAuthorInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VideoCreateWithoutAuthorInput_1.VideoCreateWithoutAuthorInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", VideoCreateWithoutAuthorInput_1.VideoCreateWithoutAuthorInput)
], VideoCreateOrConnectWithoutAuthorInput.prototype, "create", void 0);
exports.VideoCreateOrConnectWithoutAuthorInput = VideoCreateOrConnectWithoutAuthorInput = tslib_1.__decorate([
    TypeGraphQL.InputType("VideoCreateOrConnectWithoutAuthorInput", {})
], VideoCreateOrConnectWithoutAuthorInput);
