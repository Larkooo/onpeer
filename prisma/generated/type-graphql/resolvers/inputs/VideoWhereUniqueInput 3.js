"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VideoWhereUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BigIntNullableFilter_1 = require("../inputs/BigIntNullableFilter");
const CommentListRelationFilter_1 = require("../inputs/CommentListRelationFilter");
const DateTimeFilter_1 = require("../inputs/DateTimeFilter");
const LikeListRelationFilter_1 = require("../inputs/LikeListRelationFilter");
const StringFilter_1 = require("../inputs/StringFilter");
const StringNullableFilter_1 = require("../inputs/StringNullableFilter");
const UserRelationFilter_1 = require("../inputs/UserRelationFilter");
const VideoWhereInput_1 = require("../inputs/VideoWhereInput");
let VideoWhereUniqueInput = exports.VideoWhereUniqueInput = class VideoWhereUniqueInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], VideoWhereUniqueInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [VideoWhereInput_1.VideoWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], VideoWhereUniqueInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [VideoWhereInput_1.VideoWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], VideoWhereUniqueInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [VideoWhereInput_1.VideoWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], VideoWhereUniqueInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BigIntNullableFilter_1.BigIntNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BigIntNullableFilter_1.BigIntNullableFilter)
], VideoWhereUniqueInput.prototype, "tokenId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], VideoWhereUniqueInput.prototype, "title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], VideoWhereUniqueInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], VideoWhereUniqueInput.prototype, "authorId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], VideoWhereUniqueInput.prototype, "mintTx", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], VideoWhereUniqueInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserRelationFilter_1.UserRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserRelationFilter_1.UserRelationFilter)
], VideoWhereUniqueInput.prototype, "author", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CommentListRelationFilter_1.CommentListRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CommentListRelationFilter_1.CommentListRelationFilter)
], VideoWhereUniqueInput.prototype, "comments", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LikeListRelationFilter_1.LikeListRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", LikeListRelationFilter_1.LikeListRelationFilter)
], VideoWhereUniqueInput.prototype, "likes", void 0);
exports.VideoWhereUniqueInput = VideoWhereUniqueInput = tslib_1.__decorate([
    TypeGraphQL.InputType("VideoWhereUniqueInput", {})
], VideoWhereUniqueInput);
