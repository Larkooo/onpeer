"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindManyCommentResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindManyCommentArgs_1 = require("./args/FindManyCommentArgs");
const Comment_1 = require("../../../models/Comment");
const helpers_1 = require("../../../helpers");
let FindManyCommentResolver = exports.FindManyCommentResolver = class FindManyCommentResolver {
    async comments(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).comment.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Comment_1.Comment], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyCommentArgs_1.FindManyCommentArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindManyCommentResolver.prototype, "comments", null);
exports.FindManyCommentResolver = FindManyCommentResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Comment_1.Comment)
], FindManyCommentResolver);
