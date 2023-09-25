"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteOneVideoResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DeleteOneVideoArgs_1 = require("./args/DeleteOneVideoArgs");
const Video_1 = require("../../../models/Video");
const helpers_1 = require("../../../helpers");
let DeleteOneVideoResolver = exports.DeleteOneVideoResolver = class DeleteOneVideoResolver {
    async deleteOneVideo(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).video.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Video_1.Video, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteOneVideoArgs_1.DeleteOneVideoArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DeleteOneVideoResolver.prototype, "deleteOneVideo", null);
exports.DeleteOneVideoResolver = DeleteOneVideoResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Video_1.Video)
], DeleteOneVideoResolver);
