"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VideoUpsertWithoutCommentsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const VideoCreateWithoutCommentsInput_1 = require("../inputs/VideoCreateWithoutCommentsInput");
const VideoUpdateWithoutCommentsInput_1 = require("../inputs/VideoUpdateWithoutCommentsInput");
const VideoWhereInput_1 = require("../inputs/VideoWhereInput");
let VideoUpsertWithoutCommentsInput = exports.VideoUpsertWithoutCommentsInput = class VideoUpsertWithoutCommentsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VideoUpdateWithoutCommentsInput_1.VideoUpdateWithoutCommentsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", VideoUpdateWithoutCommentsInput_1.VideoUpdateWithoutCommentsInput)
], VideoUpsertWithoutCommentsInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VideoCreateWithoutCommentsInput_1.VideoCreateWithoutCommentsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", VideoCreateWithoutCommentsInput_1.VideoCreateWithoutCommentsInput)
], VideoUpsertWithoutCommentsInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VideoWhereInput_1.VideoWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VideoWhereInput_1.VideoWhereInput)
], VideoUpsertWithoutCommentsInput.prototype, "where", void 0);
exports.VideoUpsertWithoutCommentsInput = VideoUpsertWithoutCommentsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("VideoUpsertWithoutCommentsInput", {})
], VideoUpsertWithoutCommentsInput);
