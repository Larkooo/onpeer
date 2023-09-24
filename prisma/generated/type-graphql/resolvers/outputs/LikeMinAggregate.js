"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LikeMinAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let LikeMinAggregate = exports.LikeMinAggregate = class LikeMinAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], LikeMinAggregate.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], LikeMinAggregate.prototype, "videoId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], LikeMinAggregate.prototype, "tx", void 0);
exports.LikeMinAggregate = LikeMinAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("LikeMinAggregate", {})
], LikeMinAggregate);
