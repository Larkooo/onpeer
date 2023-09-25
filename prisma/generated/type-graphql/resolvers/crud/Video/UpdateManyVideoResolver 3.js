"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyVideoResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UpdateManyVideoArgs_1 = require("./args/UpdateManyVideoArgs");
const Video_1 = require("../../../models/Video");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let UpdateManyVideoResolver = exports.UpdateManyVideoResolver = class UpdateManyVideoResolver {
    async updateManyVideo(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).video.updateMany({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyVideoArgs_1.UpdateManyVideoArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpdateManyVideoResolver.prototype, "updateManyVideo", null);
exports.UpdateManyVideoResolver = UpdateManyVideoResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Video_1.Video)
], UpdateManyVideoResolver);
