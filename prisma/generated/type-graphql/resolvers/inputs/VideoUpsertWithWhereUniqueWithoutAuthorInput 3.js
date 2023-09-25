"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VideoUpsertWithWhereUniqueWithoutAuthorInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const VideoCreateWithoutAuthorInput_1 = require("../inputs/VideoCreateWithoutAuthorInput");
const VideoUpdateWithoutAuthorInput_1 = require("../inputs/VideoUpdateWithoutAuthorInput");
const VideoWhereUniqueInput_1 = require("../inputs/VideoWhereUniqueInput");
let VideoUpsertWithWhereUniqueWithoutAuthorInput = exports.VideoUpsertWithWhereUniqueWithoutAuthorInput = class VideoUpsertWithWhereUniqueWithoutAuthorInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VideoWhereUniqueInput_1.VideoWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", VideoWhereUniqueInput_1.VideoWhereUniqueInput)
], VideoUpsertWithWhereUniqueWithoutAuthorInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VideoUpdateWithoutAuthorInput_1.VideoUpdateWithoutAuthorInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", VideoUpdateWithoutAuthorInput_1.VideoUpdateWithoutAuthorInput)
], VideoUpsertWithWhereUniqueWithoutAuthorInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VideoCreateWithoutAuthorInput_1.VideoCreateWithoutAuthorInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", VideoCreateWithoutAuthorInput_1.VideoCreateWithoutAuthorInput)
], VideoUpsertWithWhereUniqueWithoutAuthorInput.prototype, "create", void 0);
exports.VideoUpsertWithWhereUniqueWithoutAuthorInput = VideoUpsertWithWhereUniqueWithoutAuthorInput = tslib_1.__decorate([
    TypeGraphQL.InputType("VideoUpsertWithWhereUniqueWithoutAuthorInput", {})
], VideoUpsertWithWhereUniqueWithoutAuthorInput);
