"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByLikeArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const LikeOrderByWithAggregationInput_1 = require("../../../inputs/LikeOrderByWithAggregationInput");
const LikeScalarWhereWithAggregatesInput_1 = require("../../../inputs/LikeScalarWhereWithAggregatesInput");
const LikeWhereInput_1 = require("../../../inputs/LikeWhereInput");
const LikeScalarFieldEnum_1 = require("../../../../enums/LikeScalarFieldEnum");
let GroupByLikeArgs = exports.GroupByLikeArgs = class GroupByLikeArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LikeWhereInput_1.LikeWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", LikeWhereInput_1.LikeWhereInput)
], GroupByLikeArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [LikeOrderByWithAggregationInput_1.LikeOrderByWithAggregationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByLikeArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [LikeScalarFieldEnum_1.LikeScalarFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByLikeArgs.prototype, "by", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LikeScalarWhereWithAggregatesInput_1.LikeScalarWhereWithAggregatesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", LikeScalarWhereWithAggregatesInput_1.LikeScalarWhereWithAggregatesInput)
], GroupByLikeArgs.prototype, "having", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByLikeArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByLikeArgs.prototype, "skip", void 0);
exports.GroupByLikeArgs = GroupByLikeArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], GroupByLikeArgs);
