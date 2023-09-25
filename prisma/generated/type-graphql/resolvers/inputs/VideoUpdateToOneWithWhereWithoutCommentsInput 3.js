"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VideoUpdateToOneWithWhereWithoutCommentsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const VideoUpdateWithoutCommentsInput_1 = require("../inputs/VideoUpdateWithoutCommentsInput");
const VideoWhereInput_1 = require("../inputs/VideoWhereInput");
let VideoUpdateToOneWithWhereWithoutCommentsInput = exports.VideoUpdateToOneWithWhereWithoutCommentsInput = class VideoUpdateToOneWithWhereWithoutCommentsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VideoWhereInput_1.VideoWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VideoWhereInput_1.VideoWhereInput)
], VideoUpdateToOneWithWhereWithoutCommentsInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VideoUpdateWithoutCommentsInput_1.VideoUpdateWithoutCommentsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", VideoUpdateWithoutCommentsInput_1.VideoUpdateWithoutCommentsInput)
], VideoUpdateToOneWithWhereWithoutCommentsInput.prototype, "data", void 0);
exports.VideoUpdateToOneWithWhereWithoutCommentsInput = VideoUpdateToOneWithWhereWithoutCommentsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("VideoUpdateToOneWithWhereWithoutCommentsInput", {})
], VideoUpdateToOneWithWhereWithoutCommentsInput);
