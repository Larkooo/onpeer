"use strict";
var SyncWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.SyncWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const IntFilter_1 = require("../inputs/IntFilter");
let SyncWhereInput = exports.SyncWhereInput = SyncWhereInput_1 = class SyncWhereInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SyncWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], SyncWhereInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SyncWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], SyncWhereInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SyncWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], SyncWhereInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFilter_1.IntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFilter_1.IntFilter)
], SyncWhereInput.prototype, "chainId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFilter_1.IntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFilter_1.IntFilter)
], SyncWhereInput.prototype, "latestBlockNumber", void 0);
exports.SyncWhereInput = SyncWhereInput = SyncWhereInput_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("SyncWhereInput", {})
], SyncWhereInput);
