"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueSyncArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SyncWhereUniqueInput_1 = require("../../../inputs/SyncWhereUniqueInput");
let FindUniqueSyncArgs = exports.FindUniqueSyncArgs = class FindUniqueSyncArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SyncWhereUniqueInput_1.SyncWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", SyncWhereUniqueInput_1.SyncWhereUniqueInput)
], FindUniqueSyncArgs.prototype, "where", void 0);
exports.FindUniqueSyncArgs = FindUniqueSyncArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindUniqueSyncArgs);
