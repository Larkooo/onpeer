"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VideoCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AggregateVideoArgs_1 = require("./args/AggregateVideoArgs");
const CreateManyVideoArgs_1 = require("./args/CreateManyVideoArgs");
const CreateOneVideoArgs_1 = require("./args/CreateOneVideoArgs");
const DeleteManyVideoArgs_1 = require("./args/DeleteManyVideoArgs");
const DeleteOneVideoArgs_1 = require("./args/DeleteOneVideoArgs");
const FindFirstVideoArgs_1 = require("./args/FindFirstVideoArgs");
const FindFirstVideoOrThrowArgs_1 = require("./args/FindFirstVideoOrThrowArgs");
const FindManyVideoArgs_1 = require("./args/FindManyVideoArgs");
const FindUniqueVideoArgs_1 = require("./args/FindUniqueVideoArgs");
const FindUniqueVideoOrThrowArgs_1 = require("./args/FindUniqueVideoOrThrowArgs");
const GroupByVideoArgs_1 = require("./args/GroupByVideoArgs");
const UpdateManyVideoArgs_1 = require("./args/UpdateManyVideoArgs");
const UpdateOneVideoArgs_1 = require("./args/UpdateOneVideoArgs");
const UpsertOneVideoArgs_1 = require("./args/UpsertOneVideoArgs");
const helpers_1 = require("../../../helpers");
const Video_1 = require("../../../models/Video");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateVideo_1 = require("../../outputs/AggregateVideo");
const VideoGroupBy_1 = require("../../outputs/VideoGroupBy");
let VideoCrudResolver = exports.VideoCrudResolver = class VideoCrudResolver {
    async aggregateVideo(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).video.aggregate({
            ...args,
            ...(0, helpers_1.transformInfoIntoPrismaArgs)(info),
        });
    }
    async createManyVideo(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).video.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createOneVideo(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).video.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManyVideo(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).video.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteOneVideo(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).video.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstVideo(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).video.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstVideoOrThrow(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).video.findFirstOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async videos(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).video.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async video(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).video.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async getVideo(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).video.findUniqueOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async groupByVideo(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).video.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
    async updateManyVideo(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).video.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateOneVideo(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).video.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertOneVideo(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).video.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateVideo_1.AggregateVideo, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateVideoArgs_1.AggregateVideoArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], VideoCrudResolver.prototype, "aggregateVideo", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyVideoArgs_1.CreateManyVideoArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], VideoCrudResolver.prototype, "createManyVideo", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Video_1.Video, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateOneVideoArgs_1.CreateOneVideoArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], VideoCrudResolver.prototype, "createOneVideo", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyVideoArgs_1.DeleteManyVideoArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], VideoCrudResolver.prototype, "deleteManyVideo", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Video_1.Video, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteOneVideoArgs_1.DeleteOneVideoArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], VideoCrudResolver.prototype, "deleteOneVideo", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Video_1.Video, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstVideoArgs_1.FindFirstVideoArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], VideoCrudResolver.prototype, "findFirstVideo", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Video_1.Video, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstVideoOrThrowArgs_1.FindFirstVideoOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], VideoCrudResolver.prototype, "findFirstVideoOrThrow", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Video_1.Video], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyVideoArgs_1.FindManyVideoArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], VideoCrudResolver.prototype, "videos", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Video_1.Video, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueVideoArgs_1.FindUniqueVideoArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], VideoCrudResolver.prototype, "video", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Video_1.Video, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueVideoOrThrowArgs_1.FindUniqueVideoOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], VideoCrudResolver.prototype, "getVideo", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [VideoGroupBy_1.VideoGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByVideoArgs_1.GroupByVideoArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], VideoCrudResolver.prototype, "groupByVideo", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyVideoArgs_1.UpdateManyVideoArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], VideoCrudResolver.prototype, "updateManyVideo", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Video_1.Video, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateOneVideoArgs_1.UpdateOneVideoArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], VideoCrudResolver.prototype, "updateOneVideo", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Video_1.Video, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertOneVideoArgs_1.UpsertOneVideoArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], VideoCrudResolver.prototype, "upsertOneVideo", null);
exports.VideoCrudResolver = VideoCrudResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Video_1.Video)
], VideoCrudResolver);
