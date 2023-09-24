"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyVideoResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DeleteManyVideoArgs_1 = require("./args/DeleteManyVideoArgs");
const Video_1 = require("../../../models/Video");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let DeleteManyVideoResolver = exports.DeleteManyVideoResolver = class DeleteManyVideoResolver {
    async deleteManyVideo(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).video.deleteMany({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyVideoArgs_1.DeleteManyVideoArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DeleteManyVideoResolver.prototype, "deleteManyVideo", null);
exports.DeleteManyVideoResolver = DeleteManyVideoResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Video_1.Video)
], DeleteManyVideoResolver);
