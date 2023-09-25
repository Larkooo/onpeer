"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VideoUpdateToOneWithWhereWithoutLikesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const VideoUpdateWithoutLikesInput_1 = require("../inputs/VideoUpdateWithoutLikesInput");
const VideoWhereInput_1 = require("../inputs/VideoWhereInput");
let VideoUpdateToOneWithWhereWithoutLikesInput = exports.VideoUpdateToOneWithWhereWithoutLikesInput = class VideoUpdateToOneWithWhereWithoutLikesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VideoWhereInput_1.VideoWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VideoWhereInput_1.VideoWhereInput)
], VideoUpdateToOneWithWhereWithoutLikesInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VideoUpdateWithoutLikesInput_1.VideoUpdateWithoutLikesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", VideoUpdateWithoutLikesInput_1.VideoUpdateWithoutLikesInput)
], VideoUpdateToOneWithWhereWithoutLikesInput.prototype, "data", void 0);
exports.VideoUpdateToOneWithWhereWithoutLikesInput = VideoUpdateToOneWithWhereWithoutLikesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("VideoUpdateToOneWithWhereWithoutLikesInput", {})
], VideoUpdateToOneWithWhereWithoutLikesInput);
