"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LikeRelationsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Like_1 = require("../../../models/Like");
const User_1 = require("../../../models/User");
const Video_1 = require("../../../models/Video");
const helpers_1 = require("../../../helpers");
let LikeRelationsResolver = exports.LikeRelationsResolver = class LikeRelationsResolver {
    async user(like, ctx, info) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).like.findUniqueOrThrow({
            where: {
                userId_videoId: {
                    userId: like.userId,
                    videoId: like.videoId,
                },
            },
        }).user({
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async video(like, ctx, info) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).like.findUniqueOrThrow({
            where: {
                userId_videoId: {
                    userId: like.userId,
                    videoId: like.videoId,
                },
            },
        }).video({
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
    tslib_1.__metadata("design:paramtypes", [Like_1.Like, Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], LikeRelationsResolver.prototype, "user", null);
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => Video_1.Video, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Info()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Like_1.Like, Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], LikeRelationsResolver.prototype, "video", null);
exports.LikeRelationsResolver = LikeRelationsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Like_1.Like)
], LikeRelationsResolver);
