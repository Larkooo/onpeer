"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteOneSyncArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SyncWhereUniqueInput_1 = require("../../../inputs/SyncWhereUniqueInput");
let DeleteOneSyncArgs = exports.DeleteOneSyncArgs = class DeleteOneSyncArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SyncWhereUniqueInput_1.SyncWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", SyncWhereUniqueInput_1.SyncWhereUniqueInput)
], DeleteOneSyncArgs.prototype, "where", void 0);
exports.DeleteOneSyncArgs = DeleteOneSyncArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteOneSyncArgs);
