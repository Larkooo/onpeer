"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LikeWhereUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const LikeUserIdVideoIdCompoundUniqueInput_1 = require("../inputs/LikeUserIdVideoIdCompoundUniqueInput");
const LikeWhereInput_1 = require("../inputs/LikeWhereInput");
const StringFilter_1 = require("../inputs/StringFilter");
const UserRelationFilter_1 = require("../inputs/UserRelationFilter");
const VideoRelationFilter_1 = require("../inputs/VideoRelationFilter");
let LikeWhereUniqueInput = exports.LikeWhereUniqueInput = class LikeWhereUniqueInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LikeUserIdVideoIdCompoundUniqueInput_1.LikeUserIdVideoIdCompoundUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", LikeUserIdVideoIdCompoundUniqueInput_1.LikeUserIdVideoIdCompoundUniqueInput)
], LikeWhereUniqueInput.prototype, "userId_videoId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [LikeWhereInput_1.LikeWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], LikeWhereUniqueInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [LikeWhereInput_1.LikeWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], LikeWhereUniqueInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [LikeWhereInput_1.LikeWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], LikeWhereUniqueInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], LikeWhereUniqueInput.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], LikeWhereUniqueInput.prototype, "videoId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], LikeWhereUniqueInput.prototype, "tx", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserRelationFilter_1.UserRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserRelationFilter_1.UserRelationFilter)
], LikeWhereUniqueInput.prototype, "user", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VideoRelationFilter_1.VideoRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VideoRelationFilter_1.VideoRelationFilter)
], LikeWhereUniqueInput.prototype, "video", void 0);
exports.LikeWhereUniqueInput = LikeWhereUniqueInput = tslib_1.__decorate([
    TypeGraphQL.InputType("LikeWhereUniqueInput", {})
], LikeWhereUniqueInput);
