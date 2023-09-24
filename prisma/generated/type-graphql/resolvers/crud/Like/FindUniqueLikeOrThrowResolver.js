"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueLikeOrThrowResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindUniqueLikeOrThrowArgs_1 = require("./args/FindUniqueLikeOrThrowArgs");
const Like_1 = require("../../../models/Like");
const helpers_1 = require("../../../helpers");
let FindUniqueLikeOrThrowResolver = exports.FindUniqueLikeOrThrowResolver = class FindUniqueLikeOrThrowResolver {
    async getLike(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).like.findUniqueOrThrow({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueLikeOrThrowArgs_1.FindUniqueLikeOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindUniqueLikeOrThrowResolver.prototype, "getLike", null);
exports.FindUniqueLikeOrThrowResolver = FindUniqueLikeOrThrowResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Like_1.Like)
], FindUniqueLikeOrThrowResolver);
