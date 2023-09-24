"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOneLikeResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UpdateOneLikeArgs_1 = require("./args/UpdateOneLikeArgs");
const Like_1 = require("../../../models/Like");
const helpers_1 = require("../../../helpers");
let UpdateOneLikeResolver = exports.UpdateOneLikeResolver = class UpdateOneLikeResolver {
    async updateOneLike(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).like.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Like_1.Like, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateOneLikeArgs_1.UpdateOneLikeArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpdateOneLikeResolver.prototype, "updateOneLike", null);
exports.UpdateOneLikeResolver = UpdateOneLikeResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Like_1.Like)
], UpdateOneLikeResolver);
