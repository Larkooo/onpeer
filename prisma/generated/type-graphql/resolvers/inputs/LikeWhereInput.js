"use strict";
var LikeWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.LikeWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const StringFilter_1 = require("../inputs/StringFilter");
const UserRelationFilter_1 = require("../inputs/UserRelationFilter");
const VideoRelationFilter_1 = require("../inputs/VideoRelationFilter");
let LikeWhereInput = exports.LikeWhereInput = LikeWhereInput_1 = class LikeWhereInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [LikeWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], LikeWhereInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [LikeWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], LikeWhereInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [LikeWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], LikeWhereInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], LikeWhereInput.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], LikeWhereInput.prototype, "videoId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], LikeWhereInput.prototype, "tx", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserRelationFilter_1.UserRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserRelationFilter_1.UserRelationFilter)
], LikeWhereInput.prototype, "user", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VideoRelationFilter_1.VideoRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VideoRelationFilter_1.VideoRelationFilter)
], LikeWhereInput.prototype, "video", void 0);
exports.LikeWhereInput = LikeWhereInput = LikeWhereInput_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("LikeWhereInput", {})
], LikeWhereInput);
