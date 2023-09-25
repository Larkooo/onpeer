"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupBySyncResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GroupBySyncArgs_1 = require("./args/GroupBySyncArgs");
const Sync_1 = require("../../../models/Sync");
const SyncGroupBy_1 = require("../../outputs/SyncGroupBy");
const helpers_1 = require("../../../helpers");
let GroupBySyncResolver = exports.GroupBySyncResolver = class GroupBySyncResolver {
    async groupBySync(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).sync.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [SyncGroupBy_1.SyncGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupBySyncArgs_1.GroupBySyncArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], GroupBySyncResolver.prototype, "groupBySync", null);
exports.GroupBySyncResolver = GroupBySyncResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Sync_1.Sync)
], GroupBySyncResolver);
