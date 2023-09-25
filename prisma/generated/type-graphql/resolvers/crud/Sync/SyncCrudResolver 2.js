"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SyncCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AggregateSyncArgs_1 = require("./args/AggregateSyncArgs");
const CreateManySyncArgs_1 = require("./args/CreateManySyncArgs");
const CreateOneSyncArgs_1 = require("./args/CreateOneSyncArgs");
const DeleteManySyncArgs_1 = require("./args/DeleteManySyncArgs");
const DeleteOneSyncArgs_1 = require("./args/DeleteOneSyncArgs");
const FindFirstSyncArgs_1 = require("./args/FindFirstSyncArgs");
const FindFirstSyncOrThrowArgs_1 = require("./args/FindFirstSyncOrThrowArgs");
const FindManySyncArgs_1 = require("./args/FindManySyncArgs");
const FindUniqueSyncArgs_1 = require("./args/FindUniqueSyncArgs");
const FindUniqueSyncOrThrowArgs_1 = require("./args/FindUniqueSyncOrThrowArgs");
const GroupBySyncArgs_1 = require("./args/GroupBySyncArgs");
const UpdateManySyncArgs_1 = require("./args/UpdateManySyncArgs");
const UpdateOneSyncArgs_1 = require("./args/UpdateOneSyncArgs");
const UpsertOneSyncArgs_1 = require("./args/UpsertOneSyncArgs");
const helpers_1 = require("../../../helpers");
const Sync_1 = require("../../../models/Sync");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateSync_1 = require("../../outputs/AggregateSync");
const SyncGroupBy_1 = require("../../outputs/SyncGroupBy");
let SyncCrudResolver = exports.SyncCrudResolver = class SyncCrudResolver {
    async aggregateSync(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).sync.aggregate({
            ...args,
            ...(0, helpers_1.transformInfoIntoPrismaArgs)(info),
        });
    }
    async createManySync(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).sync.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createOneSync(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).sync.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManySync(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).sync.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteOneSync(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).sync.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstSync(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).sync.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstSyncOrThrow(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).sync.findFirstOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async syncs(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).sync.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async sync(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).sync.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async getSync(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).sync.findUniqueOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async groupBySync(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).sync.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
    async updateManySync(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).sync.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateOneSync(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).sync.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertOneSync(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).sync.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateSync_1.AggregateSync, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateSyncArgs_1.AggregateSyncArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], SyncCrudResolver.prototype, "aggregateSync", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManySyncArgs_1.CreateManySyncArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], SyncCrudResolver.prototype, "createManySync", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Sync_1.Sync, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateOneSyncArgs_1.CreateOneSyncArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], SyncCrudResolver.prototype, "createOneSync", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManySyncArgs_1.DeleteManySyncArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], SyncCrudResolver.prototype, "deleteManySync", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Sync_1.Sync, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteOneSyncArgs_1.DeleteOneSyncArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], SyncCrudResolver.prototype, "deleteOneSync", null);
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
], SyncCrudResolver.prototype, "findFirstSync", null);
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
], SyncCrudResolver.prototype, "findFirstSyncOrThrow", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Sync_1.Sync], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManySyncArgs_1.FindManySyncArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], SyncCrudResolver.prototype, "syncs", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Sync_1.Sync, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueSyncArgs_1.FindUniqueSyncArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], SyncCrudResolver.prototype, "sync", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Sync_1.Sync, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueSyncOrThrowArgs_1.FindUniqueSyncOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], SyncCrudResolver.prototype, "getSync", null);
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
], SyncCrudResolver.prototype, "groupBySync", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManySyncArgs_1.UpdateManySyncArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], SyncCrudResolver.prototype, "updateManySync", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Sync_1.Sync, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateOneSyncArgs_1.UpdateOneSyncArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], SyncCrudResolver.prototype, "updateOneSync", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Sync_1.Sync, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertOneSyncArgs_1.UpsertOneSyncArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], SyncCrudResolver.prototype, "upsertOneSync", null);
exports.SyncCrudResolver = SyncCrudResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Sync_1.Sync)
], SyncCrudResolver);
