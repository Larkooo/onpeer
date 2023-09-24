"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOneVideoResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UpdateOneVideoArgs_1 = require("./args/UpdateOneVideoArgs");
const Video_1 = require("../../../models/Video");
const helpers_1 = require("../../../helpers");
let UpdateOneVideoResolver = exports.UpdateOneVideoResolver = class UpdateOneVideoResolver {
    async updateOneVideo(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).video.update({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateOneVideoArgs_1.UpdateOneVideoArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpdateOneVideoResolver.prototype, "updateOneVideo", null);
exports.UpdateOneVideoResolver = UpdateOneVideoResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Video_1.Video)
], UpdateOneVideoResolver);
