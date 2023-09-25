"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VideoListRelationFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const VideoWhereInput_1 = require("../inputs/VideoWhereInput");
let VideoListRelationFilter = exports.VideoListRelationFilter = class VideoListRelationFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VideoWhereInput_1.VideoWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VideoWhereInput_1.VideoWhereInput)
], VideoListRelationFilter.prototype, "every", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VideoWhereInput_1.VideoWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VideoWhereInput_1.VideoWhereInput)
], VideoListRelationFilter.prototype, "some", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VideoWhereInput_1.VideoWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VideoWhereInput_1.VideoWhereInput)
], VideoListRelationFilter.prototype, "none", void 0);
exports.VideoListRelationFilter = VideoListRelationFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("VideoListRelationFilter", {})
], VideoListRelationFilter);
