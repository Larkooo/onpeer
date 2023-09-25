"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VideoLikesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const LikeOrderByWithRelationInput_1 = require("../../../inputs/LikeOrderByWithRelationInput");
const LikeWhereInput_1 = require("../../../inputs/LikeWhereInput");
const LikeWhereUniqueInput_1 = require("../../../inputs/LikeWhereUniqueInput");
const LikeScalarFieldEnum_1 = require("../../../../enums/LikeScalarFieldEnum");
let VideoLikesArgs = exports.VideoLikesArgs = class VideoLikesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LikeWhereInput_1.LikeWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", LikeWhereInput_1.LikeWhereInput)
], VideoLikesArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [LikeOrderByWithRelationInput_1.LikeOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], VideoLikesArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LikeWhereUniqueInput_1.LikeWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", LikeWhereUniqueInput_1.LikeWhereUniqueInput)
], VideoLikesArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], VideoLikesArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], VideoLikesArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [LikeScalarFieldEnum_1.LikeScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], VideoLikesArgs.prototype, "distinct", void 0);
exports.VideoLikesArgs = VideoLikesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], VideoLikesArgs);
