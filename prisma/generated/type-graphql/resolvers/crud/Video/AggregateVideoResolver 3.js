"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateVideoResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AggregateVideoArgs_1 = require("./args/AggregateVideoArgs");
const Video_1 = require("../../../models/Video");
const AggregateVideo_1 = require("../../outputs/AggregateVideo");
const helpers_1 = require("../../../helpers");
let AggregateVideoResolver = exports.AggregateVideoResolver = class AggregateVideoResolver {
    async aggregateVideo(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).video.aggregate({
            ...args,
            ...(0, helpers_1.transformInfoIntoPrismaArgs)(info),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateVideo_1.AggregateVideo, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateVideoArgs_1.AggregateVideoArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AggregateVideoResolver.prototype, "aggregateVideo", null);
exports.AggregateVideoResolver = AggregateVideoResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Video_1.Video)
], AggregateVideoResolver);
