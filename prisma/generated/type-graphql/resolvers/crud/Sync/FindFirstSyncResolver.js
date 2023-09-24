"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstSyncResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindFirstSyncArgs_1 = require("./args/FindFirstSyncArgs");
const Sync_1 = require("../../../models/Sync");
const helpers_1 = require("../../../helpers");
let FindFirstSyncResolver = exports.FindFirstSyncResolver = class FindFirstSyncResolver {
    async findFirstSync(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).sync.findFirst({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstSyncArgs_1.FindFirstSyncArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindFirstSyncResolver.prototype, "findFirstSync", null);
exports.FindFirstSyncResolver = FindFirstSyncResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Sync_1.Sync)
], FindFirstSyncResolver);
