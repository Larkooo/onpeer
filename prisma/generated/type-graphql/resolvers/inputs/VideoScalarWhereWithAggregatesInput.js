"use strict";
var VideoScalarWhereWithAggregatesInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.VideoScalarWhereWithAggregatesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeWithAggregatesFilter_1 = require("../inputs/DateTimeWithAggregatesFilter");
const StringNullableWithAggregatesFilter_1 = require("../inputs/StringNullableWithAggregatesFilter");
const StringWithAggregatesFilter_1 = require("../inputs/StringWithAggregatesFilter");
let VideoScalarWhereWithAggregatesInput = exports.VideoScalarWhereWithAggregatesInput = VideoScalarWhereWithAggregatesInput_1 = class VideoScalarWhereWithAggregatesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [VideoScalarWhereWithAggregatesInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], VideoScalarWhereWithAggregatesInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [VideoScalarWhereWithAggregatesInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], VideoScalarWhereWithAggregatesInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [VideoScalarWhereWithAggregatesInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], VideoScalarWhereWithAggregatesInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringWithAggregatesFilter_1.StringWithAggregatesFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringWithAggregatesFilter_1.StringWithAggregatesFilter)
], VideoScalarWhereWithAggregatesInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringWithAggregatesFilter_1.StringWithAggregatesFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringWithAggregatesFilter_1.StringWithAggregatesFilter)
], VideoScalarWhereWithAggregatesInput.prototype, "title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringWithAggregatesFilter_1.StringWithAggregatesFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringWithAggregatesFilter_1.StringWithAggregatesFilter)
], VideoScalarWhereWithAggregatesInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringWithAggregatesFilter_1.StringWithAggregatesFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringWithAggregatesFilter_1.StringWithAggregatesFilter)
], VideoScalarWhereWithAggregatesInput.prototype, "authorId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter_1.StringNullableWithAggregatesFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableWithAggregatesFilter_1.StringNullableWithAggregatesFilter)
], VideoScalarWhereWithAggregatesInput.prototype, "mintTx", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter_1.DateTimeWithAggregatesFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeWithAggregatesFilter_1.DateTimeWithAggregatesFilter)
], VideoScalarWhereWithAggregatesInput.prototype, "createdAt", void 0);
exports.VideoScalarWhereWithAggregatesInput = VideoScalarWhereWithAggregatesInput = VideoScalarWhereWithAggregatesInput_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("VideoScalarWhereWithAggregatesInput", {})
], VideoScalarWhereWithAggregatesInput);
