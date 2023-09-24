"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateLike = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const LikeCountAggregate_1 = require("../outputs/LikeCountAggregate");
const LikeMaxAggregate_1 = require("../outputs/LikeMaxAggregate");
const LikeMinAggregate_1 = require("../outputs/LikeMinAggregate");
let AggregateLike = exports.AggregateLike = class AggregateLike {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LikeCountAggregate_1.LikeCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", LikeCountAggregate_1.LikeCountAggregate)
], AggregateLike.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LikeMinAggregate_1.LikeMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", LikeMinAggregate_1.LikeMinAggregate)
], AggregateLike.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LikeMaxAggregate_1.LikeMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", LikeMaxAggregate_1.LikeMaxAggregate)
], AggregateLike.prototype, "_max", void 0);
exports.AggregateLike = AggregateLike = tslib_1.__decorate([
    TypeGraphQL.ObjectType("AggregateLike", {})
], AggregateLike);
