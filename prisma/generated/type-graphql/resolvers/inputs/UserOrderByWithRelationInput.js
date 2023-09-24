"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserOrderByWithRelationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CommentOrderByRelationAggregateInput_1 = require("../inputs/CommentOrderByRelationAggregateInput");
const LikeOrderByRelationAggregateInput_1 = require("../inputs/LikeOrderByRelationAggregateInput");
const VideoOrderByRelationAggregateInput_1 = require("../inputs/VideoOrderByRelationAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let UserOrderByWithRelationInput = exports.UserOrderByWithRelationInput = class UserOrderByWithRelationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserOrderByWithRelationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VideoOrderByRelationAggregateInput_1.VideoOrderByRelationAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VideoOrderByRelationAggregateInput_1.VideoOrderByRelationAggregateInput)
], UserOrderByWithRelationInput.prototype, "videos", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CommentOrderByRelationAggregateInput_1.CommentOrderByRelationAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CommentOrderByRelationAggregateInput_1.CommentOrderByRelationAggregateInput)
], UserOrderByWithRelationInput.prototype, "comments", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LikeOrderByRelationAggregateInput_1.LikeOrderByRelationAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", LikeOrderByRelationAggregateInput_1.LikeOrderByRelationAggregateInput)
], UserOrderByWithRelationInput.prototype, "likes", void 0);
exports.UserOrderByWithRelationInput = UserOrderByWithRelationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserOrderByWithRelationInput", {})
], UserOrderByWithRelationInput);
