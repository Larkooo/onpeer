"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateSyncArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SyncOrderByWithRelationInput_1 = require("../../../inputs/SyncOrderByWithRelationInput");
const SyncWhereInput_1 = require("../../../inputs/SyncWhereInput");
const SyncWhereUniqueInput_1 = require("../../../inputs/SyncWhereUniqueInput");
let AggregateSyncArgs = exports.AggregateSyncArgs = class AggregateSyncArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SyncWhereInput_1.SyncWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SyncWhereInput_1.SyncWhereInput)
], AggregateSyncArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SyncOrderByWithRelationInput_1.SyncOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AggregateSyncArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SyncWhereUniqueInput_1.SyncWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SyncWhereUniqueInput_1.SyncWhereUniqueInput)
], AggregateSyncArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateSyncArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateSyncArgs.prototype, "skip", void 0);
exports.AggregateSyncArgs = AggregateSyncArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], AggregateSyncArgs);
