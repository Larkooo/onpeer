"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SyncWhereUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const IntFilter_1 = require("../inputs/IntFilter");
const SyncWhereInput_1 = require("../inputs/SyncWhereInput");
let SyncWhereUniqueInput = exports.SyncWhereUniqueInput = class SyncWhereUniqueInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], SyncWhereUniqueInput.prototype, "chainId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SyncWhereInput_1.SyncWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], SyncWhereUniqueInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SyncWhereInput_1.SyncWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], SyncWhereUniqueInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SyncWhereInput_1.SyncWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], SyncWhereUniqueInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFilter_1.IntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFilter_1.IntFilter)
], SyncWhereUniqueInput.prototype, "latestBlockNumber", void 0);
exports.SyncWhereUniqueInput = SyncWhereUniqueInput = tslib_1.__decorate([
    TypeGraphQL.InputType("SyncWhereUniqueInput", {})
], SyncWhereUniqueInput);
