"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstCommentResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindFirstCommentArgs_1 = require("./args/FindFirstCommentArgs");
const Comment_1 = require("../../../models/Comment");
const helpers_1 = require("../../../helpers");
let FindFirstCommentResolver = exports.FindFirstCommentResolver = class FindFirstCommentResolver {
    async findFirstComment(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).comment.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Comment_1.Comment, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstCommentArgs_1.FindFirstCommentArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindFirstCommentResolver.prototype, "findFirstComment", null);
exports.FindFirstCommentResolver = FindFirstCommentResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Comment_1.Comment)
], FindFirstCommentResolver);
