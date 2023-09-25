"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOneSyncArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SyncCreateInput_1 = require("../../../inputs/SyncCreateInput");
const SyncUpdateInput_1 = require("../../../inputs/SyncUpdateInput");
const SyncWhereUniqueInput_1 = require("../../../inputs/SyncWhereUniqueInput");
let UpsertOneSyncArgs = exports.UpsertOneSyncArgs = class UpsertOneSyncArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SyncWhereUniqueInput_1.SyncWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", SyncWhereUniqueInput_1.SyncWhereUniqueInput)
], UpsertOneSyncArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SyncCreateInput_1.SyncCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", SyncCreateInput_1.SyncCreateInput)
], UpsertOneSyncArgs.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SyncUpdateInput_1.SyncUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", SyncUpdateInput_1.SyncUpdateInput)
], UpsertOneSyncArgs.prototype, "update", void 0);
exports.UpsertOneSyncArgs = UpsertOneSyncArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpsertOneSyncArgs);
