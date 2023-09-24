"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sync = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let Sync = exports.Sync = class Sync {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], Sync.prototype, "chainId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], Sync.prototype, "latestBlockNumber", void 0);
exports.Sync = Sync = tslib_1.__decorate([
    TypeGraphQL.ObjectType("Sync", {})
], Sync);
