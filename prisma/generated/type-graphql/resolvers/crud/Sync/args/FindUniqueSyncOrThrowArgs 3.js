"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueSyncOrThrowArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SyncWhereUniqueInput_1 = require("../../../inputs/SyncWhereUniqueInput");
let FindUniqueSyncOrThrowArgs = exports.FindUniqueSyncOrThrowArgs = class FindUniqueSyncOrThrowArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SyncWhereUniqueInput_1.SyncWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", SyncWhereUniqueInput_1.SyncWhereUniqueInput)
], FindUniqueSyncOrThrowArgs.prototype, "where", void 0);
exports.FindUniqueSyncOrThrowArgs = FindUniqueSyncOrThrowArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindUniqueSyncOrThrowArgs);
