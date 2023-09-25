"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SyncOrderByWithRelationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let SyncOrderByWithRelationInput = exports.SyncOrderByWithRelationInput = class SyncOrderByWithRelationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SyncOrderByWithRelationInput.prototype, "chainId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SyncOrderByWithRelationInput.prototype, "latestBlockNumber", void 0);
exports.SyncOrderByWithRelationInput = SyncOrderByWithRelationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("SyncOrderByWithRelationInput", {})
], SyncOrderByWithRelationInput);
