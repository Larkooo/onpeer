"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentCreateManyInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let CommentCreateManyInput = exports.CommentCreateManyInput = class CommentCreateManyInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], CommentCreateManyInput.prototype, "text", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], CommentCreateManyInput.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], CommentCreateManyInput.prototype, "videoId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], CommentCreateManyInput.prototype, "tx", void 0);
exports.CommentCreateManyInput = CommentCreateManyInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CommentCreateManyInput", {})
], CommentCreateManyInput);
