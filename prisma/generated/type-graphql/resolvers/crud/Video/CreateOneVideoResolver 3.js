"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOneVideoResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CreateOneVideoArgs_1 = require("./args/CreateOneVideoArgs");
const Video_1 = require("../../../models/Video");
const helpers_1 = require("../../../helpers");
let CreateOneVideoResolver = exports.CreateOneVideoResolver = class CreateOneVideoResolver {
    async createOneVideo(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).video.create({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateOneVideoArgs_1.CreateOneVideoArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CreateOneVideoResolver.prototype, "createOneVideo", null);
exports.CreateOneVideoResolver = CreateOneVideoResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Video_1.Video)
], CreateOneVideoResolver);
