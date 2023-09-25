"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SyncCreateManyInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let SyncCreateManyInput = exports.SyncCreateManyInput = class SyncCreateManyInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], SyncCreateManyInput.prototype, "chainId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], SyncCreateManyInput.prototype, "latestBlockNumber", void 0);
exports.SyncCreateManyInput = SyncCreateManyInput = tslib_1.__decorate([
    TypeGraphQL.InputType("SyncCreateManyInput", {})
], SyncCreateManyInput);
