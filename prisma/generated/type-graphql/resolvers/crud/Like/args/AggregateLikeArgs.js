"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateLikeArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const LikeOrderByWithRelationInput_1 = require("../../../inputs/LikeOrderByWithRelationInput");
const LikeWhereInput_1 = require("../../../inputs/LikeWhereInput");
const LikeWhereUniqueInput_1 = require("../../../inputs/LikeWhereUniqueInput");
let AggregateLikeArgs = exports.AggregateLikeArgs = class AggregateLikeArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LikeWhereInput_1.LikeWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", LikeWhereInput_1.LikeWhereInput)
], AggregateLikeArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [LikeOrderByWithRelationInput_1.LikeOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AggregateLikeArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LikeWhereUniqueInput_1.LikeWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", LikeWhereUniqueInput_1.LikeWhereUniqueInput)
], AggregateLikeArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateLikeArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateLikeArgs.prototype, "skip", void 0);
exports.AggregateLikeArgs = AggregateLikeArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], AggregateLikeArgs);
