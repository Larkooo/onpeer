"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManySyncResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DeleteManySyncArgs_1 = require("./args/DeleteManySyncArgs");
const Sync_1 = require("../../../models/Sync");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let DeleteManySyncResolver = exports.DeleteManySyncResolver = class DeleteManySyncResolver {
    async deleteManySync(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).sync.deleteMany({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManySyncArgs_1.DeleteManySyncArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DeleteManySyncResolver.prototype, "deleteManySync", null);
exports.DeleteManySyncResolver = DeleteManySyncResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Sync_1.Sync)
], DeleteManySyncResolver);
