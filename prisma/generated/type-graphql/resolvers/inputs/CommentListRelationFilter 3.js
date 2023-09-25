"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentListRelationFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CommentWhereInput_1 = require("../inputs/CommentWhereInput");
let CommentListRelationFilter = exports.CommentListRelationFilter = class CommentListRelationFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CommentWhereInput_1.CommentWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CommentWhereInput_1.CommentWhereInput)
], CommentListRelationFilter.prototype, "every", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CommentWhereInput_1.CommentWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CommentWhereInput_1.CommentWhereInput)
], CommentListRelationFilter.prototype, "some", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CommentWhereInput_1.CommentWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CommentWhereInput_1.CommentWhereInput)
], CommentListRelationFilter.prototype, "none", void 0);
exports.CommentListRelationFilter = CommentListRelationFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("CommentListRelationFilter", {})
], CommentListRelationFilter);
