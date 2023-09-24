"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByVideoArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const VideoOrderByWithAggregationInput_1 = require("../../../inputs/VideoOrderByWithAggregationInput");
const VideoScalarWhereWithAggregatesInput_1 = require("../../../inputs/VideoScalarWhereWithAggregatesInput");
const VideoWhereInput_1 = require("../../../inputs/VideoWhereInput");
const VideoScalarFieldEnum_1 = require("../../../../enums/VideoScalarFieldEnum");
let GroupByVideoArgs = exports.GroupByVideoArgs = class GroupByVideoArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VideoWhereInput_1.VideoWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VideoWhereInput_1.VideoWhereInput)
], GroupByVideoArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [VideoOrderByWithAggregationInput_1.VideoOrderByWithAggregationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByVideoArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [VideoScalarFieldEnum_1.VideoScalarFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByVideoArgs.prototype, "by", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VideoScalarWhereWithAggregatesInput_1.VideoScalarWhereWithAggregatesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VideoScalarWhereWithAggregatesInput_1.VideoScalarWhereWithAggregatesInput)
], GroupByVideoArgs.prototype, "having", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByVideoArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByVideoArgs.prototype, "skip", void 0);
exports.GroupByVideoArgs = GroupByVideoArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], GroupByVideoArgs);
