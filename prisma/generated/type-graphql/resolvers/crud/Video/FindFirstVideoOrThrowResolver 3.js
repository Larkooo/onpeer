"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstVideoOrThrowResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindFirstVideoOrThrowArgs_1 = require("./args/FindFirstVideoOrThrowArgs");
const Video_1 = require("../../../models/Video");
const helpers_1 = require("../../../helpers");
let FindFirstVideoOrThrowResolver = exports.FindFirstVideoOrThrowResolver = class FindFirstVideoOrThrowResolver {
    async findFirstVideoOrThrow(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).video.findFirstOrThrow({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstVideoOrThrowArgs_1.FindFirstVideoOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindFirstVideoOrThrowResolver.prototype, "findFirstVideoOrThrow", null);
exports.FindFirstVideoOrThrowResolver = FindFirstVideoOrThrowResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Video_1.Video)
], FindFirstVideoOrThrowResolver);
