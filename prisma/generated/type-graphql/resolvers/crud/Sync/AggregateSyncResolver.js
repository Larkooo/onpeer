"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateSyncResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AggregateSyncArgs_1 = require("./args/AggregateSyncArgs");
const Sync_1 = require("../../../models/Sync");
const AggregateSync_1 = require("../../outputs/AggregateSync");
const helpers_1 = require("../../../helpers");
let AggregateSyncResolver = exports.AggregateSyncResolver = class AggregateSyncResolver {
    async aggregateSync(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).sync.aggregate({
            ...args,
            ...(0, helpers_1.transformInfoIntoPrismaArgs)(info),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateSync_1.AggregateSync, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateSyncArgs_1.AggregateSyncArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AggregateSyncResolver.prototype, "aggregateSync", null);
exports.AggregateSyncResolver = AggregateSyncResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Sync_1.Sync)
], AggregateSyncResolver);
