"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByVideoResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GroupByVideoArgs_1 = require("./args/GroupByVideoArgs");
const Video_1 = require("../../../models/Video");
const VideoGroupBy_1 = require("../../outputs/VideoGroupBy");
const helpers_1 = require("../../../helpers");
let GroupByVideoResolver = exports.GroupByVideoResolver = class GroupByVideoResolver {
    async groupByVideo(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).video.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [VideoGroupBy_1.VideoGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByVideoArgs_1.GroupByVideoArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], GroupByVideoResolver.prototype, "groupByVideo", null);
exports.GroupByVideoResolver = GroupByVideoResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Video_1.Video)
], GroupByVideoResolver);
