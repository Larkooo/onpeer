"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LikeGroupBy = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const LikeCountAggregate_1 = require("../outputs/LikeCountAggregate");
const LikeMaxAggregate_1 = require("../outputs/LikeMaxAggregate");
const LikeMinAggregate_1 = require("../outputs/LikeMinAggregate");
let LikeGroupBy = exports.LikeGroupBy = class LikeGroupBy {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], LikeGroupBy.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], LikeGroupBy.prototype, "videoId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], LikeGroupBy.prototype, "tx", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LikeCountAggregate_1.LikeCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", LikeCountAggregate_1.LikeCountAggregate)
], LikeGroupBy.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LikeMinAggregate_1.LikeMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", LikeMinAggregate_1.LikeMinAggregate)
], LikeGroupBy.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LikeMaxAggregate_1.LikeMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", LikeMaxAggregate_1.LikeMaxAggregate)
], LikeGroupBy.prototype, "_max", void 0);
exports.LikeGroupBy = LikeGroupBy = tslib_1.__decorate([
    TypeGraphQL.ObjectType("LikeGroupBy", {})
], LikeGroupBy);
