"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SyncMinAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let SyncMinAggregate = exports.SyncMinAggregate = class SyncMinAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], SyncMinAggregate.prototype, "chainId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], SyncMinAggregate.prototype, "latestBlockNumber", void 0);
exports.SyncMinAggregate = SyncMinAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("SyncMinAggregate", {})
], SyncMinAggregate);
