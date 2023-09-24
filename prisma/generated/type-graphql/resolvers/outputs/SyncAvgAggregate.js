"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SyncAvgAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let SyncAvgAggregate = exports.SyncAvgAggregate = class SyncAvgAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], SyncAvgAggregate.prototype, "chainId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], SyncAvgAggregate.prototype, "latestBlockNumber", void 0);
exports.SyncAvgAggregate = SyncAvgAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("SyncAvgAggregate", {})
], SyncAvgAggregate);
