"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstLikeArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const LikeOrderByWithRelationInput_1 = require("../../../inputs/LikeOrderByWithRelationInput");
const LikeWhereInput_1 = require("../../../inputs/LikeWhereInput");
const LikeWhereUniqueInput_1 = require("../../../inputs/LikeWhereUniqueInput");
const LikeScalarFieldEnum_1 = require("../../../../enums/LikeScalarFieldEnum");
let FindFirstLikeArgs = exports.FindFirstLikeArgs = class FindFirstLikeArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LikeWhereInput_1.LikeWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", LikeWhereInput_1.LikeWhereInput)
], FindFirstLikeArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [LikeOrderByWithRelationInput_1.LikeOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstLikeArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LikeWhereUniqueInput_1.LikeWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", LikeWhereUniqueInput_1.LikeWhereUniqueInput)
], FindFirstLikeArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstLikeArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstLikeArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [LikeScalarFieldEnum_1.LikeScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstLikeArgs.prototype, "distinct", void 0);
exports.FindFirstLikeArgs = FindFirstLikeArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindFirstLikeArgs);
