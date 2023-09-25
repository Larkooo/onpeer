"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOneLikeArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const LikeCreateInput_1 = require("../../../inputs/LikeCreateInput");
const LikeUpdateInput_1 = require("../../../inputs/LikeUpdateInput");
const LikeWhereUniqueInput_1 = require("../../../inputs/LikeWhereUniqueInput");
let UpsertOneLikeArgs = exports.UpsertOneLikeArgs = class UpsertOneLikeArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LikeWhereUniqueInput_1.LikeWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", LikeWhereUniqueInput_1.LikeWhereUniqueInput)
], UpsertOneLikeArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LikeCreateInput_1.LikeCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", LikeCreateInput_1.LikeCreateInput)
], UpsertOneLikeArgs.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LikeUpdateInput_1.LikeUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", LikeUpdateInput_1.LikeUpdateInput)
], UpsertOneLikeArgs.prototype, "update", void 0);
exports.UpsertOneLikeArgs = UpsertOneLikeArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpsertOneLikeArgs);
