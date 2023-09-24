"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstLikeResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindFirstLikeArgs_1 = require("./args/FindFirstLikeArgs");
const Like_1 = require("../../../models/Like");
const helpers_1 = require("../../../helpers");
let FindFirstLikeResolver = exports.FindFirstLikeResolver = class FindFirstLikeResolver {
    async findFirstLike(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).like.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
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
], FindFirstLikeResolver.prototype, "findFirstLike", null);
exports.FindFirstLikeResolver = FindFirstLikeResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Like_1.Like)
], FindFirstLikeResolver);
