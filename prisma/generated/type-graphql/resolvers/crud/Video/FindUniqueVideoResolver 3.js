"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueVideoResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindUniqueVideoArgs_1 = require("./args/FindUniqueVideoArgs");
const Video_1 = require("../../../models/Video");
const helpers_1 = require("../../../helpers");
let FindUniqueVideoResolver = exports.FindUniqueVideoResolver = class FindUniqueVideoResolver {
    async video(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).video.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
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
], FindUniqueVideoResolver.prototype, "video", null);
exports.FindUniqueVideoResolver = FindUniqueVideoResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Video_1.Video)
], FindUniqueVideoResolver);
