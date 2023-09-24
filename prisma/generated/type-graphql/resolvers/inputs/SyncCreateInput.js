"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SyncCreateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let SyncCreateInput = exports.SyncCreateInput = class SyncCreateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], SyncCreateInput.prototype, "chainId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], SyncCreateInput.prototype, "latestBlockNumber", void 0);
exports.SyncCreateInput = SyncCreateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("SyncCreateInput", {})
], SyncCreateInput);
