"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentOrderByWithRelationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserOrderByWithRelationInput_1 = require("../inputs/UserOrderByWithRelationInput");
const VideoOrderByWithRelationInput_1 = require("../inputs/VideoOrderByWithRelationInput");
const SortOrder_1 = require("../../enums/SortOrder");
let CommentOrderByWithRelationInput = exports.CommentOrderByWithRelationInput = class CommentOrderByWithRelationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CommentOrderByWithRelationInput.prototype, "text", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CommentOrderByWithRelationInput.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CommentOrderByWithRelationInput.prototype, "videoId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CommentOrderByWithRelationInput.prototype, "tx", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserOrderByWithRelationInput_1.UserOrderByWithRelationInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserOrderByWithRelationInput_1.UserOrderByWithRelationInput)
], CommentOrderByWithRelationInput.prototype, "user", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VideoOrderByWithRelationInput_1.VideoOrderByWithRelationInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VideoOrderByWithRelationInput_1.VideoOrderByWithRelationInput)
], CommentOrderByWithRelationInput.prototype, "video", void 0);
exports.CommentOrderByWithRelationInput = CommentOrderByWithRelationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CommentOrderByWithRelationInput", {})
], CommentOrderByWithRelationInput);
