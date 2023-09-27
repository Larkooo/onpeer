"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentCreateManyVideoInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let CommentCreateManyVideoInput = exports.CommentCreateManyVideoInput = class CommentCreateManyVideoInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CommentCreateManyVideoInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], CommentCreateManyVideoInput.prototype, "text", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], CommentCreateManyVideoInput.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], CommentCreateManyVideoInput.prototype, "tx", void 0);
exports.CommentCreateManyVideoInput = CommentCreateManyVideoInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CommentCreateManyVideoInput", {})
], CommentCreateManyVideoInput);
