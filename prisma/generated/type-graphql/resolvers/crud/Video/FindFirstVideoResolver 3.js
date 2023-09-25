"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstVideoResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindFirstVideoArgs_1 = require("./args/FindFirstVideoArgs");
const Video_1 = require("../../../models/Video");
const helpers_1 = require("../../../helpers");
let FindFirstVideoResolver = exports.FindFirstVideoResolver = class FindFirstVideoResolver {
    async findFirstVideo(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).video.findFirst({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstVideoArgs_1.FindFirstVideoArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindFirstVideoResolver.prototype, "findFirstVideo", null);
exports.FindFirstVideoResolver = FindFirstVideoResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Video_1.Video)
], FindFirstVideoResolver);
