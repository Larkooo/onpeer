"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentOrderByRelationAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let CommentOrderByRelationAggregateInput = exports.CommentOrderByRelationAggregateInput = class CommentOrderByRelationAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CommentOrderByRelationAggregateInput.prototype, "_count", void 0);
exports.CommentOrderByRelationAggregateInput = CommentOrderByRelationAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CommentOrderByRelationAggregateInput", {})
], CommentOrderByRelationAggregateInput);
