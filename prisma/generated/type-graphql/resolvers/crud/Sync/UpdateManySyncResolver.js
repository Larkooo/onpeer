"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManySyncResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UpdateManySyncArgs_1 = require("./args/UpdateManySyncArgs");
const Sync_1 = require("../../../models/Sync");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let UpdateManySyncResolver = exports.UpdateManySyncResolver = class UpdateManySyncResolver {
    async updateManySync(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).sync.updateMany({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManySyncArgs_1.UpdateManySyncArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpdateManySyncResolver.prototype, "updateManySync", null);
exports.UpdateManySyncResolver = UpdateManySyncResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Sync_1.Sync)
], UpdateManySyncResolver);
