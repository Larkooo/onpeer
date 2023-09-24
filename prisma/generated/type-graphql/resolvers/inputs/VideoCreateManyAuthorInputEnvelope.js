"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VideoCreateManyAuthorInputEnvelope = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const VideoCreateManyAuthorInput_1 = require("../inputs/VideoCreateManyAuthorInput");
let VideoCreateManyAuthorInputEnvelope = exports.VideoCreateManyAuthorInputEnvelope = class VideoCreateManyAuthorInputEnvelope {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [VideoCreateManyAuthorInput_1.VideoCreateManyAuthorInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], VideoCreateManyAuthorInputEnvelope.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], VideoCreateManyAuthorInputEnvelope.prototype, "skipDuplicates", void 0);
exports.VideoCreateManyAuthorInputEnvelope = VideoCreateManyAuthorInputEnvelope = tslib_1.__decorate([
    TypeGraphQL.InputType("VideoCreateManyAuthorInputEnvelope", {})
], VideoCreateManyAuthorInputEnvelope);
