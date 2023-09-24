"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateLikeResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AggregateLikeArgs_1 = require("./args/AggregateLikeArgs");
const Like_1 = require("../../../models/Like");
const AggregateLike_1 = require("../../outputs/AggregateLike");
const helpers_1 = require("../../../helpers");
let AggregateLikeResolver = exports.AggregateLikeResolver = class AggregateLikeResolver {
    async aggregateLike(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).like.aggregate({
            ...args,
            ...(0, helpers_1.transformInfoIntoPrismaArgs)(info),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateLike_1.AggregateLike, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateLikeArgs_1.AggregateLikeArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AggregateLikeResolver.prototype, "aggregateLike", null);
exports.AggregateLikeResolver = AggregateLikeResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Like_1.Like)
], AggregateLikeResolver);
