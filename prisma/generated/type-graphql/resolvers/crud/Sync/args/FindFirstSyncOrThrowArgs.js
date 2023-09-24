"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstSyncOrThrowArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SyncOrderByWithRelationInput_1 = require("../../../inputs/SyncOrderByWithRelationInput");
const SyncWhereInput_1 = require("../../../inputs/SyncWhereInput");
const SyncWhereUniqueInput_1 = require("../../../inputs/SyncWhereUniqueInput");
const SyncScalarFieldEnum_1 = require("../../../../enums/SyncScalarFieldEnum");
let FindFirstSyncOrThrowArgs = exports.FindFirstSyncOrThrowArgs = class FindFirstSyncOrThrowArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SyncWhereInput_1.SyncWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SyncWhereInput_1.SyncWhereInput)
], FindFirstSyncOrThrowArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SyncOrderByWithRelationInput_1.SyncOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstSyncOrThrowArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SyncWhereUniqueInput_1.SyncWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SyncWhereUniqueInput_1.SyncWhereUniqueInput)
], FindFirstSyncOrThrowArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstSyncOrThrowArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstSyncOrThrowArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SyncScalarFieldEnum_1.SyncScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstSyncOrThrowArgs.prototype, "distinct", void 0);
exports.FindFirstSyncOrThrowArgs = FindFirstSyncOrThrowArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindFirstSyncOrThrowArgs);
