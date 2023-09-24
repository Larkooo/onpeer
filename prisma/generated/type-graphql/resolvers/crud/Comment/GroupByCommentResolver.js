"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByCommentResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GroupByCommentArgs_1 = require("./args/GroupByCommentArgs");
const Comment_1 = require("../../../models/Comment");
const CommentGroupBy_1 = require("../../outputs/CommentGroupBy");
const helpers_1 = require("../../../helpers");
let GroupByCommentResolver = exports.GroupByCommentResolver = class GroupByCommentResolver {
    async groupByComment(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).comment.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [CommentGroupBy_1.CommentGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByCommentArgs_1.GroupByCommentArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], GroupByCommentResolver.prototype, "groupByComment", null);
exports.GroupByCommentResolver = GroupByCommentResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Comment_1.Comment)
], GroupByCommentResolver);
