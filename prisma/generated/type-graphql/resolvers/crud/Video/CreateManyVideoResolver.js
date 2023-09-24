"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyVideoResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CreateManyVideoArgs_1 = require("./args/CreateManyVideoArgs");
const Video_1 = require("../../../models/Video");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let CreateManyVideoResolver = exports.CreateManyVideoResolver = class CreateManyVideoResolver {
    async createManyVideo(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).video.createMany({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyVideoArgs_1.CreateManyVideoArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CreateManyVideoResolver.prototype, "createManyVideo", null);
exports.CreateManyVideoResolver = CreateManyVideoResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Video_1.Video)
], CreateManyVideoResolver);
