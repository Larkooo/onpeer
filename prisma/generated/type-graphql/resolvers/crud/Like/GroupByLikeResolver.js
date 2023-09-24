"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByLikeResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GroupByLikeArgs_1 = require("./args/GroupByLikeArgs");
const Like_1 = require("../../../models/Like");
const LikeGroupBy_1 = require("../../outputs/LikeGroupBy");
const helpers_1 = require("../../../helpers");
let GroupByLikeResolver = exports.GroupByLikeResolver = class GroupByLikeResolver {
    async groupByLike(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).like.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [LikeGroupBy_1.LikeGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByLikeArgs_1.GroupByLikeArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], GroupByLikeResolver.prototype, "groupByLike", null);
exports.GroupByLikeResolver = GroupByLikeResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Like_1.Like)
], GroupByLikeResolver);
