"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateComment = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CommentCountAggregate_1 = require("../outputs/CommentCountAggregate");
const CommentMaxAggregate_1 = require("../outputs/CommentMaxAggregate");
const CommentMinAggregate_1 = require("../outputs/CommentMinAggregate");
let AggregateComment = exports.AggregateComment = class AggregateComment {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CommentCountAggregate_1.CommentCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CommentCountAggregate_1.CommentCountAggregate)
], AggregateComment.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CommentMinAggregate_1.CommentMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CommentMinAggregate_1.CommentMinAggregate)
], AggregateComment.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CommentMaxAggregate_1.CommentMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CommentMaxAggregate_1.CommentMaxAggregate)
], AggregateComment.prototype, "_max", void 0);
exports.AggregateComment = AggregateComment = tslib_1.__decorate([
    TypeGraphQL.ObjectType("AggregateComment", {})
], AggregateComment);
