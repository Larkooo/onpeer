"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AggregateCommentArgs_1 = require("./args/AggregateCommentArgs");
const CreateManyCommentArgs_1 = require("./args/CreateManyCommentArgs");
const CreateOneCommentArgs_1 = require("./args/CreateOneCommentArgs");
const DeleteManyCommentArgs_1 = require("./args/DeleteManyCommentArgs");
const DeleteOneCommentArgs_1 = require("./args/DeleteOneCommentArgs");
const FindFirstCommentArgs_1 = require("./args/FindFirstCommentArgs");
const FindFirstCommentOrThrowArgs_1 = require("./args/FindFirstCommentOrThrowArgs");
const FindManyCommentArgs_1 = require("./args/FindManyCommentArgs");
const FindUniqueCommentArgs_1 = require("./args/FindUniqueCommentArgs");
const FindUniqueCommentOrThrowArgs_1 = require("./args/FindUniqueCommentOrThrowArgs");
const GroupByCommentArgs_1 = require("./args/GroupByCommentArgs");
const UpdateManyCommentArgs_1 = require("./args/UpdateManyCommentArgs");
const UpdateOneCommentArgs_1 = require("./args/UpdateOneCommentArgs");
const UpsertOneCommentArgs_1 = require("./args/UpsertOneCommentArgs");
const helpers_1 = require("../../../helpers");
const Comment_1 = require("../../../models/Comment");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateComment_1 = require("../../outputs/AggregateComment");
const CommentGroupBy_1 = require("../../outputs/CommentGroupBy");
let CommentCrudResolver = exports.CommentCrudResolver = class CommentCrudResolver {
    async aggregateComment(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).comment.aggregate({
            ...args,
            ...(0, helpers_1.transformInfoIntoPrismaArgs)(info),
        });
    }
    async createManyComment(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).comment.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createOneComment(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).comment.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManyComment(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).comment.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteOneComment(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).comment.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstComment(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).comment.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstCommentOrThrow(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).comment.findFirstOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async comments(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).comment.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async comment(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).comment.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async getComment(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).comment.findUniqueOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async groupByComment(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).comment.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
    async updateManyComment(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).comment.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateOneComment(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).comment.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertOneComment(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).comment.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateComment_1.AggregateComment, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateCommentArgs_1.AggregateCommentArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CommentCrudResolver.prototype, "aggregateComment", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyCommentArgs_1.CreateManyCommentArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CommentCrudResolver.prototype, "createManyComment", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Comment_1.Comment, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateOneCommentArgs_1.CreateOneCommentArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CommentCrudResolver.prototype, "createOneComment", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyCommentArgs_1.DeleteManyCommentArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CommentCrudResolver.prototype, "deleteManyComment", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Comment_1.Comment, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteOneCommentArgs_1.DeleteOneCommentArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CommentCrudResolver.prototype, "deleteOneComment", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Comment_1.Comment, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstCommentArgs_1.FindFirstCommentArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CommentCrudResolver.prototype, "findFirstComment", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Comment_1.Comment, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstCommentOrThrowArgs_1.FindFirstCommentOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CommentCrudResolver.prototype, "findFirstCommentOrThrow", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Comment_1.Comment], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyCommentArgs_1.FindManyCommentArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CommentCrudResolver.prototype, "comments", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Comment_1.Comment, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueCommentArgs_1.FindUniqueCommentArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CommentCrudResolver.prototype, "comment", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Comment_1.Comment, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueCommentOrThrowArgs_1.FindUniqueCommentOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CommentCrudResolver.prototype, "getComment", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [CommentGroupBy_1.CommentGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByCommentArgs_1.GroupByCommentArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CommentCrudResolver.prototype, "groupByComment", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyCommentArgs_1.UpdateManyCommentArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CommentCrudResolver.prototype, "updateManyComment", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Comment_1.Comment, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateOneCommentArgs_1.UpdateOneCommentArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CommentCrudResolver.prototype, "updateOneComment", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Comment_1.Comment, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertOneCommentArgs_1.UpsertOneCommentArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CommentCrudResolver.prototype, "upsertOneComment", null);
exports.CommentCrudResolver = CommentCrudResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Comment_1.Comment)
], CommentCrudResolver);
