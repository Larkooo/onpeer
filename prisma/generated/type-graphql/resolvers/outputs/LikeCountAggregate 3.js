"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LikeCountAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let LikeCountAggregate = exports.LikeCountAggregate = class LikeCountAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], LikeCountAggregate.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], LikeCountAggregate.prototype, "videoId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], LikeCountAggregate.prototype, "tx", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], LikeCountAggregate.prototype, "_all", void 0);
exports.LikeCountAggregate = LikeCountAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("LikeCountAggregate", {})
], LikeCountAggregate);
