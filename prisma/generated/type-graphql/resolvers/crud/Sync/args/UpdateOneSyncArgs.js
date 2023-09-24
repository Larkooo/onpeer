"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOneSyncArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SyncUpdateInput_1 = require("../../../inputs/SyncUpdateInput");
const SyncWhereUniqueInput_1 = require("../../../inputs/SyncWhereUniqueInput");
let UpdateOneSyncArgs = exports.UpdateOneSyncArgs = class UpdateOneSyncArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SyncUpdateInput_1.SyncUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", SyncUpdateInput_1.SyncUpdateInput)
], UpdateOneSyncArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SyncWhereUniqueInput_1.SyncWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", SyncWhereUniqueInput_1.SyncWhereUniqueInput)
], UpdateOneSyncArgs.prototype, "where", void 0);
exports.UpdateOneSyncArgs = UpdateOneSyncArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateOneSyncArgs);
