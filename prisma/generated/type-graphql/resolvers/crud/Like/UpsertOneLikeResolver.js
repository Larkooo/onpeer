"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOneLikeResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UpsertOneLikeArgs_1 = require("./args/UpsertOneLikeArgs");
const Like_1 = require("../../../models/Like");
const helpers_1 = require("../../../helpers");
let UpsertOneLikeResolver = exports.UpsertOneLikeResolver = class UpsertOneLikeResolver {
    async upsertOneLike(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).like.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Like_1.Like, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertOneLikeArgs_1.UpsertOneLikeArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpsertOneLikeResolver.prototype, "upsertOneLike", null);
exports.UpsertOneLikeResolver = UpsertOneLikeResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Like_1.Like)
], UpsertOneLikeResolver);
