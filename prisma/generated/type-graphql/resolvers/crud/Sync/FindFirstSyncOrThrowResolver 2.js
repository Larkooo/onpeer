"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstSyncOrThrowResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindFirstSyncOrThrowArgs_1 = require("./args/FindFirstSyncOrThrowArgs");
const Sync_1 = require("../../../models/Sync");
const helpers_1 = require("../../../helpers");
let FindFirstSyncOrThrowResolver = exports.FindFirstSyncOrThrowResolver = class FindFirstSyncOrThrowResolver {
    async findFirstSyncOrThrow(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).sync.findFirstOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Sync_1.Sync, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstSyncOrThrowArgs_1.FindFirstSyncOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindFirstSyncOrThrowResolver.prototype, "findFirstSyncOrThrow", null);
exports.FindFirstSyncOrThrowResolver = FindFirstSyncOrThrowResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Sync_1.Sync)
], FindFirstSyncOrThrowResolver);
