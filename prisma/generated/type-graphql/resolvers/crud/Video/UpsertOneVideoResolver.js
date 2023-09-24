"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOneVideoResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UpsertOneVideoArgs_1 = require("./args/UpsertOneVideoArgs");
const Video_1 = require("../../../models/Video");
const helpers_1 = require("../../../helpers");
let UpsertOneVideoResolver = exports.UpsertOneVideoResolver = class UpsertOneVideoResolver {
    async upsertOneVideo(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).video.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Video_1.Video, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertOneVideoArgs_1.UpsertOneVideoArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpsertOneVideoResolver.prototype, "upsertOneVideo", null);
exports.UpsertOneVideoResolver = UpsertOneVideoResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Video_1.Video)
], UpsertOneVideoResolver);
