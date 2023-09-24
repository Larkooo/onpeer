"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOneSyncResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CreateOneSyncArgs_1 = require("./args/CreateOneSyncArgs");
const Sync_1 = require("../../../models/Sync");
const helpers_1 = require("../../../helpers");
let CreateOneSyncResolver = exports.CreateOneSyncResolver = class CreateOneSyncResolver {
    async createOneSync(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).sync.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Sync_1.Sync, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateOneSyncArgs_1.CreateOneSyncArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CreateOneSyncResolver.prototype, "createOneSync", null);
exports.CreateOneSyncResolver = CreateOneSyncResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Sync_1.Sync)
], CreateOneSyncResolver);
