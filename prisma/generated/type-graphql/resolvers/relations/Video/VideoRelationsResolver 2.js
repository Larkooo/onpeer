"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VideoRelationsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Comment_1 = require("../../../models/Comment");
const Like_1 = require("../../../models/Like");
const User_1 = require("../../../models/User");
const Video_1 = require("../../../models/Video");
const VideoCommentsArgs_1 = require("./args/VideoCommentsArgs");
const VideoLikesArgs_1 = require("./args/VideoLikesArgs");
const helpers_1 = require("../../../helpers");
let VideoRelationsResolver = exports.VideoRelationsResolver = class VideoRelationsResolver {
    async author(video, ctx, info) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).video.findUniqueOrThrow({
            where: {
                id: video.id,
            },
        }).author({
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async comments(video, ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).video.findUniqueOrThrow({
            where: {
                id: video.id,
            },
        }).comments({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async likes(video, ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).video.findUniqueOrThrow({
            where: {
                id: video.id,
            },
        }).likes({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => User_1.User, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Info()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Video_1.Video, Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], VideoRelationsResolver.prototype, "author", null);
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => [Comment_1.Comment], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Info()),
    tslib_1.__param(3, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Video_1.Video, Object, Object, VideoCommentsArgs_1.VideoCommentsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], VideoRelationsResolver.prototype, "comments", null);
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => [Like_1.Like], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Info()),
    tslib_1.__param(3, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Video_1.Video, Object, Object, VideoLikesArgs_1.VideoLikesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], VideoRelationsResolver.prototype, "likes", null);
exports.VideoRelationsResolver = VideoRelationsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Video_1.Video)
], VideoRelationsResolver);
