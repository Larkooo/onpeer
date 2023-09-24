"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LikeCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AggregateLikeArgs_1 = require("./args/AggregateLikeArgs");
const CreateManyLikeArgs_1 = require("./args/CreateManyLikeArgs");
const CreateOneLikeArgs_1 = require("./args/CreateOneLikeArgs");
const DeleteManyLikeArgs_1 = require("./args/DeleteManyLikeArgs");
const DeleteOneLikeArgs_1 = require("./args/DeleteOneLikeArgs");
const FindFirstLikeArgs_1 = require("./args/FindFirstLikeArgs");
const FindFirstLikeOrThrowArgs_1 = require("./args/FindFirstLikeOrThrowArgs");
const FindManyLikeArgs_1 = require("./args/FindManyLikeArgs");
const FindUniqueLikeArgs_1 = require("./args/FindUniqueLikeArgs");
const FindUniqueLikeOrThrowArgs_1 = require("./args/FindUniqueLikeOrThrowArgs");
const GroupByLikeArgs_1 = require("./args/GroupByLikeArgs");
const UpdateManyLikeArgs_1 = require("./args/UpdateManyLikeArgs");
const UpdateOneLikeArgs_1 = require("./args/UpdateOneLikeArgs");
const UpsertOneLikeArgs_1 = require("./args/UpsertOneLikeArgs");
const helpers_1 = require("../../../helpers");
const Like_1 = require("../../../models/Like");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateLike_1 = require("../../outputs/AggregateLike");
const LikeGroupBy_1 = require("../../outputs/LikeGroupBy");
let LikeCrudResolver = exports.LikeCrudResolver = class LikeCrudResolver {
    async aggregateLike(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).like.aggregate({
            ...args,
            ...(0, helpers_1.transformInfoIntoPrismaArgs)(info),
        });
    }
    async createManyLike(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).like.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createOneLike(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).like.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManyLike(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).like.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteOneLike(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).like.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstLike(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).like.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstLikeOrThrow(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).like.findFirstOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async likes(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).like.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async like(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).like.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async getLike(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).like.findUniqueOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async groupByLike(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).like.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
    async updateManyLike(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).like.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateOneLike(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).like.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertOneLike(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).like.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateLike_1.AggregateLike, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateLikeArgs_1.AggregateLikeArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], LikeCrudResolver.prototype, "aggregateLike", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyLikeArgs_1.CreateManyLikeArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], LikeCrudResolver.prototype, "createManyLike", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Like_1.Like, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateOneLikeArgs_1.CreateOneLikeArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], LikeCrudResolver.prototype, "createOneLike", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyLikeArgs_1.DeleteManyLikeArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], LikeCrudResolver.prototype, "deleteManyLike", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Like_1.Like, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteOneLikeArgs_1.DeleteOneLikeArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], LikeCrudResolver.prototype, "deleteOneLike", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Like_1.Like, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstLikeArgs_1.FindFirstLikeArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], LikeCrudResolver.prototype, "findFirstLike", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Like_1.Like, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstLikeOrThrowArgs_1.FindFirstLikeOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], LikeCrudResolver.prototype, "findFirstLikeOrThrow", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Like_1.Like], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyLikeArgs_1.FindManyLikeArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], LikeCrudResolver.prototype, "likes", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Like_1.Like, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueLikeArgs_1.FindUniqueLikeArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], LikeCrudResolver.prototype, "like", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Like_1.Like, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueLikeOrThrowArgs_1.FindUniqueLikeOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], LikeCrudResolver.prototype, "getLike", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [LikeGroupBy_1.LikeGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByLikeArgs_1.GroupByLikeArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], LikeCrudResolver.prototype, "groupByLike", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyLikeArgs_1.UpdateManyLikeArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], LikeCrudResolver.prototype, "updateManyLike", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Like_1.Like, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateOneLikeArgs_1.UpdateOneLikeArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], LikeCrudResolver.prototype, "updateOneLike", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Like_1.Like, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertOneLikeArgs_1.UpsertOneLikeArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], LikeCrudResolver.prototype, "upsertOneLike", null);
exports.LikeCrudResolver = LikeCrudResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Like_1.Like)
], LikeCrudResolver);
