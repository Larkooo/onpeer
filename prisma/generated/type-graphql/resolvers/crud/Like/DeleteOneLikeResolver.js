"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteOneLikeResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DeleteOneLikeArgs_1 = require("./args/DeleteOneLikeArgs");
const Like_1 = require("../../../models/Like");
const helpers_1 = require("../../../helpers");
let DeleteOneLikeResolver = exports.DeleteOneLikeResolver = class DeleteOneLikeResolver {
    async deleteOneLike(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).like.delete({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteOneLikeArgs_1.DeleteOneLikeArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DeleteOneLikeResolver.prototype, "deleteOneLike", null);
exports.DeleteOneLikeResolver = DeleteOneLikeResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Like_1.Like)
], DeleteOneLikeResolver);
