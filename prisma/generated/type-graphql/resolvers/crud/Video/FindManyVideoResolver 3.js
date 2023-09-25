"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindManyVideoResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindManyVideoArgs_1 = require("./args/FindManyVideoArgs");
const Video_1 = require("../../../models/Video");
const helpers_1 = require("../../../helpers");
let FindManyVideoResolver = exports.FindManyVideoResolver = class FindManyVideoResolver {
    async videos(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).video.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
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
], FindManyVideoResolver.prototype, "videos", null);
exports.FindManyVideoResolver = FindManyVideoResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Video_1.Video)
], FindManyVideoResolver);
