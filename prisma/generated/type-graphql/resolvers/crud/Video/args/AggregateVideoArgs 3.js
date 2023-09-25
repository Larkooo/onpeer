"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateVideoArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const VideoOrderByWithRelationInput_1 = require("../../../inputs/VideoOrderByWithRelationInput");
const VideoWhereInput_1 = require("../../../inputs/VideoWhereInput");
const VideoWhereUniqueInput_1 = require("../../../inputs/VideoWhereUniqueInput");
let AggregateVideoArgs = exports.AggregateVideoArgs = class AggregateVideoArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VideoWhereInput_1.VideoWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VideoWhereInput_1.VideoWhereInput)
], AggregateVideoArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [VideoOrderByWithRelationInput_1.VideoOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AggregateVideoArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VideoWhereUniqueInput_1.VideoWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VideoWhereUniqueInput_1.VideoWhereUniqueInput)
], AggregateVideoArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateVideoArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateVideoArgs.prototype, "skip", void 0);
exports.AggregateVideoArgs = AggregateVideoArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], AggregateVideoArgs);
