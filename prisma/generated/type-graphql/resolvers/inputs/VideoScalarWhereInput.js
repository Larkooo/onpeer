"use strict";
var VideoScalarWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.VideoScalarWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFilter_1 = require("../inputs/DateTimeFilter");
const StringFilter_1 = require("../inputs/StringFilter");
const StringNullableFilter_1 = require("../inputs/StringNullableFilter");
let VideoScalarWhereInput = exports.VideoScalarWhereInput = VideoScalarWhereInput_1 = class VideoScalarWhereInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [VideoScalarWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], VideoScalarWhereInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [VideoScalarWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], VideoScalarWhereInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [VideoScalarWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], VideoScalarWhereInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], VideoScalarWhereInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], VideoScalarWhereInput.prototype, "title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], VideoScalarWhereInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], VideoScalarWhereInput.prototype, "authorId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], VideoScalarWhereInput.prototype, "mintTx", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], VideoScalarWhereInput.prototype, "createdAt", void 0);
exports.VideoScalarWhereInput = VideoScalarWhereInput = VideoScalarWhereInput_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("VideoScalarWhereInput", {})
], VideoScalarWhereInput);
