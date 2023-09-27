"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentWhereUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CommentWhereInput_1 = require("../inputs/CommentWhereInput");
const StringFilter_1 = require("../inputs/StringFilter");
const UserRelationFilter_1 = require("../inputs/UserRelationFilter");
const VideoRelationFilter_1 = require("../inputs/VideoRelationFilter");
let CommentWhereUniqueInput = exports.CommentWhereUniqueInput = class CommentWhereUniqueInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CommentWhereUniqueInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CommentWhereInput_1.CommentWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CommentWhereUniqueInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CommentWhereInput_1.CommentWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CommentWhereUniqueInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CommentWhereInput_1.CommentWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CommentWhereUniqueInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], CommentWhereUniqueInput.prototype, "text", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], CommentWhereUniqueInput.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], CommentWhereUniqueInput.prototype, "videoId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], CommentWhereUniqueInput.prototype, "tx", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserRelationFilter_1.UserRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserRelationFilter_1.UserRelationFilter)
], CommentWhereUniqueInput.prototype, "user", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VideoRelationFilter_1.VideoRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VideoRelationFilter_1.VideoRelationFilter)
], CommentWhereUniqueInput.prototype, "video", void 0);
exports.CommentWhereUniqueInput = CommentWhereUniqueInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CommentWhereUniqueInput", {})
], CommentWhereUniqueInput);
