"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyLikeResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CreateManyLikeArgs_1 = require("./args/CreateManyLikeArgs");
const Like_1 = require("../../../models/Like");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let CreateManyLikeResolver = exports.CreateManyLikeResolver = class CreateManyLikeResolver {
    async createManyLike(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).like.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyLikeArgs_1.CreateManyLikeArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CreateManyLikeResolver.prototype, "createManyLike", null);
exports.CreateManyLikeResolver = CreateManyLikeResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Like_1.Like)
], CreateManyLikeResolver);
