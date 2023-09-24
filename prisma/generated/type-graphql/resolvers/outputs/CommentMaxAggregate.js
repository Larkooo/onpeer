"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentMaxAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let CommentMaxAggregate = exports.CommentMaxAggregate = class CommentMaxAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CommentMaxAggregate.prototype, "text", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CommentMaxAggregate.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CommentMaxAggregate.prototype, "videoId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CommentMaxAggregate.prototype, "tx", void 0);
exports.CommentMaxAggregate = CommentMaxAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("CommentMaxAggregate", {})
], CommentMaxAggregate);
