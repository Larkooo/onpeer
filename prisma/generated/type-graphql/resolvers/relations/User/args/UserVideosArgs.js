"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserVideosArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const VideoOrderByWithRelationInput_1 = require("../../../inputs/VideoOrderByWithRelationInput");
const VideoWhereInput_1 = require("../../../inputs/VideoWhereInput");
const VideoWhereUniqueInput_1 = require("../../../inputs/VideoWhereUniqueInput");
const VideoScalarFieldEnum_1 = require("../../../../enums/VideoScalarFieldEnum");
let UserVideosArgs = exports.UserVideosArgs = class UserVideosArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VideoWhereInput_1.VideoWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VideoWhereInput_1.VideoWhereInput)
], UserVideosArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [VideoOrderByWithRelationInput_1.VideoOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], UserVideosArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VideoWhereUniqueInput_1.VideoWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VideoWhereUniqueInput_1.VideoWhereUniqueInput)
], UserVideosArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], UserVideosArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], UserVideosArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [VideoScalarFieldEnum_1.VideoScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], UserVideosArgs.prototype, "distinct", void 0);
exports.UserVideosArgs = UserVideosArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UserVideosArgs);
