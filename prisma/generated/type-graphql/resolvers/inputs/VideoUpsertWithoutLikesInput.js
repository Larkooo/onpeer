"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VideoUpsertWithoutLikesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const VideoCreateWithoutLikesInput_1 = require("../inputs/VideoCreateWithoutLikesInput");
const VideoUpdateWithoutLikesInput_1 = require("../inputs/VideoUpdateWithoutLikesInput");
const VideoWhereInput_1 = require("../inputs/VideoWhereInput");
let VideoUpsertWithoutLikesInput = exports.VideoUpsertWithoutLikesInput = class VideoUpsertWithoutLikesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VideoUpdateWithoutLikesInput_1.VideoUpdateWithoutLikesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", VideoUpdateWithoutLikesInput_1.VideoUpdateWithoutLikesInput)
], VideoUpsertWithoutLikesInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VideoCreateWithoutLikesInput_1.VideoCreateWithoutLikesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", VideoCreateWithoutLikesInput_1.VideoCreateWithoutLikesInput)
], VideoUpsertWithoutLikesInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VideoWhereInput_1.VideoWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VideoWhereInput_1.VideoWhereInput)
], VideoUpsertWithoutLikesInput.prototype, "where", void 0);
exports.VideoUpsertWithoutLikesInput = VideoUpsertWithoutLikesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("VideoUpsertWithoutLikesInput", {})
], VideoUpsertWithoutLikesInput);
