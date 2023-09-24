"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VideoRelationFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const VideoWhereInput_1 = require("../inputs/VideoWhereInput");
let VideoRelationFilter = exports.VideoRelationFilter = class VideoRelationFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VideoWhereInput_1.VideoWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VideoWhereInput_1.VideoWhereInput)
], VideoRelationFilter.prototype, "is", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VideoWhereInput_1.VideoWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VideoWhereInput_1.VideoWhereInput)
], VideoRelationFilter.prototype, "isNot", void 0);
exports.VideoRelationFilter = VideoRelationFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("VideoRelationFilter", {})
], VideoRelationFilter);
