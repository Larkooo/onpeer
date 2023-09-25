"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VideoUpdateWithWhereUniqueWithoutAuthorInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const VideoUpdateWithoutAuthorInput_1 = require("../inputs/VideoUpdateWithoutAuthorInput");
const VideoWhereUniqueInput_1 = require("../inputs/VideoWhereUniqueInput");
let VideoUpdateWithWhereUniqueWithoutAuthorInput = exports.VideoUpdateWithWhereUniqueWithoutAuthorInput = class VideoUpdateWithWhereUniqueWithoutAuthorInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VideoWhereUniqueInput_1.VideoWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", VideoWhereUniqueInput_1.VideoWhereUniqueInput)
], VideoUpdateWithWhereUniqueWithoutAuthorInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VideoUpdateWithoutAuthorInput_1.VideoUpdateWithoutAuthorInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", VideoUpdateWithoutAuthorInput_1.VideoUpdateWithoutAuthorInput)
], VideoUpdateWithWhereUniqueWithoutAuthorInput.prototype, "data", void 0);
exports.VideoUpdateWithWhereUniqueWithoutAuthorInput = VideoUpdateWithWhereUniqueWithoutAuthorInput = tslib_1.__decorate([
    TypeGraphQL.InputType("VideoUpdateWithWhereUniqueWithoutAuthorInput", {})
], VideoUpdateWithWhereUniqueWithoutAuthorInput);
