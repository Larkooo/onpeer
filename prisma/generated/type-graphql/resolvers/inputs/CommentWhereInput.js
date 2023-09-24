"use strict";
var CommentWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const StringFilter_1 = require("../inputs/StringFilter");
const UserRelationFilter_1 = require("../inputs/UserRelationFilter");
const VideoRelationFilter_1 = require("../inputs/VideoRelationFilter");
let CommentWhereInput = exports.CommentWhereInput = CommentWhereInput_1 = class CommentWhereInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CommentWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CommentWhereInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CommentWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CommentWhereInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CommentWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CommentWhereInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], CommentWhereInput.prototype, "text", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], CommentWhereInput.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], CommentWhereInput.prototype, "videoId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], CommentWhereInput.prototype, "tx", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserRelationFilter_1.UserRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserRelationFilter_1.UserRelationFilter)
], CommentWhereInput.prototype, "user", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VideoRelationFilter_1.VideoRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VideoRelationFilter_1.VideoRelationFilter)
], CommentWhereInput.prototype, "video", void 0);
exports.CommentWhereInput = CommentWhereInput = CommentWhereInput_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("CommentWhereInput", {})
], CommentWhereInput);
