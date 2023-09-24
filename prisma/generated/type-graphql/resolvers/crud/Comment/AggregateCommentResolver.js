"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateCommentResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AggregateCommentArgs_1 = require("./args/AggregateCommentArgs");
const Comment_1 = require("../../../models/Comment");
const AggregateComment_1 = require("../../outputs/AggregateComment");
const helpers_1 = require("../../../helpers");
let AggregateCommentResolver = exports.AggregateCommentResolver = class AggregateCommentResolver {
    async aggregateComment(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).comment.aggregate({
            ...args,
            ...(0, helpers_1.transformInfoIntoPrismaArgs)(info),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateComment_1.AggregateComment, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateCommentArgs_1.AggregateCommentArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AggregateCommentResolver.prototype, "aggregateComment", null);
exports.AggregateCommentResolver = AggregateCommentResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Comment_1.Comment)
], AggregateCommentResolver);
