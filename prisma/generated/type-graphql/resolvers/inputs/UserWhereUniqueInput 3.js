"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserWhereUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CommentListRelationFilter_1 = require("../inputs/CommentListRelationFilter");
const LikeListRelationFilter_1 = require("../inputs/LikeListRelationFilter");
const UserWhereInput_1 = require("../inputs/UserWhereInput");
const VideoListRelationFilter_1 = require("../inputs/VideoListRelationFilter");
let UserWhereUniqueInput = exports.UserWhereUniqueInput = class UserWhereUniqueInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserWhereUniqueInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [UserWhereInput_1.UserWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], UserWhereUniqueInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [UserWhereInput_1.UserWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], UserWhereUniqueInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [UserWhereInput_1.UserWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], UserWhereUniqueInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VideoListRelationFilter_1.VideoListRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VideoListRelationFilter_1.VideoListRelationFilter)
], UserWhereUniqueInput.prototype, "videos", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CommentListRelationFilter_1.CommentListRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CommentListRelationFilter_1.CommentListRelationFilter)
], UserWhereUniqueInput.prototype, "comments", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LikeListRelationFilter_1.LikeListRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", LikeListRelationFilter_1.LikeListRelationFilter)
], UserWhereUniqueInput.prototype, "likes", void 0);
exports.UserWhereUniqueInput = UserWhereUniqueInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserWhereUniqueInput", {})
], UserWhereUniqueInput);
