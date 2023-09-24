"use strict";
var CommentScalarWhereWithAggregatesInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentScalarWhereWithAggregatesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const StringWithAggregatesFilter_1 = require("../inputs/StringWithAggregatesFilter");
let CommentScalarWhereWithAggregatesInput = exports.CommentScalarWhereWithAggregatesInput = CommentScalarWhereWithAggregatesInput_1 = class CommentScalarWhereWithAggregatesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CommentScalarWhereWithAggregatesInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CommentScalarWhereWithAggregatesInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CommentScalarWhereWithAggregatesInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CommentScalarWhereWithAggregatesInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CommentScalarWhereWithAggregatesInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CommentScalarWhereWithAggregatesInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringWithAggregatesFilter_1.StringWithAggregatesFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringWithAggregatesFilter_1.StringWithAggregatesFilter)
], CommentScalarWhereWithAggregatesInput.prototype, "text", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringWithAggregatesFilter_1.StringWithAggregatesFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringWithAggregatesFilter_1.StringWithAggregatesFilter)
], CommentScalarWhereWithAggregatesInput.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringWithAggregatesFilter_1.StringWithAggregatesFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringWithAggregatesFilter_1.StringWithAggregatesFilter)
], CommentScalarWhereWithAggregatesInput.prototype, "videoId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringWithAggregatesFilter_1.StringWithAggregatesFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringWithAggregatesFilter_1.StringWithAggregatesFilter)
], CommentScalarWhereWithAggregatesInput.prototype, "tx", void 0);
exports.CommentScalarWhereWithAggregatesInput = CommentScalarWhereWithAggregatesInput = CommentScalarWhereWithAggregatesInput_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("CommentScalarWhereWithAggregatesInput", {})
], CommentScalarWhereWithAggregatesInput);
