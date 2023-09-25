"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VideoOrderByWithAggregationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrderInput_1 = require("../inputs/SortOrderInput");
const VideoCountOrderByAggregateInput_1 = require("../inputs/VideoCountOrderByAggregateInput");
const VideoMaxOrderByAggregateInput_1 = require("../inputs/VideoMaxOrderByAggregateInput");
const VideoMinOrderByAggregateInput_1 = require("../inputs/VideoMinOrderByAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let VideoOrderByWithAggregationInput = exports.VideoOrderByWithAggregationInput = class VideoOrderByWithAggregationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], VideoOrderByWithAggregationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrderInput_1.SortOrderInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SortOrderInput_1.SortOrderInput)
], VideoOrderByWithAggregationInput.prototype, "tokenId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], VideoOrderByWithAggregationInput.prototype, "title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], VideoOrderByWithAggregationInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], VideoOrderByWithAggregationInput.prototype, "authorId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrderInput_1.SortOrderInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SortOrderInput_1.SortOrderInput)
], VideoOrderByWithAggregationInput.prototype, "mintTx", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrderInput_1.SortOrderInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SortOrderInput_1.SortOrderInput)
], VideoOrderByWithAggregationInput.prototype, "mintSignature", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], VideoOrderByWithAggregationInput.prototype, "playbackId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], VideoOrderByWithAggregationInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VideoCountOrderByAggregateInput_1.VideoCountOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VideoCountOrderByAggregateInput_1.VideoCountOrderByAggregateInput)
], VideoOrderByWithAggregationInput.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VideoMaxOrderByAggregateInput_1.VideoMaxOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VideoMaxOrderByAggregateInput_1.VideoMaxOrderByAggregateInput)
], VideoOrderByWithAggregationInput.prototype, "_max", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VideoMinOrderByAggregateInput_1.VideoMinOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VideoMinOrderByAggregateInput_1.VideoMinOrderByAggregateInput)
], VideoOrderByWithAggregationInput.prototype, "_min", void 0);
exports.VideoOrderByWithAggregationInput = VideoOrderByWithAggregationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("VideoOrderByWithAggregationInput", {})
], VideoOrderByWithAggregationInput);
