"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VideoOrderByWithRelationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CommentOrderByRelationAggregateInput_1 = require("../inputs/CommentOrderByRelationAggregateInput");
const LikeOrderByRelationAggregateInput_1 = require("../inputs/LikeOrderByRelationAggregateInput");
const SortOrderInput_1 = require("../inputs/SortOrderInput");
const UserOrderByWithRelationInput_1 = require("../inputs/UserOrderByWithRelationInput");
const SortOrder_1 = require("../../enums/SortOrder");
let VideoOrderByWithRelationInput = exports.VideoOrderByWithRelationInput = class VideoOrderByWithRelationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], VideoOrderByWithRelationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], VideoOrderByWithRelationInput.prototype, "title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], VideoOrderByWithRelationInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], VideoOrderByWithRelationInput.prototype, "authorId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrderInput_1.SortOrderInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SortOrderInput_1.SortOrderInput)
], VideoOrderByWithRelationInput.prototype, "mintTx", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], VideoOrderByWithRelationInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserOrderByWithRelationInput_1.UserOrderByWithRelationInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserOrderByWithRelationInput_1.UserOrderByWithRelationInput)
], VideoOrderByWithRelationInput.prototype, "author", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CommentOrderByRelationAggregateInput_1.CommentOrderByRelationAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CommentOrderByRelationAggregateInput_1.CommentOrderByRelationAggregateInput)
], VideoOrderByWithRelationInput.prototype, "comments", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LikeOrderByRelationAggregateInput_1.LikeOrderByRelationAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", LikeOrderByRelationAggregateInput_1.LikeOrderByRelationAggregateInput)
], VideoOrderByWithRelationInput.prototype, "likes", void 0);
exports.VideoOrderByWithRelationInput = VideoOrderByWithRelationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("VideoOrderByWithRelationInput", {})
], VideoOrderByWithRelationInput);
